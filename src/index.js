import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import App from './components/App';

// create redux store
const store = applyMiddleware()(createStore);

render(
	<Provider store={store(reducers)}>
		{/* wrap App in store provider */}
		<App />
	</Provider>,
	document.getElementById(`root`)
);

registerServiceWorker();
