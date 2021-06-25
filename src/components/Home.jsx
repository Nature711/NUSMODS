import React from "react";
import styled from "styled-components/macro";

const BodyWrapper = styled.div`
  height: 700px;
  background-color: lightblue;
`;

function Home() {
  return <BodyWrapper>Main Content</BodyWrapper>;
}

export default Home;
