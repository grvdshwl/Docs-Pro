import styled from "styled-components";

export const ModalContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;

export const ModalHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.cancel ? "#f44336" : "#007bff")};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
