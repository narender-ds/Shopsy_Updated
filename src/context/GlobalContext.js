import React from "react";
import { createContext, useContext, useState } from "react";
const ContextApi = createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);

  return (
    <>
      <ContextApi.Provider value={{ isLogin, setIsLogin }}>
        {children}
      </ContextApi.Provider>
    </>
  );
};
const GlobalContext = () => {
  return useContext(ContextApi);
};
export { GlobalContext, AppProvider, ContextApi };
