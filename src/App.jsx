import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// route components
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import FAQ from "./components/FAQ";

// Apps
import Todo from "./components/app-to-do/Todo";
import AppZikr from "./components/app-zikr/AppZikr";
import AppRegisForm from "./components/app-register-form/AppRegisForm";
import AppExpenseTracker from "./components/app-expense-tracker/AppExpenseTracker";
import AppCalculator from "./components/app-calculator/AppCalculator";
import AppVoter from "./components/app-voter/AppVoter";
import ReduxTest from "./components/ReduxTest";

// miscellanous components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Nested Projects Route */}
        <Route path="/project">
          <Route index element={<Project />} />
          <Route path="zikr-app" element={<AppZikr />} />
          <Route path="registration-form" element={<AppRegisForm />} />
          <Route path="expense-tracker" element={<AppExpenseTracker />} />
          <Route path="to-do-app" element={<Todo />} />
          <Route path="calculator-app" element={<AppCalculator />} />
          <Route path="voter-app" element={<AppVoter />} />
          <Route path="redux-test" element={<ReduxTest />} />
        </Route>
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
