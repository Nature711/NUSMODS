import React from "react";
import styled from "styled-components/macro";
import { Input } from "../../globalStyles";

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const AddButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  outline: none;
  border-radius: 50%;
  transition: 0.3s linear 0.1s;
  text-align: center;
  font-size: large;
  color: white;
  background-color: hotpink;
  &:hover {
    transform: rotate(180deg);
  }
`;

const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  color: white;
  background-color: lightblue;
  margin: 10px;
  height: 40px;
  border-radius: 5px;
  width: 250px;
  text-align: center;
  &:hover {
    border: 3px solid #fff;
    transition: all 0.2s linear;
    color: #663399;
  }
`;

function UpcomingTasks() {
  return (
    <TaskWrapper>
      <AddTask>
        <Input inputwidth="200px" inputheight="25px" placeholder="add a task" />
        <AddButton>+</AddButton>
      </AddTask>
      <ListContainer>
        <ListItem>item1</ListItem>
        <ListItem>item2</ListItem>
        <ListItem>item3</ListItem>
      </ListContainer>
    </TaskWrapper>
  );
}

export default UpcomingTasks;
