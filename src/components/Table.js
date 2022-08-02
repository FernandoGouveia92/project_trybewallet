import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expensesToFillTable } = this.props;
    return (
      <table>
        Table
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expensesToFillTable
              .map((i) => (
                <tr key={ i.id }>
                  <td>{i.description}</td>
                  <td>{i.tag}</td>
                  <td>{i.method}</td>
                  <td>{Number(i.value).toFixed(2)}</td>
                  <td>{i.exchangeRates[i.currency].name}</td>
                  <td>{Number(i.exchangeRates[i.currency].ask).toFixed(2)}</td>
                  <td>{Number(i.value * i.exchangeRates[i.currency].ask).toFixed(2)}</td>
                  <td>Real</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expensesToFillTable: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expensesToFillTable: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
