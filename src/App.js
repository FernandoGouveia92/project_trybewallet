import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import GlobalStyles from './styles/globalStyles';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <GlobalStyles />
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </div>
    );
  }
}

export default App;
