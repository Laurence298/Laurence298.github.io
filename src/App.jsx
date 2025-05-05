import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router";
import GameDev from "./pages/GameDev";
import { NavbarContextProvider } from "./components/Hook";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <Navbar />
        <GameDev />
      </NavbarContextProvider>
    </>
  );
}

export default App;
