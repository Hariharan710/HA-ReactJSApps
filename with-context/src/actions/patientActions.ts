import { getPatients } from "../api";
import { Action } from "../reducers/rootReducer";

/*
  For simplicity, newly added patients get ids moret than 100K.
*/
let newPatientId: number = 100000;
function generatePatientId() {
  newPatientId = newPatientId + 1;
  return newPatientId;
}

/*
  This function gets called during app load.
  It fetches the data and dispatches the "FETCH_PATIENTS" action.
*/
export async function fetchPatients(dispatch: React.Dispatch<Action>) {
  const patients = await getPatients();
  dispatch({ type: "FETCH_PATIENTS", patients });
}

/*
  This gets called when a new patient is added.
  For example, by the AddPatientBox component.
*/
export async function addPatient(
  name: string,
  age: number,
  dispatch: React.Dispatch<Action>
) {
  dispatch({
    type: "ADD_PATIENT",
    patient: { id: generatePatientId(), name, age }
  });
}
