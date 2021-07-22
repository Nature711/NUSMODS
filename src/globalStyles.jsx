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

export const PageWrapper = styled.div`
  height: ${({ pageheight }) => (pageheight ? pageheight : "807px")};
  display: flex;
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
      rotate === "false" ? null : "transform: rotate(360deg)"};
  }
`;

export const Button = styled.button`
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "10px")};
  width: ${({ buttonwidth }) => (buttonwidth ? buttonwidth : "100px")};
  padding: ${({ buttonpadding }) => (buttonpadding ? buttonpadding : "10px")};
  background: ${({ buttoncolor }) => (buttoncolor ? buttoncolor : "#e9967a")};
  color: #fff;
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
  border: ${({ noBorder }) => (noBorder ? "none" : "1px solid #fff")};
  &::-webkit-input-placeholder {
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  height: ${({ height }) => (height ? height : "100%")};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 25px;
  background-color: ${({ noBackgroundColor }) =>
    noBackgroundColor ? "none" : "lightblue"};
`;

export const Logo = styled.img`
  width: 65%;
  height: 65%;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  padding-left: 25px;
  background-color: lightblue;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  border-radius: 1em;
  width: 60%;
  height: 75%;
  background-color: #fffff0;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  padding-top: 40px;
  font-family: Cambria;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const GroupTitle = styled.h3`
  font-family: Cambria;
  color: gray;
  margin-bottom: 10px;
`;

export const GroupInput = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  font-size: 18px;
  border: 1px solid gray;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    opacity: 0.4;
  }
`;

export const MessageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 30px;
  background-color: ${({ type }) =>
    type === "bad" ? "lightpink" : "lightgreen"};
  color: ${({ type }) => (type === "bad" ? "darkred" : "white")};
  border: 1px solid gray;
  border-radius: 5px;
`;

export const Extra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 10px;
`;

export default GlobalStyle;
