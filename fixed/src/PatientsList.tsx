import React, { useState, useEffect } from "react";
import PatientView from "./PatientView";
import * as api from "./api";
import AddPatientBox from "./AddPatientBox";
import FancyBox from "./FancyBox";

export interface IPatientListProps {
  patients?: api.IPatientDetails[],
  onPatientAdd: (p: api.IPatientDetails) => void;
}

const PatientList = ({ patients, onPatientAdd }: IPatientListProps) => {
  return (
    <div style={{ width: "800px", margin: "auto" }}>
      <h1>This is a list of patients.</h1>
      <ul>
        {typeof patients !== "undefined" ? (
          patients.map(p => (
            <PatientView key={p.id} name={p.name} age={p.age} />
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
      <FancyBox color="purple">
        <h1>Add a new patient!</h1>
        <AddPatientBox onPatientAdd={onPatientAdd} />
      </FancyBox>
    </div>
  );
};

export default PatientList;
