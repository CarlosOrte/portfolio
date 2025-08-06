import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Solo componentes globales que NUNCA cambian o no son parte del layout principal
import ScrollUp from "./components/scrollup/ScrollUp";

// Importa tus componentes de página
import HomePage from "./components/homepage/HomePage";
import ProjectDetail from "./components/projectdetail/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Aquí ya NO va el Header ni el Footer si quieres que sean específicos del Home */}

        <Routes>
          {/* La ruta principal '/' ahora renderizará HomePage, que contendrá su propio Header y Footer */}
          <Route path="/" element={<HomePage />} />

          {/* La ruta de detalle de proyecto renderizará ProjectDetail, que tendrá su propio diseño */}
          <Route path="/projects/:id" element={<ProjectDetail />} />

        </Routes>

        {/* ScrollUp puede quedarse aquí si es un componente flotante que aparece en todas las páginas,
            o podrías moverlo a HomePage y ProjectDetail si solo quieres que aparezca en algunas.
            Lo dejaremos aquí por ahora, asumiendo que es global.
        */}
        <ScrollUp />
      </div>
    </Router>
  );
}

export default App;