import { IPatientDetails } from "../api";
import { createContext } from "react";
import { Action } from "../reducers/rootReducer";

// Define the type of the store.
// This should contain the whole application state.
export interface IStore {
  patients?: IPatientDetails[];
  loggedIn: boolean;
}

// The initial value of the store.
export const initialState: IStore = {
  patients: undefined,
  loggedIn: false
};

// We're going to use an advanced technique to manage the app state - using reducers.
// For now, just note that the Context needs to have two things
//  1. State
//  2. A dispatcher - which can be used by child components to dispatch new events/data to the store.
// The dispatched events are reconciled in the new state by the "reducer".
export const Context = createContext<{ state: IStore, dispatch: React.Dispatch<Action> }>(undefined as any);