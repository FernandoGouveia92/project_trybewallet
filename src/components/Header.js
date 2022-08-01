import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  addTotalCost = () => {
    const { expenses } = this.props;
    let totalAmount = 0;
    expenses.forEach(({ value, exchangeRates, currency }) => {
      totalAmount += value * exchangeRates[currency].ask;
    });
    return totalAmount.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        Header
        <h2 data-testid="email-field">{email}</h2>
        <p data-testid="total-field">
          {this.addTotalCost()}
        </p>
        <p data-testid="header-currency-field">Em BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
