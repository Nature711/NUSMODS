import React from "react";
import styled from "styled-components/macro";

const FooterWrapper = styled.footer`
  background: linear-gradient(
    90deg,
    rgba(81, 199, 208, 1) 0%,
    rgba(217, 188, 40, 1) 35%,
    rgba(44, 165, 237, 1) 100%
  );

  height: 80px;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  z-index: 999;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 100px 0 100px;
  color: white;
  font-family: Cambria;
`;

const Item = styled.p`
  margin: 0;
  font-weight: ${({ title }) => (title ? 900 : 100)};
  color: ${({ title }) => (title ? "blue" : "white")};
  font-family: ${({ title }) => (title ? "Arial" : "Cambria")};
`;

function Footer() {
  return (
    <FooterWrapper>
      <MainInfo>
        <p>Designed By Nature</p>
        <p>All rights reversed</p>
      </MainInfo>
      <MainInfo>
        <Item title="true">Contact Me</Item>
        <Item>Email: hutianran_tz@163.com</Item>
        <Item>Telegram: @Nature711</Item>
      </MainInfo>
    </FooterWrapper>
  );
}

export default Footer;
