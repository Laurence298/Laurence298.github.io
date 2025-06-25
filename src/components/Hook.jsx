import React, { useContext, useState, createContext } from "react";

const NavBarContext = createContext();

export function useNavbarContext() {
  return useContext(NavBarContext);
}

export function NavbarContextProvider({ children }) {
  const [Index, setIndex] = useState(0);
  const [Clicked, SetClicked] = useState(false);

  return (
    <NavBarContext.Provider value={{ Index, Clicked, SetClicked, setIndex }}>
      {children}
    </NavBarContext.Provider>
  );
}
