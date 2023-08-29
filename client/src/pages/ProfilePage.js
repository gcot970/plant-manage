import React, { useState } from 'react';
import PlantCard from './PlantCard';
import { useMutation } from '@apollo/client';
import { DELETE_PLANT, ADD_PLANT } from './utils/mutations';
import AddPlantForm from './PlantForm';

const ProfilePage = ({ plants }) => {
  const [deletePlantMutation] = useMutation(DELETE_PLANT);
  const [plantsList, setPlantsList] = useState(plants);

  const handleDeletePlant = async (plant) => {
    try {
      const { data } = await deletePlantMutation({
        variables: { plantId: plant._id },
      });

      console.log(`Plant deleted: ${data.deletePlant._id}`);

      setPlantsList((prevPlants) =>
        prevPlants.filter((p) => p._id !== plant._id)
      );
    } catch (error) {
      console.error(`Error deleting plant: ${error.message}`);
    }
  };

  const handlePlantAdded = (newPlant) => {
    setPlantsList((prevPlants) => [...prevPlants, newPlant]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <AddPlantForm onPlantAdded={handlePlantAdded} />
        </div>
        <div className="col-md-8">
          <h1 className="my-4">My Plants</h1>
          {plantsList && plantsList.length > 0 ? (
            <div className="row">
              {plantsList.map((plant) => (
                <div className="col-md-4 mb-4" key={plant._id}>
                  <PlantCard plant={plant} onDeleteClick={handleDeletePlant} />
                </div>
              ))}
            </div>
          ) : (
            <p>No plants available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
