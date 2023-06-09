import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App'
import userEvent from '@testing-library/user-event';

describe('Testes do LOGIN', () => {
  it('Testa se certos componentes estão sendo exibidos', () => {
    const { getByTestId } = renderWithRouterAndRedux(
        <App />
    );
    const emailInput = getByTestId('email-input')
    const passwordInput = getByTestId('password-input')
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Teste de login de usuário', () => {
    const { getByTestId, getByText } = renderWithRouterAndRedux(
      <App />
  );
  const emailInput = getByTestId('email-input')
  const passwordInput = getByTestId('password-input')
  const btnLogin = getByText('Entrar')
  userEvent.type(emailInput, 'alguem@alguem.com')
  userEvent.type(passwordInput, '1236547')
  userEvent.click(btnLogin)
  expect(emailInput).not.toBeInTheDocument();
  expect(passwordInput).not.toBeInTheDocument();
  expect(btnLogin).not.toBeInTheDocument();
    
  });
})