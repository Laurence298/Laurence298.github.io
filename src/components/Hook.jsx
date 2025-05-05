import React, { useContext, useState, createContext } from "react";

const NavBarContext = createContext();

export function useNavbarContext() {
  return useContext(NavBarContext);
}

export function NavbarContextProvider({ children }) {
  const [Index, setIndex] = useState(0);

  return (
    <NavBarContext.Provider value={{ Index, setIndex }}>
      {children}
    </NavBarContext.Provider>
  );
}
