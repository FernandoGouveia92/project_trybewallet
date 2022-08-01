import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMonetary, currentDebt } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    // requisição da API
    const { currentMoneyInfo } = this.props;
    // execução da função
    currentMoneyInfo();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(value);
  }

  render() {
    const { currencies, btnRegisterDebt } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        WalletForm
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
              name="value"
              type="number"
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
              name="description"
              type="text"
            />
          </label>
          <label htmlFor="currencies">
            Currency:
            <select
              value={ currency }
              onChange={ this.handleChange }
              name="currency"
            >
              {
                currencies.map((e, index) => (
                  <option key={ index }>{e}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="payment-method">
            <select
              data-testid="method-input"
              value={ method }
              onChange={ this.handleChange }
              name="method"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            <select
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
              name="tag"
            >
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ () => {
              btnRegisterDebt(this.state);
            } }
          >
            Adicionar Despesa

          </button>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currentMoneyInfo: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  btnRegisterDebt: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currentMoneyInfo: () => dispatch(fetchMonetary()),
  btnRegisterDebt: (state) => {
    dispatch(currentDebt(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
