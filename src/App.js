import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import { StyledSwitch } from './styles/router/styles';

class App extends React.Component {
  render() {
    return (
      // <div>
      <StyledSwitch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </StyledSwitch>
      // </div>
    );
  }
}

export default App;
