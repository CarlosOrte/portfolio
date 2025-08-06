import React, { useEffect, useState } from "react";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import axios from 'axios';

const Works = () => {
  const [item, setItem] = useState({ name: "all" }); // Categoría activa
  const [allProjects, setAllProjects] = useState([]); // <-- NUEVO: Guarda TODOS los proyectos de la API
  const [filteredProjects, setFilteredProjects] = useState([]); // <-- NUEVO: Proyectos que se muestran
  const [active, setActive] = useState(0); // Índice de la categoría activa para estilos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect 1: Cargar proyectos desde la API de Django
  useEffect(() => {
    const fetchProjectsFromDjango = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://tu-backend-django.onrender.com/api/projects/');
        const mappedProjects = response.data.map(proj => ({
            id: proj.id,
            image: proj.main_image_url,
            title: proj.title,
            category: proj.category,
            deploymentLink: proj.deployment_link,
            githubLink: proj.github_link,
            shortDescription: proj.short_description,
        }));
        setAllProjects(mappedProjects); // <-- Guarda todos los proyectos aquí
        setFilteredProjects(mappedProjects); // <-- Inicialmente, muestra todos los proyectos
        setError(null);
      } catch (err) {
        console.error("Error al cargar los proyectos desde Django:", err);
        setError("No se pudieron cargar los proyectos. Asegúrate de que el servidor de Django esté corriendo.");
        setAllProjects([]); // En caso de error, vacía ambos arrays
        setFilteredProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsFromDjango();
  }, []); // Se ejecuta solo una vez al montar

  // useEffect 2: Filtrar proyectos cuando cambie la categoría o los proyectos base
  useEffect(() => {
    if (loading) return; // No intentes filtrar si aún está cargando

    if (item.name === "all") {
      setFilteredProjects(allProjects); // <-- Muestra TODOS los proyectos
    } else {
      const newProjects = allProjects.filter((project) => { // <-- ¡Filtra SIEMPRE desde allProjects!
        return project.category.toLowerCase() === item.name.toLowerCase();
      });
      setFilteredProjects(newProjects); // Actualiza los proyectos que se muestran
    }
  }, [item, allProjects, loading]); // Dependencias: 'item' (categoría), 'allProjects' (datos base), 'loading'

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  if (loading) {
    return (
      <section className="work section" id="portfolio">
        <h2 className="section__title">Portafolio</h2>
        <span className="section__subtitle">Mis trabajos más recientes</span>
        <div className="work__filters">Cargando proyectos...</div>
        <p className="loading-message">Asegúrate de que tu servidor Django esté funcionando en `http://127.0.0.1:8000`.</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="work section" id="portfolio">
        <h2 className="section__title">Portafolio</h2>
        <span className="section__subtitle">Mis trabajos más recientes</span>
        <div className="work__filters">Error al cargar</div>
        <p className="error-message">{error}</p>
      </section>
    );
  }

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {navItem.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {filteredProjects.length === 0 ? (
          <p className="no-projects-message">No hay proyectos disponibles en esta categoría o en el portafolio. ¡Añade algunos en el panel de administración de Django!</p>
        ) : (
          filteredProjects.map((projectItem) => { // <-- Ahora se mapea sobre filteredProjects
            return (
              <WorkItems
                item={projectItem}
                key={projectItem.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Works;