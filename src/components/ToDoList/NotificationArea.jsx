import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Input, RoundButton } from "../../globalStyles";
import List from "./List";
import { useAuth } from "../context/AuthContext";
import { db } from "../../firebase";

const Menu = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 4%;
  margin: 20px;
  border: 1.5px solid #483d8b;
  border-radius: 10px;
  padding: 1px 0 1px 0;
`;

const Title = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Cambria;
  font-size: ${({ focus }) => (focus ? "25px" : "13px")};
  color: ${({ focus }) => (focus ? "white" : "black")};
  background-color: ${({ focus }) => (focus ? "darkturquoise" : "gainsboro")};
  border: 1px solid transparent;
  border-radius: 10px;
  margin: 1px;
  &:hover {
    border: 2px solid green;
  }
`;

const AddTask = styled.form`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
  width: 80%;
  height: 80%;
  border: 1px dotted gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: radial-gradient(
      circle,
      rgba(237, 224, 230, 1) 0%,
      rgba(167, 202, 244, 1) 100%
    );
  }
`;

function NotificationArea() {
  const [viewTask, setViewTask] = useState(true);
  const defaultTask = { text: "", key: "" };
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState(defaultTask);
  const defaultLink = { name: "", url: "", key: "" };
  const [linkList, setLinkList] = useState([]);
  const [currentLink, setCurrentLink] = useState(defaultLink);
  const [enterName, setEnterName] = useState(false);
  const { currentUser } = useAuth();
  const listDataRef = db.collection("UserListData").doc(currentUser.uid);

  const getListData = () => {
    listDataRef.get().then((doc) => {
      const data = doc.data();
      if (data) {
        //get data from cloud database
        setTaskList(data.taskListData ? data.taskListData : []);
        setLinkList(data.linkListData ? data.linkListData : []);
      }
    });
  };

  useEffect(() => getListData(), []);

  const addItem = (e) => {
    e.preventDefault();
    if (viewTask) {
      //adding task to tasklist
      if (currentTask.text !== "") {
        const newTaskList = [...taskList, currentTask];
        setTaskList(newTaskList);
        setCurrentTask(defaultTask);
        listDataRef.update({ taskListData: newTaskList }); //storing to cloud database
      }
    } else if (!viewTask && !enterName) {
      //confirming link url and ready to enter link name
      if (currentLink.url !== "") {
        setEnterName(true);
      }
    } else if (enterName) {
      //adding link (with both name and url entered) to linklist
      if (currentLink.name !== "") {
        const newLinkList = [...linkList, currentLink];
        setLinkList(newLinkList);
        setCurrentLink(defaultLink);
        setEnterName(false);
        listDataRef.update({ linkListData: newLinkList }); //storing to cloud database
      }
    }
  };

  const handleInput = (e) => {
    if (viewTask) {
      //entering task
      setCurrentTask({ text: e.target.value, key: Date.now() });
    } else if (!viewTask && !enterName) {
      //entering link url
      setCurrentLink({ url: e.target.value, key: Date.now(), name: "" });
    } else if (enterName) {
      //entering link name
      setCurrentLink({ ...currentLink, name: e.target.value });
    }
  };

  const handleDelete = (key) => {
    if (viewTask) {
      const filteredTask = taskList.filter((item) => item.key !== key);
      setTaskList(filteredTask);
      listDataRef.update({ taskListData: filteredTask }); //updating cloud database
    } else {
      const filteredLink = linkList.filter((item) => item.key !== key);
      setLinkList(filteredLink);
      listDataRef.update({ linkListData: filteredLink }); //updating cloud database
    }
  };

  const InputValue = viewTask
    ? currentTask.text
    : enterName
    ? currentLink.name
    : currentLink.url;

  const InputPlaceholder = viewTask
    ? "add a task"
    : enterName
    ? "enter webpage name"
    : "add a link";

  return (
    <>
      <Menu>
        <Title onClick={() => setViewTask(true)} focus={viewTask}>
          Upcoming Tasks
        </Title>
        <Title onClick={() => setViewTask(false)} focus={!viewTask}>
          Archived Links
        </Title>
      </Menu>
      <AddTask onSubmit={addItem}>
        <Input
          placeholder={InputPlaceholder}
          value={InputValue}
          onChange={handleInput}
        />
        <RoundButton type="submit" rotate={enterName ? "false" : "true"}>
          {enterName ? "✔" : "+"}
        </RoundButton>
      </AddTask>
      <ItemWrapper>
        <List
          list={viewTask ? taskList : linkList}
          onDelete={handleDelete}
          isTaskList={viewTask}
        />
      </ItemWrapper>
    </>
  );
}

export default NotificationArea;
