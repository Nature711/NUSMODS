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
  font-size: large;
  border: none;
`;

const Color = styled.div`
  margin-left: 10px;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mod = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CourseList(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <Wrapper key={item.key}>
        <CourseWrapper>
          <ListItem>
            <Color>
              <RoundButton color={item.color} width="20px" height="20px" />
            </Color>
            <Mod>{item.mod}</Mod>
          </ListItem>
          <RoundButton
            color="thistle"
            onClick={() => props.onDelete(item.key)}
            rotate="false"
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
