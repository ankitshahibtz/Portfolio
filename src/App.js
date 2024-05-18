import { Route, Routes, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.scss";
import Navbar from "./components/navBar";
import Theme from "./components/theme";
import About from "./containers/about";
import Home from "./containers/home";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import particlesConfig from "./helpers/particlesConfig";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  const renderParticleJsIfCurrentPageIsHomePage =
    location.pathname === "/ankit-shahi/";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsIfCurrentPageIsHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}
      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      {/* main page content */}
      <div className="App__main-content-wrapper">
        <Theme />
        <Routes>
          {/* create all routes */}
          <Route path="/ankit-shahi/" index element={<Home />} />
          <Route path="/ankit-shahi/about" element={<About />} />
          <Route path="/ankit-shahi/skills" element={<Skills />} />
          <Route path="/ankit-shahi/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
