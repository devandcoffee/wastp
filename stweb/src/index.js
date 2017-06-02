import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes';

ReactDOM.render(
	<Root />,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const NextApp = require('./routes').default;
		ReactDOM.render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}
