const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
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
      expenses: action.debts,
    };
  default:
    return state;
  }
};

export default wallet;

// {
//   user: {
//     email: '', // string que armazena o email da pessoa usuária
//   },
//   wallet: {
//     currencies: [], // array de string

//     expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates

//     editor: false, // valor booleano que indica de uma despesa está sendo editada

//     idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
//   }
// }
