import React from "react";

export type MenuItems = "home" | "patients" | "profile";

export interface IMainMenuProps {
  selectedItem: MenuItems;
  onSelectedItemChange: (newSelection: MenuItems) => void;
}

function getStyle(menuOptions: MenuItems, highlightIf: string): any {
  const basicProps = {
    float: "left",
    width: "100px",
    listStyle: "none"
  };
  return menuOptions === highlightIf
    ? {
        color: "red",
        textTransform: "uppercase" as "uppercase",
        ...basicProps
      }
    : { color: "green", ...basicProps };
}

const MainMenu = (props: IMainMenuProps) => (
  <ul
    style={{
      marginTop: "2em",
      borderStyle: "solid",
      borderWidth: "5px",
      borderColor: "white"
    }}
  >
    <li onClick={() => props.onSelectedItemChange("home")} style={getStyle(props.selectedItem, "home")}>Home</li>
    <li onClick={() => props.onSelectedItemChange("patients")} style={getStyle(props.selectedItem, "patients")}>Patients</li>
    <li onClick={() => props.onSelectedItemChange("profile")} style={getStyle(props.selectedItem, "profile")}>Profile</li>
  </ul>
);

export default MainMenu;
