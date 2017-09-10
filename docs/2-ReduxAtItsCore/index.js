import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers';

/*
  * this is an example of implimenting "vanilla" redux, not using the react-redux package.  It's fine for really 
  * small apps, but not particularly scalable.  Since we have to pass the redux store to the app, we would need to
  * then also pass it down through every component layer that needs access to the store.  This defeats the whole
  * purpose of redux.
*/


const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
