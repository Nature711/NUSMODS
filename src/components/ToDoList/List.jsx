import React from "react";
import styled from "styled-components/macro";
import { RoundButton } from "../../globalStyles";

const ListContainer = styled.div`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ffa07a;
  margin: 10px;
  width: 230px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: large;
  border: none;
  &:hover {
    transition: all 0.1s linear;
    border: 2px solid #fff;
    color: #800000;
    font-weight: 900;
  }
  &:focus {
    outline: none;
  }
`;

function List(props) {
  const listItems = props.list.map((item) => {
    return (
      <ItemWrapper key={item.key}>
        {props.isTaskList ? (
          <ListItem>
            <p>{item.text}</p>
          </ListItem>
        ) : (
          <ListItem onClick={() => window.open(item.url, "_blank")}>
            <p>{item.name}</p>
          </ListItem>
        )}
        <RoundButton
          onClick={() => props.onDelete(item.key)}
          rotate="false"
          color="skyblue"
        >
          -
        </RoundButton>
      </ItemWrapper>
    );
  });

  return <ListContainer>{listItems}</ListContainer>;
}

export default List;
