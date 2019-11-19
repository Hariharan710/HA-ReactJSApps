import React, { useContext } from "react";
import PatientView from "./PatientView";
import AddPatientBox from "./AddPatientBox";
import FancyBox from "./FancyBox";
import { Context } from "./store";

/*
  Displays a list of patients.
  It fetches the patietns from the context.
  The context contains two things. state and dispatch.
  We don't do any dispatch from the component, so we don't use it.
  
  But we use state.patients to get the list of patients.
  Whenever state.patients is updated, for example by the Add Patient feature, this component gets refreshed as well.
*/
const PatientList = () => {
  const { state } = useContext(Context);

  return (
    <div style={{ width: "800px", margin: "auto" }}>
      <h1>This is a list of patients.</h1>
      <ul>
        {typeof state.patients !== "undefined" ? (
          state.patients.map(p => (
            <PatientView key={p.id} name={p.name} age={p.age} />
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
      <FancyBox color="purple">
        <h1>Add a new patient!</h1>
        <AddPatientBox />
      </FancyBox>
    </div>
  );
};

export default PatientList;
