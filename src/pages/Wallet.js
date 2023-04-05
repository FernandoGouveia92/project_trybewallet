import React from 'react';

import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletContainer from '../styles/wallet/styles';

class Wallet extends React.Component {
  render() {
    return (
      <WalletContainer>
        <Header />
        <WalletForm />
        <Table />
      </WalletContainer>
    );
  }
}

export default Wallet;
