import React from "react";
import "./App.scss";
import { Header } from "./app/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./app/components/Footer/Footer";
import { HomePage } from "./app/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element = {<HomePage />}></Route>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
