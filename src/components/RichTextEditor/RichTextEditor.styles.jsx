import styled, { css } from "styled-components";
import ContentEditable from "react-contenteditable";

export const RichTextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RichTextEditorToolbar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #f4f4f4;
  gap: 12px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px;
  }
`;

export const RichTextEditorButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #f0f0f0;
    border: 1px solid black;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #d3d3d3;
    `}

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const RichTextEditorSelect = styled.select`
  padding: 5px;

  @media (max-width: 768px) {
    padding: 4px;
  }
`;

export const RichTextEditorTextArea = styled.textarea`
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: 1.5;
  overflow-y: auto;
  height: 80%;
  text-align: ${(props) => props.textAlign || "left"};

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}

  @media (max-width: 768px) {
    font-size: ${(props) => props.fontSize || "14px"};
    padding: 15px;
  }
`;

export const EditableParagraph = styled(ContentEditable)`
  font-size: ${(props) => props.fontSize || "16px"};
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
  font-style: ${(props) => (props.isItalic ? "italic" : "normal")};
  text-decoration: ${(props) => (props.isUnderline ? "underline" : "none")};
  height: 100vh;
  margin: 0;
  outline: none;

  @media (max-width: 768px) {
    font-size: ${(props) => props.fontSize || "14px"};
    height: 100vh;
  }
`;
