import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const backendBaseUrl = process.env.NODE_ENV === 'production'
        ? 'https://tu-backend-django.onrender.com'
        : 'http://localhost:8000';

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${backendBaseUrl}/api/projects/${id}/`);
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
    }, [id, backendBaseUrl]);

    const returnToPortfolioLink = (
        <Link to="/" className="button button--flex project-detail__back-button">
            <i className='bx bx-arrow-back project-detail__icon'></i> Volver al Portafolio
        </Link>
    );

    if (loading) {
        return (
            <section className="project-detail-section">
                <nav className="project-detail-nav">
                    {returnToPortfolioLink}
                </nav>
                <p className="loading-message">Cargando detalles del proyecto...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="project-detail-section">
                <nav className="project-detail-nav">
                    {returnToPortfolioLink}
                </nav>
                <p className="error-message">{error}</p>
            </section>
        );
    }

    if (!project) {
        return (
            <section className="project-detail-section">
                <nav className="project-detail-nav">
                    {returnToPortfolioLink}
                </nav>
                <p className="no-project-found">Proyecto no encontrado.</p>
            </section>
        );
    }

    return (
        <section className="project-detail-section">
            <nav className="project-detail-nav">
                {returnToPortfolioLink}
            </nav>

            <h1 className="project-detail__title">{project.title}</h1>
            <span className="project-detail__category">{project.category}</span>

            {project.main_image_url && (
                <img
                    src={`${backendBaseUrl}${project.main_image_url}`}
                    alt={project.title}
                    className="project-detail__image"
                />
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
    );
};

export default ProjectDetail;