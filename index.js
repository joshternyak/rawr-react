import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './src/contexts/theme';

import App from './src/App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root'),
);
