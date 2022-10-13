import React, { createContext, useContext } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false, 
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider
      value={{ test: 'test' }}
    >
      { children }
    </StateContext.Provider>
  )
}