import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainMenu, { MenuItems } from "./MainMenu";
import HomeView from "./HomeView";
import PatientList from "./PatientsList";
import ProfileView from "./ProfileView";

const App = () => {
  const initialSection: MenuItems = "home" as MenuItems;
  const [currentSection, setCurrentSection] = useState(initialSection);

  function onSelectedMenuItemChange(newSelection: MenuItems) {
    setCurrentSection(newSelection);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React at HealthAsyst
        </a>
        <MainMenu onSelectedItemChange={onSelectedMenuItemChange} selectedItem={currentSection} />
        {currentSection === "home" ? (
          <HomeView />
        ) : currentSection === "patients" ? (
          <PatientList />
        ) : currentSection === "profile" ? (
          <ProfileView />
        ) : (
          <div>Invalid section</div>
        )}
      </header>
    </div>
  );
};

export default App;
