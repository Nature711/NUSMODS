import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 } 
`;

export const Container = styled.div`
  font-family: "Georgia";
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`;

export const DynamicButton = styled.button`
  border-radius: 4px;
  background: ${({ PinkBg }) => (PinkBg ? "#ff69b4" : "	#20b2aa")};
  color: #fff;
  padding: 12px 50px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: text-shadow 0.5s;
  transition: font-size 0.5s;
  &:hover {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
    font-size: 22px;
  }
`;

export const LightButton = styled.button`
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

export default GlobalStyle;
