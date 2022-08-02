import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../redux/actions/index';

class Table extends Component {
  render() {
    const { expensesToFillTable, btnDelete } = this.props;
    return (
      <table>
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
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => {
                        btnDelete(i.id);
                      } }
                    >
                      Deletar
                    </button>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      // onClick={ () => {
                      //   btnEdit();
                      // } }
                    >
                      Editar
                    </button>
                  </td>
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
  btnDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expensesToFillTable: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  btnDelete: (state) => dispatch(deleteExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
