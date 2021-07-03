import React, { useState } from "react";
import styled from "styled-components/macro";
import { Input, RoundButton } from "../../globalStyles";
import ListItems from "./ListItems";

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #663399;
  font-family: Cambria;
`;

const AddTask = styled.form`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

function UpcomingTasks() {
  const [items, setItems] = useState([]);
  const defaultInput = { text: "", key: "" };
  const [currentItem, setCurrentItem] = useState(defaultInput);

  const addItem = (e) => {
    e.preventDefault();
    if (currentItem.text !== "") {
      const newItems = [...items, currentItem];
      setItems(newItems);
      setCurrentItem(defaultInput);
    }
  };

  const handleInput = (e) => {
    setCurrentItem({ text: e.target.value, key: Date.now() });
  };

  const handleDelete = (key) => {
    const filteredItems = items.filter((item) => item.key !== key);
    setItems(filteredItems);
  };

  return (
    <TaskWrapper>
      <Title>Upcoming Tasks</Title>
      <AddTask onSubmit={addItem}>
        <Input
          placeholder="add a task"
          value={currentItem.text}
          onChange={handleInput}
        />
        <RoundButton type="submit">+</RoundButton>
      </AddTask>
      <ListItems items={items} onDelete={handleDelete} />
    </TaskWrapper>
  );
}

export default UpcomingTasks;
