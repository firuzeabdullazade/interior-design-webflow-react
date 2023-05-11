import React from "react";
import "./App.scss";
import { Header } from "./app/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./app/components/Footer/Footer";
import { HomePage } from "./app/pages/HomePage/HomePage";
import { LoginPage } from "./app/pages/LoginPage/LoginPage";
import { RegisterPage } from "./app/pages/RegisterPage/Registerpage";

function App() {
  return (
    <>
      <Header />
      <main>
        <RegisterPage />
        {/* <Routes>
          <Route path="/" element = {<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
          <Route path="register" element = {<RegisterPage />}></Route>
        </Routes> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
