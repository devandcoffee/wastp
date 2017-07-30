<?php
namespace Deployer;

require 'vendor/deployer/recipes/local.php';
require 'recipe/laravel.php';

// Configuration
set('ssh_type', 'native');
set('ssh_multiplexing', true);

set('local_release_path', '/tmp/wastp');

set('repository', 'git@github.com:devandcoffee/wastp.git');

set('branch', 'master');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts
host('104.236.121.143')
    ->stage('testing')
    ->user('wastp')
    ->forwardAgent(true)
    ->set('deploy_path', '/home/wastp/deploy');

// Tasks
task('upload_code', function() {
    upload(get('local_release_path'), get('release_path'));
});

task('remove_local_release', function() {
    runLocally("rm -rf {{local_release_path}}");
});

task('docker_compose_up', function() {
    run("cd {{deploy_path}} && docker-compose up -d");
});

task('composer_install', function() {
    runLocally("cd {{local_release_path}}/stapi && composer install --no-dev");
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'local:update_code',
    'composer_install',
    'artisan:cache:clear',
    'artisan:optimize',
    'docker_compose_up',
    'deploy:symlink',
    'deploy:unlock',
    'remove_local_release',
]);
