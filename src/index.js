import React from 'react';
import ReactDOM from 'react-dom';
import MovieCollection from './MovieCollection';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MovieCollection />, document.getElementById('root'));
registerServiceWorker();
