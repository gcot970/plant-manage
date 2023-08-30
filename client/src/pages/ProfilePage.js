import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_PLANT, ADD_PLANT } from './utils/mutations';
import { QUERY_ME, PLANT_QUERY } from './utils/querys';
import AddPlantForm from './PlantForm';

const ProfilePage = () => {
  const [deletePlantMutation] = useMutation(DELETE_PLANT);
  const [plantsList, setPlantsList] = useState([]);
  const { data: userData } = useQuery(QUERY_ME);
  const { data: plantsData } = useQuery(PLANT_QUERY);

  useEffect(() => {
    if (plantsData && plantsData.myPlants) {
      setPlantsList(plantsData.myPlants);
    }
  }, [plantsData]);

  const handleDeletePlant = async (plant) => {
    try {
      const { data } = await deletePlantMutation({
        variables: { plantId: plant._id },
      });

      console.log(`Plant deleted: ${data.deletePlant._id}`);

      // Update the state to remove the deleted plant
      setPlantsList((prevPlants) =>
        prevPlants.filter((p) => p._id !== plant._id)
      );
    } catch (error) {
      console.error(`Error deleting plant: ${error.message}`);
    }
  };

  const handlePlantAdded = (newPlant) => {
    // Update the state to include the newly added plant
    setPlantsList((prevPlants) => [...prevPlants, newPlant]);
  };

  const userId = userData?.me?._id;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <AddPlantForm onPlantAdded={handlePlantAdded} userId={userId} />
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
        
        <div className="col-md-4 mb-4">
          <AddPlantForm onPlantAdded={handlePlantAdded} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
