import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainMenu from "./MainMenu";
import HomeView from "./HomeView";
import PatientList from "./PatientsList";
import ProfileView from "./ProfileView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
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
        </header>
      </div>
      <MainMenu />
      <div>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/patients">
            <PatientList />
          </Route>
          <Route path="/profile">
            <ProfileView />
          </Route>
        </Switch>
      </div>
      <footer style={{ paddingTop: "4em", paddingBottom: "10em", textAlign: "center" }}>This is a footer</footer>
    </Router>
  );
};

export default App;
