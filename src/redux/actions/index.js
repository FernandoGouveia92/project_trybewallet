const user = 'USER_LOGIN';
const wallet = 'USER_WALLET';
const fullWallet = 'FULL_WALLET';

const userLoginEmail = (email) => ({
  type: user,
  email,
});

const userWallet = () => ({
  type: wallet,
});

const fetchWallet = (currencies) => ({
  type: fullWallet,
  currencies,
});

export function fetchMonetary() {
  return (dispatch) => {
    dispatch(userWallet());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(fetchWallet(currencies)));
  };
}

export {
  user,
  wallet,
  userLoginEmail,
  userWallet,
};
