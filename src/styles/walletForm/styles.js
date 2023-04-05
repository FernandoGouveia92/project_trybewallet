import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;;
    align-items: center;
    height: auto;
    width: 100%;
    background-color: #FFFFFF;

    box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
    padding-top: 16px;
    
`;

const FormWallet = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 95%;
`;

const WalletLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  font-weight: bold;
  color: Black;
  
`;

const SelectContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  font-weight: bold;
  color: black;
`;

const Input = styled.input`
  width: 80%;
  height: 20px;
  margin-top: 8px;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #DFE2EB;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`;

const Select = styled.select`
  width: auto;
  height: 24px;
  margin-top: 8px;  
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #DFE2EB;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #fff;
  padding: 10px 20px;
  border: 1px solid #DFE2EB;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-color: black;

  &:hover {
    background-color: #1c5fab;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export {
  FormContainer, FormWallet, WalletLabel, SelectContainer, Input, Select, Button,
};
