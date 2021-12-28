import React, { useState, createContext } from "react";
import User from "./User";
import Admin from "./Admin";
export const AppContext = createContext(null);

function Context() {
  const [userName, setAdmin] = useState("");

  return (
    <AppContext.Provider value={{ userName, setAdmin }}>
      <User />
      <Admin />
    </AppContext.Provider>
  );
}

export default Context;
