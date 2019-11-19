import React, { useReducer, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainMenu from "./MainMenu";
import HomeView from "./HomeView";
import PatientList from "./PatientsList";
import ProfileView from "./ProfileView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context, initialState, IStore } from "./store";
import { rootReducer } from "./reducers/rootReducer";
import { fetchPatients } from "./actions/patientActions";

const App = () => {
  // We're going to place state and the dispatcher into the context.
  // That means that it'll be accessible to all child components,
  //  without explicitly needing to be passed down as props.
  const [state, dispatch] = useReducer(rootReducer, initialState as IStore);

  // Let's do the initial fetch.
  // Once this is complete, it will dispatch the "FETCH_PATIENTS" action.
  //  - See the implementation of fetchPatients
  //  - Once the action is dispatched, it will get updated in our global state by the reducer.
  //  - See the implementation of the rootReducer.
  //
  useEffect(() => {
    if (typeof state.patients === "undefined") {
      fetchPatients(dispatch);
    }
  });

  return (
    // The value is what child components can fetch.
    // We provide the state, and a dispatch so that child components can dispatch their own events.
    // For example, add new patient button needs to dispatch the "ADD_PATIENT" action.
    <Context.Provider value={{ state, dispatch }}>
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
        <footer
          style={{
            paddingTop: "4em",
            paddingBottom: "10em",
            textAlign: "center"
          }}
        >
          This is a footer
        </footer>
      </Router>
    </Context.Provider>
  );
};

export default App;
