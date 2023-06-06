import './App.scss';
import { AboutPage } from './app/pages/AboutPage/AboutPage';
import { BlogDetailsPage } from './app/pages/BlogDetailsPage/BlogDetailsPage';
import { BlogPage } from './app/pages/BlogPage/BlogPage';
import { ContactPage } from './app/pages/ContactPage/ContactPage';
import { FilteredPosts } from './app/pages/FilteredPosts/FilteredPosts';
import { Footer } from './app/components/Footer/Footer';
import { Header } from './app/components/Header/Header';
import { HomePage } from './app/pages/HomePage/HomePage';
import { LoginPage } from './app/pages/LoginPage/LoginPage';
import { ProfilePage } from './app/pages/ProfilePage/ProfilePage';
import { ProjectDetails } from './app/pages/ProjectDetails/ProjectDetails';
import { RegisterPage } from './app/pages/RegisterPage/Registerpage';
import { Route, Routes, ScrollRestoration } from 'react-router-dom';
import { ServiceSingle } from './app/pages/ServiceSingle/ServiceSingle';
import { ServicesPage } from './app/pages/ServicesPage/ServicesPage';
import React from 'react';

function App() {
  return (
    <>
      {/* <ScrollRestoration /> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="services" element={<ServicesPage />}></Route>
          <Route path="blog/:postId" element={<BlogDetailsPage />}></Route>
          <Route path="service-single" element={<ServiceSingle />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="projects/:projectId" element={<ProjectDetails />}></Route>
          <Route path="blog" element={<BlogPage />}></Route>
          <Route path="filter" element={<FilteredPosts />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
