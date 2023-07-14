import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../features/header/Header";
import Home from "../features/home/Home";
import LoginPage from "../features/auth/login/LoginPage";
import RegistrationPage from "../features/auth/registration/RegistrationPage";

function App() {
  return (
    <>
      <Header />
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
        </Routes>
      </div>
    </>
  );
}

export default App;
