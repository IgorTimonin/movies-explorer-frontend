import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

  // const value = {user, signin, signuot}
  const value = 'string'

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}