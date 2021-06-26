import React from "react";
import styled from "styled-components/macro";
import UpcomingTasks from "./ToDoList/UpcomingTasks";
import Timetable from "./Timetable";
import DailyInspiration from "./DailyInspiration";

const HomeWrapper = styled.div`
  height: 807px;
  background-color: lightblue;
  display: flex;
`;

const Notification = styled.div`
  height: 100%;
  width: 20%;
  background-color: lightgreen;
`;

const MainContent = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const SentenceWrapper = styled.div`
  height: 15%;
  width: 100%;
  background-color: lightpink;
`;

const TableWrapper = styled.div`
  height: 85%;
  width: 100%;
  background-color: yellow;
`;

function Home() {
  return (
    <HomeWrapper>
      <Notification>
        <UpcomingTasks />
      </Notification>
      <MainContent>
        <SentenceWrapper>
          <DailyInspiration />
        </SentenceWrapper>
        <TableWrapper>
          <Timetable />
        </TableWrapper>
      </MainContent>
    </HomeWrapper>
  );
}

export default Home;
