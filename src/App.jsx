import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// route components
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import About from "./pages/about/About";
import Credits from "./pages/credits/Credits";

// Route for child of projects (applications)
import { ProjectChild } from "./routes/project-child/ProjectChild";

// miscellanous components
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import NotFound from "./pages/not-found/NotFound";

// Preloader
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const location = useLocation();

  // Preloader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/project">
              {/* Project Parent */}
              <Route index element={<Project />} />
              {/* Project Child */}
              {ProjectChild.map(({ id, path, element }) => {
                return <Route key={id} path={path} element={element} />;
              })}
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
