import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Page from './Page';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
