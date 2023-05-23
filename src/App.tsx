import './App.scss';
import { Footer } from './app/components/Footer/Footer';
import { Header } from './app/components/Header/Header';
import { HomePage } from './app/pages/HomePage/HomePage';
import { LoginPage } from './app/pages/LoginPage/LoginPage';
import { RegisterPage } from './app/pages/RegisterPage/Registerpage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { AboutPage } from './app/pages/AboutPage/AboutPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
