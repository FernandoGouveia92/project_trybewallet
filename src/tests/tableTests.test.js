import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testes envolvendo a tabela de gastos', () => {
  it('Testa se os campos do cabeçalho da tabela estão aparecendo', () => {
    const {getAllByRole} = renderWithRouterAndRedux(
      <Wallet />
      );
    const tableColumns = getAllByRole('columnheader')
    expect(tableColumns).toHaveLength(9)
  });
  it('Testes dos elementos da tabela', () => {
    const {getByTestId} = renderWithRouterAndRedux(
      <Wallet />
      );
    
      const descriptionField = getByTestId('description-column')
      const tagField = getByTestId('tag-column')
      const methodField = getByTestId('method-column')
      const valueField = getByTestId('value-column')
      const currencyField = getByTestId('currency-column')
      const exchangeField = getByTestId('exchange-column')
      const valueConvertField = getByTestId('value-convert-column')
      const realField = getByTestId('real-column')
      const buttonsField = getByTestId('buttons-column')

      expect(descriptionField).toBeInTheDocument();
      expect(tagField).toBeInTheDocument();
      expect(methodField).toBeInTheDocument();
      expect(valueField).toBeInTheDocument();
      expect(currencyField).toBeInTheDocument();
      expect(exchangeField).toBeInTheDocument();
      expect(valueConvertField).toBeInTheDocument();
      expect(realField).toBeInTheDocument();
      expect(buttonsField).toBeInTheDocument();
  });
  it('', () => {});
  it('', () => {});
});
