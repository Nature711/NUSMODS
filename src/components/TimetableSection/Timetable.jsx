import React from "react";
import styled from "styled-components/macro";
import { daylineComponent, timelineComponent } from "./DaysAndTimes";
import Courses from "./Courses";
import { Button } from "../../globalStyles";

const TableWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 30px;
`;

const TimeTableWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 3% 97%;
  grid-template-rows: 5% 95%;
  grid-gap: 2px;
  background-color: #2196f3;
  padding: 10px;
  border-radius: 1em;
`;

const Functionalities = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

function Timetable() {
  return (
    <TableWrapper>
      <TimeTableWrapper>
        <div></div>
        {timelineComponent}
        {daylineComponent}
        <Courses />
      </TimeTableWrapper>
      <Functionalities>
        <Button buttonwidth="200px">Add course</Button>
        <Button buttonwidth="200px">Delete course</Button>
      </Functionalities>
    </TableWrapper>
  );
}

export default Timetable;
