import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Importa useNavigate

import './ProjectDetail.css'; // Asegúrate de tener este archivo CSS

const ProjectDetail = () => {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
  const [project, setProject] = useState(null); // Estado para guardar el proyecto individual
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegación programática

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://tu-backend-django.onrender.com/api/projects/${id}/`);
        setProject(response.data);
        setError(null);
      } catch (err) {
        console.error(`Error al cargar los detalles del proyecto ${id}:`, err);
        setError("No se pudieron cargar los detalles del proyecto. Asegúrate de que el ID sea correcto y el servidor esté funcionando.");
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]); // El efecto se ejecuta cuando el ID de la URL cambia

  // Función para intentar cerrar la pestaña (con limitaciones del navegador)
  const handleCloseTab = () => {
    window.close(); // Esto solo funcionará si la pestaña fue abierta por tu script
    // Como fallback, podrías redirigir a la página de inicio si window.close() falla.
    // Esto es un comportamiento común si el navegador bloquea window.close().
    setTimeout(() => { // Pequeño retraso para dar tiempo a window.close()
      if (!document.hidden) { // Si la pestaña no se cerró
        navigate('/'); // Redirige a la página de inicio
      }
    }, 100);
  };

  if (loading) {
    return (
      <section className="project-detail-section">
        {/* Navbar simplificado incluso en carga */}
        <nav className="project-detail-nav">
          <Link to="/" className="project-detail-nav__link">
            <i className='bx bx-home project-detail-nav__icon'></i> Inicio
          </Link>
          <button onClick={handleCloseTab} className="project-detail-nav__button">
            <i className='bx bx-x project-detail-nav__icon'></i> Cerrar Pestaña
          </button>
        </nav>
        <p className="loading-message">Cargando detalles del proyecto...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="project-detail-section">
        <nav className="project-detail-nav">
          <Link to="/" className="project-detail-nav__link">
            <i className='bx bx-home project-detail-nav__icon'></i> Inicio
          </Link>
          <button onClick={handleCloseTab} className="project-detail-nav__button">
            <i className='bx bx-x project-detail-nav__icon'></i> Cerrar Pestaña
          </button>
        </nav>
        <p className="error-message">{error}</p>
        <Link to="/" className="button button--flex back-button">Volver al Portafolio</Link>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="project-detail-section">
        <nav className="project-detail-nav">
          <Link to="/" className="project-detail-nav__link">
            <i className='bx bx-home project-detail-nav__icon'></i> Inicio
          </Link>
          <button onClick={handleCloseTab} className="project-detail-nav__button">
            <i className='bx bx-x project-detail-nav__icon'></i> Cerrar Pestaña
          </button>
        </nav>
        <p className="no-project-found">Proyecto no encontrado.</p>
        <Link to="/" className="button button--flex back-button">Volver al Portafolio</Link>
      </section>
    );
  }

  // Si el proyecto se cargó correctamente, muestra sus detalles
  return (
    <> {/* Usamos un fragmento para envolver el nav y la sección */}
      <nav className="project-detail-nav">
        {/* Opción 1: Enlace directo al Home */}
        <Link to="/" className="project-detail-nav__link">
          <i className='bx bx-home project-detail-nav__icon'></i> Inicio
        </Link>
        {/* Opción 2: Botón para intentar cerrar la pestaña */}
        <button onClick={handleCloseTab} className="project-detail-nav__button">
          <i className='bx bx-x project-detail-nav__icon'></i> Cerrar Pestaña
        </button>
      </nav>

      <section className="project-detail-section">
        {/* El botón "Volver al Portafolio" debajo del nav, por si quieres tenerlo también */}
        {/* <Link to="/" className="button button--flex back-button">
          <i className='bx bx-arrow-back button__icon'></i> Volver al Portafolio
        </Link> */}
        
        <h1 className="project-detail__title">{project.title}</h1>
        <span className="project-detail__category">{project.category}</span>

        {project.main_image_url && (
          <img src={project.main_image_url} alt={project.title} className="project-detail__image" />
        )}

        <div className="project-detail__content">
          <h2 className="project-detail__subtitle">Descripción General</h2>
          <p>{project.short_description}</p>

          <h2 className="project-detail__subtitle">Planteamiento del Problema</h2>
          <p>{project.problem_statement}</p>

          <h2 className="project-detail__subtitle">Detalles de la Solución</h2>
          <p>{project.solution_details}</p>

          {project.process_steps && (
            <>
              <h2 className="project-detail__subtitle">Pasos del Proceso</h2>
              <div dangerouslySetInnerHTML={{ __html: project.process_steps }}></div>
            </>
          )}

          <h2 className="project-detail__subtitle">Tecnologías Utilizadas</h2>
          <p className="project-detail__technologies">{project.technologies_used}</p>

          {project.challenges_faced && (
            <>
              <h2 className="project-detail__subtitle">Desafíos Enfrentados</h2>
              <p>{project.challenges_faced}</p>
            </>
          )}

          <h2 className="project-detail__subtitle">Resultados e Impacto</h2>
          <p>{project.results_impact}</p>

          <div className="project-detail__links">
            {project.deployment_link && (
              <a href={project.deployment_link} target="_blank" rel="noopener noreferrer" className="button button--flex button--small">
                Ver Demo <i className="bx bx-link-external button__icon"></i>
              </a>
            )}
            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="button button--flex button--small button--secondary">
                GitHub <i className="bx bxl-github button__icon"></i>
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;