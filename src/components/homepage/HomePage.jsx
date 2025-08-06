// portfolio_frontend/src/components/homepage/HomePage.jsx

import React from 'react';
// Importa Header y Footer aquí
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Tus componentes de sección
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Services from "../../components/services/Services";
import Qualifications from "../../components/qualifications/Qualifications";
import Work from "../../components/work/Work";
import Contact from "../../components/contact/Contact";

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