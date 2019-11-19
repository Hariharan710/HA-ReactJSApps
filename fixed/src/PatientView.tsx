import React from "react";

export interface IPatientViewProps {
  name: string;
  age: number;
}

const PatientView = (props: IPatientViewProps) => (
  <li>
    Name is {props.name} and age is {props.age}
  </li>
);

export default PatientView;
