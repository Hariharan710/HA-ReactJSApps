import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const activeStyleProps: CSSProperties = {
  fontWeight: "bold",
  color: "red"
};

const MainMenu = () => (
  <ul
    style={{
      marginTop: "2em",
      borderStyle: "solid",
      borderWidth: "5px",
      borderColor: "white"
    }}
  >
    <li>
      <NavLink to="/" activeStyle={activeStyleProps}>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/patients" activeStyle={activeStyleProps}>
        Patients
      </NavLink>
    </li>

    <li>
      <NavLink to="/profile" activeStyle={activeStyleProps}>
        Profile
      </NavLink>
    </li>
  </ul>
);

export default MainMenu;
