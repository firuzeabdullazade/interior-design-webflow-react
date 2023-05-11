import React from "react";
import "./App.scss";
import { Header } from "./app/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./app/components/Footer/Footer";
import { HomePage } from "./app/pages/HomePage/HomePage";
import { LoginPage } from "./app/pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element = {<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
