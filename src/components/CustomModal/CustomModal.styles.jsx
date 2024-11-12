import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  padding: 20px;
  position: relative;
  @media (max-width: 768px) {
    width: 80%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 80%;
    padding: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
