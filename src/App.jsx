import { Navbar } from "./components";
import { NavbarContextProvider } from "./contexts";
import { ListView, AboutMe, Contact } from "./pages";
// import other pages here as needed

function App() {
  return (
    <NavbarContextProvider>
      <Navbar />
      <AboutMe />
      <ListView />
    </NavbarContextProvider>
  );
}

export default App;
