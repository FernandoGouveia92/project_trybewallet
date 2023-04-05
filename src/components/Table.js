import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../redux/actions/index';
import { TableFather, TableContainer } from '../styles/table/styles';

class Table extends Component {
  render() {
    const { expensesToFillTable, btnDelete } = this.props;
    return (
      <TableFather>
        <TableContainer>
          <thead>
            <tr>
              <th data-testid="description-column">Descrição</th>
              <th data-testid="tag-column">Tag</th>
              <th data-testid="method-column">Método de pagamento</th>
              <th data-testid="value-column">Valor</th>
              <th data-testid="currency-column">Moeda</th>
              <th data-testid="exchange-column">Câmbio utilizado</th>
              <th data-testid="value-convert-column">Valor convertido</th>
              <th data-testid="real-column">Moeda de conversão</th>
              <th data-testid="buttons-column">Editar/Excluir</th>
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
                    <td>
                      {Number(i.value * i.exchangeRates[i.currency].ask).toFixed(2)}
                    </td>
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
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </TableContainer>
      </TableFather>
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
