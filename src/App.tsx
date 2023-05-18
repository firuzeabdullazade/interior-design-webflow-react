import './App.scss';
import { Footer } from './app/components/Footer/Footer';
import { Header } from './app/components/Header/Header';
import { HomePage } from './app/pages/HomePage/HomePage';
import { LoginPage } from './app/pages/LoginPage/LoginPage';
import { RegisterPage } from './app/pages/RegisterPage/Registerpage';
import { Route, Routes } from 'react-router-dom';
import { ServicesPage } from './app/pages/ServicesPage/ServicesPage';
import { ServiceSingle } from './app/pages/ServiceSingle/ServiceSingle';
import { BlogDetailsPage } from './app/pages/BlogDetailsPage/BlogDetailsPage';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="services" element={<ServicesPage />}></Route>
          <Route path="blog-details" element={<BlogDetailsPage />}></Route>
          <Route path="service-single" element = {<ServiceSingle />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
