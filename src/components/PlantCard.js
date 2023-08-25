import React from 'react';

const PlantCard = ({ plant, onWaterClick, onDeleteClick }) => {
    return (
        <div className="card">
            <img src={plant.imageUrl} className="card-img-top" alt={plant.nickname} />
            <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">{plant.nickname}</h5>
                <button className="btn btn-primary" onClick={() => onWaterClick(plant)}>Water Schedule</button>
                <button className="btn btn-danger" onClick={() => onDeleteClick(plant)}>Delete Plant</button>
            </div>
        </div>
    );
}

export default PlantCard;