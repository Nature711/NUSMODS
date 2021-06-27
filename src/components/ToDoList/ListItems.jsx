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

const ListItem = styled.input`
  color: white;
  background-color: lightblue;
  margin: 10px;
  width: 250px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: large;
  border: none;
  &:hover {
    border: 3px solid #fff;
    transition: all 0.2s linear;
    color: blue;
  }
`;

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <ItemWrapper key={item.key}>
        <ListItem type="text" id={item.key} value={item.text} />
        <RoundButton
          onClick={() => {
            props.deleteItem(item.key);
          }}
        >
          -
        </RoundButton>
      </ItemWrapper>
    );
  });

  return <ListContainer>{listItems}</ListContainer>;
}

export default ListItems;
