import React from 'react';
import { Link } from 'react-router-dom';

const PlantCard = ({ plant, onDeleteClick }) => {
  return (
    <div className="card">
      <img src={plant.imageUrl} className="card-img-top" alt={plant.nickname} />
      <div className="card-body text-center">
        <h5 className="card-title font-weight-bold">{plant.nickname}</h5>
        <h6 className="text-muted font-italic">{plant.scientificName} - {plant.commonName}</h6>
        <Link to="/calendar" className="btn btn-primary">
          Water Schedule
        </Link>
        <button className="btn btn-danger" onClick={() => onDeleteClick(plant)}>
          Delete Plant
        </button>

        {/* Might add a "Plant Watered" button here, which changes lastWaterDate*/}

      </div>
    </div>
  );
};

export default PlantCard;
