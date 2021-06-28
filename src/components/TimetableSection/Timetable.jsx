import React from "react";
import styled from "styled-components/macro";

const TableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TimeTableWrapper = styled.div`
  width: 98%;
  height: 98%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2px;
  background-color: #2196f3;
`;

const Cell = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`;

function Timetable() {
  return (
    <TableWrapper>
      <TimeTableWrapper>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
      </TimeTableWrapper>
    </TableWrapper>
  );
}

export default Timetable;
