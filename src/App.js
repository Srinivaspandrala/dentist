
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookAppointment from './components/BookAppointment';
import Navbar from './components/Navbar';
import Services from './components/Service';
import AboutUs from './components/About us';
import Footer from './components/Footer';
import HeroSection from './components/Hero section';
import LoginForm from './components/Login';
import DentistList from './components/DentistList';
import AdminPanel from './components/AdminPanel';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutUs/>
            <DentistList />
            <Services />
          </>
        } />
        <Route path="/availability/:id" element={<BookAppointment />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
