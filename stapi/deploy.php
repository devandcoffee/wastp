<?php
namespace Deployer;

require 'vendor/deployer/recipes/local.php';
require 'recipe/laravel.php';

// Settings

// ssh settings
set('ssh_type', 'native');
set('ssh_multiplexing', true);

// local paths
set('local_release_path', '/tmp/wastp');
set('local_stapi', '{{local_release_path}}/stapi');
set('local_stweb', '{{local_release_path}}/stweb');

// deploy paths
set('deploy_path', '/home/wastp/deploy');
set('deploy_wastp', '{{deploy_path}}/current/wastp');
set('deploy_stapi', '{{deploy_path}}/current/wastp/stapi');
set('deploy_stweb', '{{deploy_path}}/current/wastp/stweb');

set('local_releases_list', function () {
    $list = null;
    return $list;
});

// Repository settings
set('repository', 'git@github.com:devandcoffee/wastp.git');
set('branch', 'master');

// Hosts
host('104.236.121.143')
    ->stage('testing')
    ->user('wastp')
    ->forwardAgent(true)
    ->set('deploy_path', '{{deploy_path}}');

// Tasks
desc('Upload local folder on the remote server');
task('upload_code', function() {
    upload(get('local_release_path'), get('release_path'));
});

desc('Remove relase temporal folder');
task('remove_local_release', function() {
    runLocally("rm -rf {{local_release_path}}");
});

desc('Load docker containers');
task('docker_compose_up', function() {
    run("cd {{deploy_wastp}} && docker-compose up -d");
});

desc('Install composer packages on stapi');
task('composer_install', function() {
    runLocally("cd {{local_stapi}} && {{bin/composer}} {{composer_options}}");
});

desc('Install npm packages on stweb');
task('npm_install', function() {
    runLocally("cd {{local_stweb}} && npm install");
});

// Artisan tasks
desc('Execute artisan migrate');
task('artisan_migrate', function() {
    run('{{bin/php}} {{deploy_stapi}}/artisan migrate --force');
});

desc('Execute artisan optimize');
task('artisan_optimize', function () {
    run('{{bin/php}} {{deploy_stapi}}/artisan optimize');
});

desc('Execute artisan cache:clear');
task('artisan_cache:clear', function () {
    run('{{bin/php}} {{deploy_stapi}}/artisan cache:clear');
});

// [Optional] if deploy fails automatically unlock and remove local folder.
after('deploy:failed', 'deploy:unlock');
after('deploy:failed', 'remove_local_release');

// Migrate database before symlink new release.
before('deploy:symlink', 'artisan_migrate');

// Main deploy task
task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'local:update_code',
    'composer_install',
    'npm_install',
    'upload_code',
    'artisan_cache:clear',
    'artisan_optimize',
    'docker_compose_up',
    'deploy:symlink',
    'deploy:unlock',
    'remove_local_release',
]);
