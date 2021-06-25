import React from "react";
import styled from "styled-components/macro";
import { LightButton } from "../globalStyles";

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
  margin-left: 100px;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`;

const SubInput = styled.input`
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 18px;
  border: 1px solid #fff;
  height: 35px;
  margin-right: 20px;
  &::-webkit-input-placeholder {
    opacity: 0.4;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <MainInfo>
        <p>Designed By Nature</p>
        <p>All rights reversed</p>
      </MainInfo>
      <ContactInfo>
        <SubInput placeholder="enter your email address" />
        <LightButton>{"Subscribe Now"}</LightButton>
      </ContactInfo>
    </FooterWrapper>
  );
}

export default Footer;