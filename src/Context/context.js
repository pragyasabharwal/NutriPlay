import { createContext, useContext } from "react";
import { Reducer } from "../Components/reducer";
import { useReducer } from "react";
import { data } from "../Components/Data";

const DataContext = createContext();

const watchLater = [];
const liked = [];
const saved = [];
const flag = [];
const displayModal = false;
const displayNav = true;
const displayActions = true;
const playObj = []
const history = []
const show = false;

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, {
    watchLater,
    flag,
    data,
    liked,
    saved,
    displayModal,
    displayActions,
    playObj,
    history
  });

  return (
    <DataContext.Provider
      value={{ dispatch, state, displayModal, displayNav }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => {
  return useContext(DataContext);
};
