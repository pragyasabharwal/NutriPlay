import { createContext, useContext, useState } from "react";
import { reducer } from "../reducer";
import { useReducer } from "react";

const DataContext = createContext();

const initialState = {
  watchLater: [],
  liked: [],
  saved: [],
  flag: [],
  displayModal: false,
  displayNav: true,
  displayActions: true,
  playObj: [],
  history: [],
  show: false

}

export function DataProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{ dispatch, state, modal, setModal }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
};
