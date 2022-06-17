import React, { useContext, useReducer, createContext } from "react";
export const StateContext = createContext();

//creating state provider - Preparing the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};
//hook allows us to pull information from data layer
export const useStateValue = () => useContext(StateContext);
