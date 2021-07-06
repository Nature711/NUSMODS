import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
 body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 } 
 button {
   :focus{
     outline: none;
   }
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

export const RoundButton = styled.button`
  width: ${({ width }) => (width ? width : "25px")};
  height: ${({ height }) => (height ? height : "25px")};
  border: none;
  outline: none;
  border-radius: 50%;
  transition: 0.3s linear 0.1s;
  text-align: center;
  font-size: large;
  color: white;
  background-color: ${({ color }) => (color ? color : "hotpink")};
  &:hover {
    ${({ rotate }) =>
      rotate === "false" ? null : "transform: rotate(180deg)"};
  }
`;

export const Button = styled.button`
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "10px")};
  width: ${({ buttonwidth }) => (buttonwidth ? buttonwidth : "100px")};
  padding: 10px 10px;
  color: #fff;
  background: #e9967a;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #a52a2a;
  }
`;

export const SmallButton = styled.button`
  width: ${({ buttonwidth }) => (buttonwidth ? buttonwidth : "10px")};
  height: ${({ buttonheight }) => (buttonheight ? buttonheight : "10px")};
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "red")};
  &:hover {
    width: ${({ buttonwidth }) => (buttonwidth ? buttonwidth + 5 : "15px")};
    height: ${({ buttonheight }) => (buttonheight ? buttonheight + 5 : "15px")};
  }
  &:focus {
    outline: 2px solid black;
  }
`;

export const Input = styled.input`
  width: ${({ inputwidth }) => (inputwidth ? inputwidth : "250px")};
  margin: ${({ inputmargin }) => (inputmargin ? inputmargin : "10px")};
  height: ${({ inputheight }) => (inputheight ? inputheight : "35px")};
  outline: none;
  font-size: 18px;
  border: 1px solid #fff;
  &::-webkit-input-placeholder {
    opacity: 0.4;
  }
`;

export default GlobalStyle;
