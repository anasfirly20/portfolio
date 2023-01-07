import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// route components
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Credits from "./components/Credits";

// Apps
import Todo from "./components/app-to-do/Todo";
import AppZikr from "./components/app-zikr/AppZikr";
import AppRegisForm from "./components/app-register-form/AppRegisForm";
import AppExpenseTracker from "./components/app-expense-tracker/AppExpenseTracker";
import AppCalculator from "./components/app-calculator/AppCalculator";
import AppVoter from "./components/app-voter/AppVoter";
import ReduxTest from "./components/ReduxTest";
import ExpenseV2 from "./components/app-expense-tracker-v2/ExpenseV2";

// miscellanous components
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import NotFound from "./components/NotFound";

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
            {/* Nested Projects Route */}
            <Route path="/project">
              <Route index element={<Project />} />
              <Route path="zikr-app" element={<AppZikr />} />
              <Route path="registration-form" element={<AppRegisForm />} />
              <Route path="expense-tracker" element={<AppExpenseTracker />} />
              <Route path="to-do-app" element={<Todo />} />
              <Route path="calculator-app" element={<AppCalculator />} />
              <Route path="voter-app" element={<AppVoter />} />
              <Route path="expense-tracker-v2" element={<ExpenseV2 />} />
              <Route path="redux-test" element={<ReduxTest />} />
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
