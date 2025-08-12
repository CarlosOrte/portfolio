import React from 'react';
import { Link } from 'react-router-dom'; // <-- Asegúrate de que Link esté importado

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}> {/* <-- El div es ahora el contenedor principal */}
      {item.image ? (
        <img src={item.image} alt={item.title} className="work__img" />
      ) : (
        <div className="work__img-placeholder">No Image</div>
      )}
      <h3 className="work__title">{item.title}</h3>
      <span className="work__category">{item.category}</span>

      {/* Nuevo botón "Ver Detalles" que usa Link */}
      <Link to={`/projects/${item.id}`} className="work__button">
        Ver Detalles <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </Link>
    </div>
  );
};

export default WorkItems;