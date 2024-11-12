import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 20vw;
  padding: 10px;
  border-right: 1px solid #ddd;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    width: 100vw;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

export const MainEditor = styled.div`
  width: 80vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
