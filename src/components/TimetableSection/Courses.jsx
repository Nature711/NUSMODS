import React, { useState } from "react";
import styled from "styled-components/macro";

const CourseWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-gap: 2px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const UnselectedCell = styled.button`
  font-size: 20px;
  font-family: Cambria;
  font-weight: 900;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:hover {
    border: 1px solid #4169e1;
    border-radius: 0.3em;
  }
`;

function Courses(props) {
  const buttonArray = [];

  for (let i = 0; i < 126; i++) {
    buttonArray.push({ key: i, state: false, color: null });
  }

  const [buttons, setButtons] = useState(buttonArray);

  const handleClick = (key) => {
    buttons[key].state = !buttons[key].state;
    buttons[key].color = props.color ? props.color : "red";
    setButtons(buttons);
  };

  const SelectedCell = styled.button`
    font-size: 20px;
    font-family: Cambria;
    font-weight: 900;
    background-color: ${({ color }) => (color ? color : "red")};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  `;

  const coursesTable = buttons.map((course) =>
    course.state ? (
      <SelectedCell
        key={course.key}
        onClick={() => handleClick(course.key)}
        disabled={!props.canAdd}
        color={course.color}
      >
        {course.key}
      </SelectedCell>
    ) : (
      <UnselectedCell
        key={course.key}
        onClick={() => handleClick(course.key)}
        disabled={!props.canAdd}
      >
        {course.key}
      </UnselectedCell>
    )
  );

  return <CourseWrapper>{coursesTable}</CourseWrapper>;
}

export default Courses;
