import React from "react";
import "./App.scss";
import { Header } from "./app/components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
