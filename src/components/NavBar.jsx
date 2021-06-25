import React from "react";
import logo from "../images/notepad.png";
import { LightButton } from "../globalStyles";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div class="LogoContainer">
        <img id="NavIcon" src={logo} alt="logo" />
        <a id="Title" href="/">
          MY NUSMODS
        </a>
      </div>
      <div class="Menu">
        <a class="MenuLink" to="/">
          Link1
        </a>
        <a class="MenuLink" to="/">
          Link2
        </a>
        <a class="MenuLink" to="/">
          Link3
        </a>
      </div>
      <div style={{ margin: "10px" }}>
        <LightButton>LOG IN</LightButton>
      </div>
    </nav>
  );
}

export default NavBar;
