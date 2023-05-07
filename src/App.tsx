import React from "react";
import "./App.scss";
import { Header } from "./app/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./app/pages/HomePage/HomePage";
import { Contact } from "./app/pages/HomePage/components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element = {<HomePage />}></Route>
        </Routes>
        <Contact/>
      </main>
    </>
  );
}

export default App;
