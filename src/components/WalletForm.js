import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMonetary, currentDebt } from '../redux/actions';
import { FormContainer,
  FormWallet,
  WalletLabel,
  SelectContainer,
  Input,
  Select,
  Button } from '../styles/walletForm/styles';

const initialStateForm = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletForm extends Component {
  constructor() {
    super();

    this.state = { ...initialStateForm };
  }

  componentDidMount() {
    // requisição da API
    const { currentMoneyInfo } = this.props;
    // execução da função
    currentMoneyInfo();
  }

  handleAddExpense = async () => {
    const { btnRegisterDebt, expenses } = this.props;
    const objChamando = await fetch('https://economia.awesomeapi.com.br/json/all');
    const objRetornado = await objChamando.json();
    const objPronto = {
      id: expenses.length,
      ...this.state,
      exchangeRates: objRetornado,
    };
    btnRegisterDebt(objPronto);
    this.setState({
      ...initialStateForm,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(value);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <FormContainer>
        <FormWallet>
          <WalletLabel htmlFor="value-input">
            Valor:
            <Input
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
              name="value"
              type="number"
            />
          </WalletLabel>
          <WalletLabel htmlFor="description-input">
            Descrição:
            <Input
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
              name="description"
              type="text"
            />
          </WalletLabel>
          <SelectContainer htmlFor="currencies">
            Currency:
            <Select
              value={ currency }
              onChange={ this.handleChange }
              name="currency"
              data-testid="currency-input"
            >
              {
                currencies.map((e, index) => (
                  <option key={ index }>{e}</option>
                ))
              }
            </Select>
          </SelectContainer>
          <SelectContainer htmlFor="payment-method">
            Forma de pgto:
            <Select
              data-testid="method-input"
              value={ method }
              onChange={ this.handleChange }
              name="method"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </Select>
          </SelectContainer>
          <SelectContainer htmlFor="tag-input">
            Tag:
            <Select
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
              name="tag"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </Select>
          </SelectContainer>
          <Button
            type="button"
            onClick={ () => {
              this.handleAddExpense();
            } }
          >
            Adicionar Despesa
          </Button>
        </FormWallet>
      </FormContainer>
    );
  }
}

WalletForm.propTypes = {
  currentMoneyInfo: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  btnRegisterDebt: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currentMoneyInfo: () => dispatch(fetchMonetary()),
  btnRegisterDebt: (state) => {
    dispatch(currentDebt(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
