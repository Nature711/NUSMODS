import React from "react";
import styled from "styled-components/macro";
import { RoundButton } from "../../globalStyles";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CourseWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4682b4;
  background-color: #cce5ff;
  margin: 10px;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: large;
  border: none;
`;

function CourseList(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <Wrapper>
        <CourseWrapper>
          <ListItem key={item.key}>
            <p>{item.mod}</p>
          </ListItem>
          <RoundButton
            color="thistle"
            onClick={() => {
              props.onDelete(item.key);
            }}
          >
            -
          </RoundButton>
        </CourseWrapper>
      </Wrapper>
    );
  });

  return <div>{listItems}</div>;
}

export default CourseList;
