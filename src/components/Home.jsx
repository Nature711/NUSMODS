import React from "react";
import styled from "styled-components/macro";
import NotificationArea from "./ToDoList/NotificationArea";
import Timetable from "./TimetableSection/Timetable";
import DailyInspiration from "./SentenceForTheDay/DailyInspiration";
import { PageWrapper } from "../globalStyles";

const Notification = styled.div`
  background-color: #c5e5e9;
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TableWrapper = styled.div`
  height: 85%;
  width: 100%;
  background-color: #fffff0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <PageWrapper>
      <Notification>
        <NotificationArea />
      </Notification>
      <MainContent>
        <SentenceWrapper>
          <DailyInspiration />
        </SentenceWrapper>
        <TableWrapper>
          <Timetable />
        </TableWrapper>
      </MainContent>
    </PageWrapper>
  );
}

export default Home;
