import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const NoteItemContainer = styled.div`
  padding: 10px;
  margin: 5px;
  background-color: ${({ isOpen }) => (isOpen ? "#ffffff" : "#f5f5f5")};
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
    border: 1px solid ${({ isOpen }) => (isOpen ? "black" : "transparent")};

  &:hover {
    background-color: ${({ isOpen }) => (isOpen ? "#FFF" : "#f5f5f5")};

    border: 1px solid black;
  }
  }
`;

export const DeleteIcon = styled(FaTrashAlt)`
  color: red;
  cursor: pointer;

  &:hover {
    color: darkred;
  }
`;

export const NoteItemTitleContainer = styled.span``;
