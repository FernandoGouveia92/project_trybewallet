import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalCost: 0,
    };
  }

  render() {
    const {
      email,
    } = this.props;
    const { totalCost } = this.state;
    return (
      <div>
        TrybeWallet
        <h2 data-testid="email-field">{email}</h2>
        <p data-testid="total-field">{ totalCost }</p>
        <p data-testid="header-currency-field">BRL</p>
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
