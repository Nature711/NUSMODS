import React from "react";
import styled from "styled-components/macro";

const TimeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
  grid-gap: 2px;
  background-color: #2196f3;
`;

const DayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-gap: 2px;
  background-color: #2196f3;
`;

const Cell = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  font-weight: 900;
  font-family: Cambria;
  color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const times = [
  "0700",
  "0800",
  "0900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
  "1800",
  "1900",
  "2000",
  "2100",
  "2200",
  "2300",
  "0000",
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const timeline = times.map((time) => <Cell>{time}</Cell>);

export const timelineComponent = <TimeWrapper>{timeline}</TimeWrapper>;

const dayline = days.map((day) => <Cell>{day}</Cell>);

export const daylineComponent = <DayWrapper>{dayline}</DayWrapper>;
