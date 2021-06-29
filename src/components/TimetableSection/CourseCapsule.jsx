import React from "react";
import styled from "styled-components/macro";

const Capsule = styled.button`
  padding: 10px 10px;
  color: #fff;
  background: #e9967a;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
`;

function CourseCapsule() {
  return <Capsule>CS3243</Capsule>;
}

export default CourseCapsule;
