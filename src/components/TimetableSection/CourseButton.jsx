import React from "react";
import styled from "styled-components/macro";

function CourseButton(props) {
  const Cell = styled.button`
    font-size: 20px;
    font-family: Cambria;
    font-weight: 900;
    background-color: ${({ selected, color }) =>
      selected ? (color ? color : "red") : "rgba(255, 255, 255, 0.8)"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    &:focus {
      box-shadow: ${({ disabled, selected }) =>
        disabled
          ? "none"
          : selected
          ? "1px 2px 10px 1px red"
          : "1px 2px 10px 1px green"};
    }
    &:hover {
      border: ${({ disabled }) =>
        disabled ? "none" : "2px solid transparent"};
      border-color: ${({ color, hoverColor }) => (color ? color : hoverColor)};
    }
  `;

  return (
    <Cell
      onClick={props.onClick}
      disabled={props.disabled}
      color={props.color}
      selected={props.state}
      hoverColor={props.hoverColor}
    />
  );
}

export default CourseButton;
