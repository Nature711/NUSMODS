import React from "react";
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

const Cell = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const courses = Array.from(Array(126), (_, i) => i + 1);

const coursesTable = courses.map((course) => <Cell>{course}</Cell>);

function Courses() {
  return <CourseWrapper>{coursesTable}</CourseWrapper>;
}

export default Courses;
