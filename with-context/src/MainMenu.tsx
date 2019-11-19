import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const styles: any = {
  li: {
    float: "left",
    width: "150px",
    padding: "1em",
    background: "#ffffcc",
    listStyle: "none",
    border: "1px solid gray",
    textAlign: "center"
  }
};

const activeStyleProps: CSSProperties = {
  fontWeight: "bold",
  color: "red",
  textTransform: "uppercase"
};

/*
  Just a menu.
*/
const MainMenu = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <ul
      style={{
        paddingTop: "1em",
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "white",
        margin: "auto",
        marginBottom: "2em"
      }}
    >
      <li style={styles.li}>
        <NavLink exact to="/" activeStyle={activeStyleProps}>
          Home
        </NavLink>
      </li>

      <li style={styles.li}>
        <NavLink to="/patients" activeStyle={activeStyleProps}>
          Patients
        </NavLink>
      </li>

      <li style={styles.li}>
        <NavLink to="/profile" activeStyle={activeStyleProps}>
          Profile
        </NavLink>
      </li>
    </ul>
  </div>
);

export default MainMenu;
