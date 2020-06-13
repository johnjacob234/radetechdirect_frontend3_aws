import React from 'react';
import { render } from 'react-dom';
import { StartingStore, Api } from './stores';
import { Provider } from 'mobx-react';
const api = new Api();
const startingStore = new StartingStore(api);

const stores = {
	startingStore
};

import App from './App/App';

render(
	<Provider {...stores}>
		<App />
	</Provider>,
	document.getElementById('app')
);
