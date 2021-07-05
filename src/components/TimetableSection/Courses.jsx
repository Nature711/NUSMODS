import React from "react";
import styled from "styled-components/macro";
import CourseButton from "./CourseButton";

const CourseWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-gap: 2px;
  background-color: rgba(255, 255, 255, 0.8);
`;

function Courses(props) {
  const coursesTable = props.allCourses.map((course) => (
    <CourseButton
      key={course.key}
      onClick={() => props.onClick(course.key)}
      disabled={!props.canSelect}
      color={course.color}
      state={course.state}
      hoverColor={props.hoverColor}
    ></CourseButton>
  ));

  return <CourseWrapper>{coursesTable}</CourseWrapper>;
}

export default Courses;
