import { createContext, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserContextProvider = ({ children }) => {
  // const value = {user, signin, signuot}
  const value = 'string';

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};