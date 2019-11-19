import React, { useState, useContext } from "react";
import { Context } from "./store";
import { addPatient } from "./actions/patientActions";

/*
  Right now we don't have any props.
  We could have add - for example 'bgColor'. Or a boolean like 'isAgeCompulsory'.

  When the add patient button is clicked, we fire the "addPatient" action.
*/
export interface IAddPatientBoxProps {}

const AddPatientBox = (props: IAddPatientBoxProps) => {
  const { dispatch } = useContext(Context);
  const [nameValue, setName] = useState("");
  const [ageValue, setAge] = useState(0);

  return (
    <div style={{ padding: "1em", background: "gray" }}>
      <p>
        Name:
        <br />
        <input onChange={e => setName(e.target.value)} type="text" />
      </p>
      <p>
        Age:
        <br />
        <input onChange={e => setAge(Number(e.target.value))} type="text" />
      </p>
      <p>
        <button onClick={() => addPatient(nameValue, ageValue, dispatch)}>
          Save Patient
        </button>
      </p>
    </div>
  );
};

export default AddPatientBox;
