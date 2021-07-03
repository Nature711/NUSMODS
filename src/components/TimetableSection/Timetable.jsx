import React, { useState } from "react";
import styled from "styled-components/macro";
import { daylineComponent, timelineComponent } from "./DaysAndTimes";
import Courses from "./Courses";
import { Button, SmallButton } from "../../globalStyles";
import "./timetable.css";
import CourseList from "./CourseList";

const TableWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 30px;
`;

const TimeTableWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 5% auto;
  grid-template-rows: 5% auto;
  background-color: #2196f3;
  padding: 10px;
  border-radius: 1em;
`;

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #2196f3;
`;

const Functionalities = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const AddCourse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CourseInput = styled.input`
  display: inline-block;
  width: 190px;
  margin: 15px;
  height: 30px;
  outline: 2px solid #6a5acd;
  font-size: 18px;
  border: 1px solid #fff;
`;

const Title = styled.h3`
  margin-top: 25px;
  margin-bottom: 10px;
  color: #663399;
  font-family: Cambria;
`;

const ButtonWrapper = styled.div`
  width: 200px;
  height: 20px;
  margin-top: 20px;
  background-color: lightblue;
  border: 1px solid transparent;
  border-radius: 0.3em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function Timetable() {
  const [adding, setAdding] = useState(false); //whether the add course button is clicked
  const [courseList, setCourseList] = useState([]);
  const defaultInput = { mod: "", key: "" };
  const [currentCourse, setCurrentCourse] = useState(defaultInput);

  const [color, setColor] = useState();

  const addCourse = (e) => {
    e.preventDefault();
    if (currentCourse.mod !== "") {
      const newCourses = [...courseList, currentCourse];
      setCourseList(newCourses);
      setCurrentCourse(defaultInput);
    }
  };

  const handleInput = (e) => {
    setCurrentCourse({ mod: e.target.value, key: Date.now() });
  };

  const handleAdd = (e) => {
    setAdding(!adding);
    addCourse(e);
  };

  const handleDelete = (key) => {
    const filteredCourseList = courseList.filter((item) => item.key !== key);
    setCourseList(filteredCourseList);
  };

  return (
    <TableWrapper>
      <TimeTableWrapper>
        <Component></Component>
        <Component>{timelineComponent}</Component>
        <Component>{daylineComponent}</Component>
        <Component>
          <Courses canAdd={adding} color={color} />
        </Component>
      </TimeTableWrapper>
      <Functionalities>
        <AddCourse>
          <Button type="submit" buttonwidth="200px" onClick={handleAdd}>
            {adding ? "Confirm" : "Add course"}
          </Button>
          {adding ? (
            <>
              <ButtonWrapper>
                <SmallButton color="red" onClick={() => setColor("red")} />
                <SmallButton
                  color="orange"
                  onClick={() => setColor("orange")}
                />
                <SmallButton
                  color="yellow"
                  onClick={() => setColor("yellow")}
                />
                <SmallButton color="green" onClick={() => setColor("green")} />
                <SmallButton color="blue" onClick={() => setColor("blue")} />
                <SmallButton
                  color="indigo"
                  onClick={() => setColor("indigo")}
                />
                <SmallButton
                  color="violet"
                  onClick={() => setColor("violet")}
                />
              </ButtonWrapper>
              <div className="tooltip">
                <CourseInput value={currentCourse.mod} onChange={handleInput} />
                <ol className="tooltiptext">
                  <li>Enter the module code</li>
                  <li>Select the timeslot</li>
                  <li>Customize the timeslot display using color palette</li>
                </ol>
              </div>
            </>
          ) : (
            <>
              <Title>My Courses</Title>
              <CourseList items={courseList} onDelete={handleDelete} />
            </>
          )}
        </AddCourse>
      </Functionalities>
    </TableWrapper>
  );
}

export default Timetable;
