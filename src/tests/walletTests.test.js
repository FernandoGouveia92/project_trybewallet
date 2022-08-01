import React from 'react';
import { renderWithRouter, renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App'
import renderWith from './helpers/renderWith';
import { BrowserRouter } from 'react-router-dom';
import Wallet from '../pages/Wallet';

describe('Testes do LOGIN', () => {
  it('Testa se certos componentes estão sendo exibidos', () => {
    const {getByTestId} = renderWithRouterAndRedux(
      <Wallet />
      );
      
    const valueInput = getByTestId('value-input')
    const emailField = getByTestId('email-field')
    const totalField = getByTestId('total-field')
    const currencyField = getByTestId('header-currency-field')
    const descriptionInput = getByTestId('description-input')
    const currencyInput = getByTestId('currency-input')
    const methodInput = getByTestId('method-input')
    const tagInput = getByTestId('tag-input')

    expect(valueInput).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(totalField).toBeInTheDocument();
    expect(currencyField).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();

  })
})