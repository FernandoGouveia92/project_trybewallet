import styled from 'styled-components';

// Login Container
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

// Login Form
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

// Login Heading
const LoginHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

// Input Label
const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

// Input Field
const InputField = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  width: 100%;
`;

// Submit Button
const SubmitButton = styled.button`
  background-color: #4285f4;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1c5fab;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export {
  LoginContainer,
  LoginForm,
  LoginHeading,
  InputLabel,
  InputField,
  SubmitButton,
};
