import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import properties from './properties.json';

ReactDOM.render(
  <App results={properties.results} />,
  document.getElementById('app')
);
