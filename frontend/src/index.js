import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Web3 - Provides blockchain connection. 
import {Web3Provider} from 'react-web3';

ReactDOM.render(<Web3Provider> <App /> </Web3Provider> , document.getElementById('root'));
registerServiceWorker();
