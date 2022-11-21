// import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//import rootReducer from "./components/modules";

import React from 'react';
import { createRoot } from 'react-dom/client';
import rootReducer from './modules';

const store = createStore(rootReducer);
//const store = createStore(rootReducer);
//const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Provider store={store}><App /></Provider>);
//root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
