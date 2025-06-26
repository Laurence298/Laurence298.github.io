import Navbar from "./components/navbar";
import { NavbarContextProvider } from "./components/Hook";
import ListView from "./pages/Listview";
import AboutMe from "./pages/aboutme";
import Contact from "./pages/Contact";
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
