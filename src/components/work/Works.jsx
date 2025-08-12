import React, { useEffect, useState } from "react";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import axios from 'axios';

const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Define la URL base de tu backend de forma condicional
    // Cuando el proyecto está desplegado, usa la URL de Render. En local, usa localhost.
    const backendBaseUrl = process.env.NODE_ENV === 'production'
        ? 'https://tu-backend-django.onrender.com' // <-- ¡IMPORTANTE! Reemplaza con la URL de tu servicio de Render
        : 'http://localhost:8000';

    // useEffect 1: Cargar proyectos desde la API de Django
    useEffect(() => {
        const fetchProjectsFromDjango = async () => {
            try {
                setLoading(true);
                // Usa la URL base para hacer la llamada a la API
                const response = await axios.get(`${backendBaseUrl}/api/projects/`);
                
                const mappedProjects = response.data.map(proj => ({
                    id: proj.id,
                    // Construye la URL completa de la imagen para que React la pueda mostrar
                    image: `${backendBaseUrl}${proj.main_image_url}`,
                    title: proj.title,
                    category: proj.category,
                    deploymentLink: proj.deployment_link,
                    githubLink: proj.github_link,
                    shortDescription: proj.short_description,
                }));

                setAllProjects(mappedProjects);
                setFilteredProjects(mappedProjects);
                setError(null);
            } catch (err) {
                console.error("Error al cargar los proyectos desde Django:", err);
                setError("No se pudieron cargar los proyectos. Asegúrate de que el servidor de Django esté funcionando.");
                setAllProjects([]);
                setFilteredProjects([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectsFromDjango();
    }, [backendBaseUrl]);

    // useEffect 2: Filtrar proyectos cuando cambie la categoría
    useEffect(() => {
        if (loading) return;

        if (item.name === "all") {
            setFilteredProjects(allProjects);
        } else {
            const newProjects = allProjects.filter((project) => {
                return project.category.toLowerCase() === item.name.toLowerCase();
            });
            setFilteredProjects(newProjects);
        }
    }, [item, allProjects, loading]);

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
                <p className="loading-message">Asegúrate de que tu servidor Django esté funcionando.</p>
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
                    <p className="no-projects-message">No hay proyectos disponibles.</p>
                ) : (
                    filteredProjects.map((projectItem) => {
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