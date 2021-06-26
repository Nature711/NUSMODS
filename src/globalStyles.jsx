import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 } 
`;

export const LightButton = styled.button`
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "10px")};
  padding: 10px 20px;
  color: #fff;
  background: transparent;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #00bfff;
  }
`;

export const Input = styled.input`
  width: ${({ inputwidth }) => (inputwidth ? inputwidth : "250px")};
  margin: ${({ inputmargin }) => (inputmargin ? inputmargin : "10px")};
  height: ${({ inputheight }) => (inputheight ? inputheight : "35px")};
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 18px;
  border: 1px solid #fff;
  &::-webkit-input-placeholder {
    opacity: 0.4;
  }
`;

export default GlobalStyle;
