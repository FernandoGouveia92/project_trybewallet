const USER_EMAIL = 'USER_LOGIN';
const REQUEST_MONEY_INFO = 'REQUEST_MONEY_INFO';
const RECEIVE_MONEY_INFO = 'RECEIVE_MONEY_INFO';
const REQUEST_MONEY_FAILURE = 'REQUEST_MONEY_FAILURE';
const USER_DEBT = 'USER_DEBT';
const DELETE_EXPENSE = 'DELETE_EXPENSE';

const userLoginEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

const currentDebt = (debts) => ({
  type: USER_DEBT,
  debts,
});

const requestMoneyInfo = () => ({
  type: REQUEST_MONEY_INFO, // a única função dessa action é 'eu pedi os dados'
});

const receiveMoneyInfo = (currencies) => ({
  type: RECEIVE_MONEY_INFO,
  currencies,
});
// object.keys(currencies)
const fetchFailureRequest = () => ({
  type: REQUEST_MONEY_FAILURE,
});

export function fetchMonetary() {
  return async (dispatch) => {
    dispatch(requestMoneyInfo());
    const url = await fetch('https://economia.awesomeapi.com.br/json/all');
    // avisar a aplicação que o fetch vai ser iniciado
    const response = await url.json();
    dispatch(receiveMoneyInfo(Object.keys(response)
      .filter((e) => e !== 'USDT')));
  };
}

const deleteExpense = (index) => ({
  type: DELETE_EXPENSE,
  debts: index,
});

export {
  USER_EMAIL,
  REQUEST_MONEY_INFO,
  RECEIVE_MONEY_INFO,
  REQUEST_MONEY_FAILURE,
  USER_DEBT,
  DELETE_EXPENSE,
  userLoginEmail,
  requestMoneyInfo as userWallet,
  fetchFailureRequest,
  currentDebt,
  deleteExpense,
};
