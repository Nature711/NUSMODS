import React from "react";
import styled from "styled-components/macro";
import { SmallButton } from "../../globalStyles";

const ButtonWrapper = styled.div`
  width: 200px;
  height: 20px;
  margin-top: 20px;
  background-color: lightblue;
  border: 1px solid transparent;
  border-radius: 0.3em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function ColorPalette(props) {
  return (
    <ButtonWrapper>
      <SmallButton color="red" onClick={() => props.onClick("red")} />
      <SmallButton color="orange" onClick={() => props.onClick("orange")} />
      <SmallButton color="yellow" onClick={() => props.onClick("yellow")} />
      <SmallButton color="green" onClick={() => props.onClick("green")} />
      <SmallButton color="blue" onClick={() => props.onClick("blue")} />
      <SmallButton color="indigo" onClick={() => props.onClick("indigo")} />
      <SmallButton color="violet" onClick={() => props.onClick("violet")} />
    </ButtonWrapper>
  );
}

export default ColorPalette;
