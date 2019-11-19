import React, { useState } from "react";
import { IPatientDetails } from "./api";

export interface IAddPatientBoxProps {
  onPatientAdd: (p: IPatientDetails) => void;
}

const AddPatientBox = (props: IAddPatientBoxProps) => {
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
        <button
          onClick={() =>
            props.onPatientAdd({
              id: 0,
              name: nameValue,
              age: ageValue
            })
          }
        >
          Save Patient
        </button>
      </p>
    </div>
  );
};

export default AddPatientBox;
