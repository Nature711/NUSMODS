import React from "react";
import styled from "styled-components/macro";
import { useAuth } from "../context/AuthContext";

export const ProfileWrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color: #fffff0;
  border: 1px solid gray;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.h1`
  text-align: center;
  font-weight: 900;
  padding-top: 40px;
  font-family: Cambria;
  height: ${({ titleheight }) => (titleheight ? titleheight : "15%")};
`;

const ProfileInfo = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
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

const InfoRow = styled.div`
  background-color: ${({ dark }) => (dark ? "lightgray" : "none")};
  padding: 15px;
  margin-left: 3px;
  margin-right: 3px;
  font-size: large;
`;

const Item = styled.div`
  display: inline-block;
  color: #3d3de2;
  font-weight: 800;
  font-family: Cambria;
  margin-right: 5px;
`;

export default function ViewProfile(props) {
  const { currentUser } = useAuth();
  const { gender, age, major } = props.moreUserInfo;

  return (
    <ProfileWrapper>
      <TitleWrapper>My Profile</TitleWrapper>
      <ProfileInfo>
        <InfoRow dark="true">
          <Item>Email:</Item> {currentUser.email}
        </InfoRow>
        <InfoRow>
          <Item>Username:</Item> {currentUser.displayName}
        </InfoRow>
        <InfoRow dark="true">
          <Item>Gender:</Item> {gender}
        </InfoRow>
        <InfoRow>
          <Item>Age:</Item> {age}
        </InfoRow>
        <InfoRow dark="true">
          <Item>Major:</Item> {major}
        </InfoRow>
      </ProfileInfo>
    </ProfileWrapper>
  );
}
