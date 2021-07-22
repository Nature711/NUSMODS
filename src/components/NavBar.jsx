import React from "react";
import logo from "../images/notepad.png";
import { LightButton } from "../globalStyles";
import styled from "styled-components/macro";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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

const Title = styled.button`
  color: #fff;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 1000;
  font-family: "papyrus";
  outline: none;
  border: none;
  background: none;
`;

// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   height: 100%;
// `;

// const MenuLink = styled.p`
//   color: #fff;
//   padding: 0.5rem 1rem;
//   margin: ${({ margin }) => (margin ? margin : "5px")};
//   font-size: x-large;
//   &:hover {
//     border-bottom: 3px solid #fff;
//     transition: all 0.2s linear;
//     color: ${({ color }) => (color ? color : "purple")};
//   }
// `;

const Functionalities = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

function NavBar() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <NavContainer>
      <LogoContainer>
        <NavIcon src={logo} alt="logo" />
        <Title onClick={() => history.push(currentUser ? "/" : "/login")}>
          MY NUSMODS
        </Title>
      </LogoContainer>
      {/* {currentUser ? (
        <Menu>
          <MenuLink>Link1</MenuLink>
          <MenuLink>Link2</MenuLink>
        </Menu>
      ) : null} */}
      {currentUser ? (
        <Functionalities>
          <Link to="/UserProfile">
            <LightButton>My Profile</LightButton>
          </Link>
          <LightButton onClick={handleLogout}>LOG OUT</LightButton>
        </Functionalities>
      ) : null}
    </NavContainer>
  );
}

export default NavBar;
