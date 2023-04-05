import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import GlobalStyles from './styles/globalStyles';
import { StyledBrowserRouter } from './styles/router/styles';

ReactDOM.render(
  <StyledBrowserRouter>
    <GlobalStyles />
    <Provider store={ store }>
      <App />
    </Provider>
  </StyledBrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
