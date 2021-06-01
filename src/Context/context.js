import { createContext, useContext } from "react";
import { reducer } from "../Components/reducer";
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{ dispatch, state }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
};
