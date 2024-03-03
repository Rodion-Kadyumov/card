import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './components/styled/Theme.styles.tsx';
import { GlobalStyles } from './components/styled/GlobalStyles.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme = {myTheme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
);

reportWebVitals();