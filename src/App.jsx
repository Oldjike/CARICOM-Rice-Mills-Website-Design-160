import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-rice-white via-gray-50 to-caribbean-green/5">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Hero />
              <About />
              <Process />
              <Products />
              <WhyChooseUs />
              <Certifications />
              <Testimonials />
              <News />
              <Contact />
            </motion.div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;