import { IStore } from "../store";
import { IPatientDetails } from "../api";

/*
  The job of the reducer is to reconcile events/actions dispatched by various components
  into the global application state.

  In our example there are only two actions - FETCH_PATIENTS and ADD_PATIENT.
  Each action carries with it the data associated with the action. 
  For instance FETCH_PATIENTS will contain a list of patients.
*/

export type FetchPatientsAction = {
  type: "FETCH_PATIENTS";
  patients: IPatientDetails[];
};

export type AddPatientAction = {
  type: "ADD_PATIENT";
  patient: IPatientDetails;
};

export type Action = FetchPatientsAction | AddPatientAction;

export function rootReducer(state: IStore, action: Action) {
  switch (action.type) {
    case "FETCH_PATIENTS":
      return { ...state, patients: action.patients };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: (state.patients || []).concat(action.patient)
      };
    default:
      return state;
  }
}
