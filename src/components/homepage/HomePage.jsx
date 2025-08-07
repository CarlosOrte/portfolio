// portfolio_frontend/src/components/homepage/HomePage.jsx

import React from 'react';
// Importa Header y Footer aquí
import Header from "../header/Header";
import Footer from "../footer/Footer";

// Tus componentes de sección
import Home from "../home/Home";
import About from "../about/About";
import Skills from "../skills/Skills";
import Services from "../services/Services";
import Qualifications from "../qualifications/Qualifications";
import Work from "../work/Work";
import Contact from "../contact/Contact";

const HomePage = () => {
  return (
    // <React.Fragment> o un <div> envolvente si no quieres un <main> como raíz
    <>
      <Header /> {/* El Header ahora está dentro de HomePage */}
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work />
        <Contact />
      </main>
      <Footer /> {/* El Footer ahora está dentro de HomePage */}
    </>
  );
};

export default HomePage;