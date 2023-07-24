import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../features/home/Home";
import LoginPage from "../features/auth/login/LoginPage";
import RegistrationPage from "../features/auth/registration/RegistrationPage";
import { useAppDispatch } from "../redux/store";
import { getUserAsync } from "../redux/authSlice";
import SatrtPage from "../features/start/SatrtPage";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getUserAsync());
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<LoginPage />}
          />
          <Route
            path='/registration'
            element={<RegistrationPage />}
          />
          <Route
            path='/start'
            element={<SatrtPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
