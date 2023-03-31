import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testes do LOGIN', () => {
  it('Testa se certos componentes estão sendo exibidos', () => {
    const { getByTestId } = renderWithRouterAndRedux(
      <Wallet />,
    );

    const valueInput = getByTestId('value-input');
    const emailField = getByTestId('email-field');
    const totalField = getByTestId('total-field');
    const currencyField = getByTestId('header-currency-field');
    const descriptionInput = getByTestId('description-input');
    const currencyInput = getByTestId('currency-input');
    const methodInput = getByTestId('method-input');
    const tagInput = getByTestId('tag-input');

    expect(valueInput).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(totalField).toBeInTheDocument();
    expect(currencyField).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
  });
  it('Testes envolvendo redux', () => {
    const { getByText, getAllByRole, getByRole } = renderWithRouterAndRedux(
      <Wallet />,
    );

    const valueInput = getByText('Valor:');
    const descriptionInput = getByText('Descrição:');
    const currencyInput = getAllByRole('combobox')[0];
    const methodInput = getAllByRole('combobox')[1];
    const tagInput = getAllByRole('combobox')[2];
    const buttonInput = getByRole('button', { name: /adicionar despesa/i });

    userEvent.type(valueInput, '10');
    userEvent.type(descriptionInput, 'rango');
    userEvent.change(currencyInput, { target: { value: 1 } });
    userEvent.change(methodInput, { target: { value: 1 } });
    userEvent.change(tagInput, { target: { value: 1 } });
    // userEvent.click(buttonInput)
    console.log(valueInput);
    // expect(valueInput).toBe('10')
  });
});
