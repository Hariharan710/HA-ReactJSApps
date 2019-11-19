import React from "react";

export interface IPatientViewProps {
  name: string;
  age: number;
}

/*
  A component that displays patient details.
  For now it just prints it.
*/
const PatientView = (props: IPatientViewProps) => (
  <li>
    Name is {props.name} and age is {props.age}
  </li>
);

export default PatientView;
