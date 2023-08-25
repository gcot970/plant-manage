import React from 'react';
import PlantCard from './PlantCard';

const UserPage = ({ plants, handleWaterClick, handleDeleteClick }) => {
  return (
    <div className="container">
      <div className="row">
        {plants.map((plant) => (
          <div className="col-md-4" key={plant.id}>
            <PlantCard
              plant={plant}
              onWaterClick={handleWaterClick}
              onDeleteClick={handleDeleteClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
