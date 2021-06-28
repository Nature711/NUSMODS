import React from "react";
import styled from "styled-components/macro";
import UpcomingTasks from "./ToDoList/UpcomingTasks";
import Timetable from "./TimetableSection/Timetable";
import DailyInspiration from "./SentenceForTheDay/DailyInspiration";

const HomeWrapper = styled.div`
  height: 807px;

  display: flex;
`;

const Notification = styled.div`
  background-color: #b0e0e6;
  height: 100%;
  width: 20%;
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
  background-color: #fff0f5;
`;

const TableWrapper = styled.div`
  height: 85%;
  width: 100%;
  background-color: #fffff0;
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
