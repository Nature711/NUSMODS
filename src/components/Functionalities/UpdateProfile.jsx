import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import { Button } from "../../globalStyles";
import { useAuth } from "../context/AuthContext";
import {
  FormGroup,
  GroupTitle,
  GroupInput,
  MessageBlock,
} from "../../globalStyles";
import { db } from "../../firebase";
import { ProfileWrapper, TitleWrapper } from "./ViewProfile";

const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  padding: 0 20px 10px 20px;

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
      rgba(206, 250, 107, 1) 0%,
      rgba(93, 206, 242, 1) 100%
    );
  }
`;

export default function UpdateProfile(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const majorRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const { currentUser, updatePassword, updateEmail, updateDisplayName } =
    useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const userRef = db.collection("UserProfile").doc(currentUser.uid);
  const { gender, age, major } = props.moreUserInfo;

  const updateAdditionalInfo = (otherInfo) => {
    const { newUsername, newMajor, newAge, newGender } = otherInfo;
    if (newUsername) {
      userRef.update({ username: newUsername });
    }
    if (newMajor) {
      userRef.update({ major: newMajor });
    }
    if (newAge) {
      userRef.update({ age: newAge });
    }
    if (newGender) {
      userRef.update({ gender: newGender });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const promises = [];
    setLoading(true);
    setError("");

    if (
      emailRef.current.value &&
      emailRef.current.value !== currentUser.email
    ) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    if (usernameRef.current.value) {
      promises.push(updateDisplayName(usernameRef.current.value));
    }

    const otherInfo = {
      newUsername: usernameRef.current.value,
      newMajor: majorRef.current.value,
      newAge: ageRef.current.value,
      newGender: genderRef.current.value,
    };

    promises.push(updateAdditionalInfo(otherInfo));

    Promise.all(promises)
      .then(() => {
        alert("Updated successfully!");
      })
      .catch((e) => {
        setError(e.message);
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <ProfileWrapper>
      <TitleWrapper titleheight="10%">Update Profile</TitleWrapper>
      {error && <MessageBlock type="bad">{error}</MessageBlock>}
      <MainForm onSubmit={handleSubmit}>
        <FormGroup>
          <GroupTitle>Email</GroupTitle>
          <GroupInput
            type="email"
            ref={emailRef}
            placeholder={currentUser.email}
          />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Password</GroupTitle>
          <GroupInput type="password" ref={passwordRef} placeholder="******" />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Username</GroupTitle>
          <GroupInput ref={usernameRef} placeholder={currentUser.displayName} />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Gender</GroupTitle>
          <GroupInput ref={genderRef} placeholder={gender} />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Major</GroupTitle>
          <GroupInput ref={majorRef} placeholder={major} />
        </FormGroup>
        <FormGroup>
          <GroupTitle>Age</GroupTitle>
          <GroupInput ref={ageRef} placeholder={age} />
        </FormGroup>
        <Button
          buttoncolor="dodgerblue"
          buttonmargin="40px"
          buttonwidth="50%"
          type="submit"
          disabled={loading}
        >
          Update
        </Button>
      </MainForm>
    </ProfileWrapper>
  );
}
