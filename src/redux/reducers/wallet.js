const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RECEIVE_MONEY_INFO':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'USER_DEBT':
    return {
      ...state,
      expenses: [...state.expenses, action.debts],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.debts),
    };
  default:
    return state;
  }
};

export default wallet;
