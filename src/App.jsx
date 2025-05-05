import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import GameDev from "./pages/GameDev";
import { NavbarContextProvider } from "./components/Hook";
// import other pages here as needed

function App() {
  return (
    <NavbarContextProvider>
      <Navbar />
      <GameDev />
    </NavbarContextProvider>
  );
}

export default App;
