import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/style.css';
import './assets/css/font-awesome.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
