import './App.scss';
import { BlogDetailsPage } from './app/pages/BlogDetailsPage/BlogDetailsPage';
import { Footer } from './app/components/Footer/Footer';
import { Header } from './app/components/Header/Header';
import { HomePage } from './app/pages/HomePage/HomePage';
import { LoginPage } from './app/pages/LoginPage/LoginPage';
import { ProjectDetails } from "./app/pages/ProjectDetails/ProjectDetails";
import { ProjectPage } from './app/pages/ProjectPage/ProjectPage';
import { RegisterPage } from './app/pages/RegisterPage/Registerpage';
import { Route, Routes } from 'react-router-dom';
import { ServiceSingle } from './app/pages/ServiceSingle/ServiceSingle';
import { ServicesPage } from './app/pages/ServicesPage/ServicesPage';
import React from 'react';
import { ContactPage } from './app/pages/ContactPage/ContactPage';
import { BlogPage } from './app/pages/BlogPage/BlogPage';

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
          <Route path="project" element={<ProjectPage />}></Route>
          <Route path="blog-details" element={<BlogDetailsPage />}></Route>
          <Route path="service-single" element={<ServiceSingle />}></Route>
          <Route path="project-details" element = {<ProjectDetails />}></Route> 
          <Route path="contact" element= {<ContactPage />}></Route>
          <Route path="blog-page" element={<BlogPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;