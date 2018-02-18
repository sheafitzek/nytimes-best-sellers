import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById(`root`)
);

registerServiceWorker();
