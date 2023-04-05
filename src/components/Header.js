import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HeaderDiv, HeaderH2, HeaderP, HeaderMoneyCont } from '../styles/header/styles';

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
      <HeaderDiv>
        <HeaderH2 data-testid="email-field">{email}</HeaderH2>
        <HeaderMoneyCont>
          <HeaderP data-testid="total-field">
            {this.addTotalCost()}
          </HeaderP>
          <HeaderP data-testid="header-currency-field">BRL</HeaderP>
        </HeaderMoneyCont>
      </HeaderDiv>
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
