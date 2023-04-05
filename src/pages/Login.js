import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLoginEmail } from '../redux/actions/index';
import {
  LoginContainer,
  LoginForm,
  LoginHeading,
  InputLabel,
  InputField,
  SubmitButton,
} from '../styles/login/styles';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      validPassword: '',
      validEmail: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  emailValidator = () => {
    const { validEmail } = this.state;
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    );
    if (validEmail.match(emailRegex)) {
      return true;
    }
    return false;
  }

  passwordValidator = () => {
    const minChar = 5;
    const { validPassword } = this.state;
    if (validPassword.length > minChar) {
      return true;
    }
    return false;
  }

  btnValidator = () => {
    if (this.passwordValidator() && this.emailValidator()) {
      return false;
    }
    return true;
  }

  render() {
    const { btnRedirect, history: { push } } = this.props;
    const { validPassword, validEmail } = this.state;
    return (
      <LoginContainer>
        <LoginForm>
          <LoginHeading>Login</LoginHeading>
          <InputLabel htmlFor="email-input">
            E-mail:
          </InputLabel>
          <InputField
            name="validEmail"
            value={ validEmail }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <InputLabel htmlFor="password-input">
            Password:
          </InputLabel>
          <InputField
            name="validPassword"
            value={ validPassword }
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <SubmitButton
            htmlFor="btnEnter"
            type="submit"
            disabled={ this.btnValidator() }
            onClick={ () => {
              btnRedirect(validEmail);
              push('/carteira');
            } }
          >
            Entrar
          </SubmitButton>
        </LoginForm>
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  btnRedirect: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  btnRedirect: (state) => {
    dispatch(userLoginEmail(state));
  },
});

export default connect(null, mapDispatchToProps)(Login);
