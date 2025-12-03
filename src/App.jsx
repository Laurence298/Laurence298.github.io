import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { NavbarContextProvider } from "./contexts";
import { ListView, AboutMe } from "./pages";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <NavbarContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <AboutMe />
              <ListView />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </NavbarContextProvider>
  );
}

export default App;
