import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: #0B2447; */
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #A5D7E8;
  padding: 15px;
  width: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const LoginHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 15px;
  padding-bottom: 9px;
`;

const InputField = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
  width: 90%;
`;

const SubmitButton = styled.button`
  background-color: #4285f4;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 10px;
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
