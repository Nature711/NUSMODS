import React, { useState } from "react";
import styled from "styled-components/macro";
import { daylineComponent, timelineComponent } from "./DaysAndTimes";
import Courses from "./Courses";
import { Button, RoundButton } from "../../globalStyles";
import CourseList from "./CourseList";
import ColorPalette from "./ColorPalette";

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

const CourseInputAndButton = styled.div`
  display: inline-flex;
  justify-content: center;
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
  &::-webkit-input-placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
`;

const PaletteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
`;

const Title = styled.h3`
  margin-top: 25px;
  margin-bottom: 10px;
  color: #663399;
  font-family: Cambria;
`;

const Tip = styled.div`
  text-align: center;
  font-size: small;
  color: brown;
  width: 210px;
`;

function Timetable() {
  const [adding, setAdding] = useState(false); //whether the add course button is clicked
  const [courseList, setCourseList] = useState([]);
  const defaultInput = { mod: "", key: "", color: "" };
  const [currentCourse, setCurrentCourse] = useState(defaultInput);
  const [color, setColor] = useState();
  const [courseEntered, setCourseEntered] = useState(false); //whether the course is entered when the user is adding course
  const [refresh, setRefresh] = useState(false); //to cause re-render on course button click
  const [timeConfirmed, setTimeConfirmed] = useState(false);

  const defaultState = Array(126).fill(0);
  const [buttonState, setButtonState] = useState(defaultState);

  const buttonArray = [];
  for (let i = 0; i < 126; i++) {
    buttonArray.push({ key: i, state: false, color: "" });
  }
  const [buttons, setButtons] = useState(buttonArray);

  //functions controlling the course buttons in timetable
  const handleClick = (key) => {
    buttons[key].state = !buttons[key].state;
    buttons[key].color = buttons[key].state ? color : "";
    setButtons(buttons);
    buttonState[key] === 0 ? (buttonState[key] = 1) : (buttonState[key] = 0);
    setButtonState(buttonState);
    setRefresh(!refresh);
  };

  //functions controlling the course list in functionality section
  const addCourse = (e) => {
    e.preventDefault();
    if (currentCourse.mod !== "") {
      currentCourse.color = color;
      const newCourses = [...courseList, currentCourse];
      setCourseList(newCourses);
      setCurrentCourse(defaultInput);
    }
  };

  const handleInput = (e) =>
    setCurrentCourse({ mod: e.target.value, key: Date.now(), color: "" });

  const handleAdd = (e) => {
    addCourse(e);
    //cleanups
    setAdding(!adding);
    setColor("");
    setCourseEntered(false);
    setTimeConfirmed(false);
    setButtonState(defaultState);
  };

  const handleDelete = (key) => {
    const filteredCourseList = courseList.filter((item) => item.key !== key);
    setCourseList(filteredCourseList);
  };

  const handleSetCourse = () => setCourseEntered(true);

  const handleSetColor = (color) => {
    setColor(color);
  };

  const handleConfirm = () => {
    setTimeConfirmed(true);
  };

  const canConfirmEnterCourse = currentCourse.mod !== "";

  const colorSelected = color !== "";

  const canSelectTime =
    adding && courseEntered && colorSelected && !timeConfirmed;

  const canConfirm = buttonState.reduce((a, b) => a + b, 0) !== 0; //hasNetChange

  const showAddCourseButton = !adding || (adding && timeConfirmed);

  return (
    <TableWrapper>
      <TimeTableWrapper>
        <Component></Component>
        <Component>{timelineComponent}</Component>
        <Component>{daylineComponent}</Component>
        <Component>
          <Courses
            canSelect={canSelectTime}
            allCourses={buttons}
            onClick={handleClick}
            hoverColor={color}
          />
        </Component>
      </TimeTableWrapper>
      <Functionalities>
        <AddCourse>
          {showAddCourseButton ? (
            <Button type="submit" buttonwidth="200px" onClick={handleAdd}>
              {adding ? "View courses" : "Add a course"}
            </Button>
          ) : null}
          {adding ? (
            <>
              {courseEntered ? (
                timeConfirmed ? null : colorSelected ? (
                  <Button onClick={handleConfirm} disabled={!canConfirm}>
                    Confirm
                  </Button>
                ) : (
                  <PaletteWrapper>
                    <ColorPalette onClick={handleSetColor} />
                    <Tip>
                      choose a color for timeslot display and then select the
                      timeslot in the table
                    </Tip>
                  </PaletteWrapper>
                )
              ) : (
                <CourseInputAndButton>
                  <CourseInput
                    placeholder="Enter module code, e.g. GER1000"
                    value={currentCourse.mod}
                    onChange={handleInput}
                  />
                  <RoundButton
                    onClick={handleSetCourse}
                    color="lightblue"
                    disabled={!canConfirmEnterCourse}
                  >
                    ✔
                  </RoundButton>
                </CourseInputAndButton>
              )}
            </>
          ) : (
            <>
              {courseList == "" ? null : <Title>My Courses</Title>}
              <CourseList items={courseList} onDelete={handleDelete} />
            </>
          )}
        </AddCourse>
      </Functionalities>
    </TableWrapper>
  );
}

export default Timetable;
