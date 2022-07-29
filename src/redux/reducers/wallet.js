const WALLET_INITIAL_STATE = {};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_WALLET':
    return {
      ...state,
      currencies: action.state,
      expenses: action.state,
      editor: action.state,
      idToEdit: action.state,
    };
  default:
    return state;
  }
};

export default wallet;
