import React from "react";
import logo from "../images/notepad.png";
import { LightButton } from "../globalStyles";
import styled from "styled-components/macro";

const NavContainer = styled.nav`
  background: linear-gradient(
    90deg,
    rgba(88, 81, 208, 1) 0%,
    rgba(217, 40, 186, 1) 35%,
    rgba(44, 205, 237, 1) 100%
  );
  height: 80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavIcon = styled.img`
  padding-left: 10px;
  width: 55px;
  height: 55px;
`;

const Title = styled.p`
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 1000;
  font-family: "papyrus";
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 100%;
`;

const MenuLink = styled.a`
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: x-large;
  &:hover {
    border-bottom: 3px solid #fff;
    transition: all 0.2s linear;
    color: #663399;
  }
`;

function NavBar() {
  return (
    <NavContainer>
      <LogoContainer>
        <NavIcon src={logo} alt="logo" />
        <Title href="/">MY NUSMODS</Title>
      </LogoContainer>
      <Menu>
        <MenuLink className="MenuLink" to="/">
          Link1
        </MenuLink>
        <MenuLink className="MenuLink" to="/">
          Link2
        </MenuLink>
        <MenuLink className="MenuLink" to="/">
          Link3
        </MenuLink>
      </Menu>
      <div style={{ margin: "10px" }}>
        <LightButton>LOG IN</LightButton>
      </div>
    </NavContainer>
  );
}

export default NavBar;
