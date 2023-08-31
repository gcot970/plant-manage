import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_PLANT, ADD_PLANT } from './utils/mutations';
import { PLANT_QUERY } from './utils/querys';
import AddPlantForm from './PlantForm';


const ProfilePage = () => {
  const [deletePlantMutation] = useMutation(DELETE_PLANT);
  const [plantsList, setPlantsList] = useState([]);
  
  // Fetch plant data when the component mounts
  const { data } = useQuery(PLANT_QUERY);
  
  // Update the plant list when data changes
  useEffect(() => {
    if (data && data.myPlants) {
      setPlantsList(data.myPlants);
    }
  }, [data]);

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
    <h1 className="my-4">My Plants</h1>
    <div className="row">
      <div className="col-md-4 mb-4">
        <AddPlantForm onPlantAdded={handlePlantAdded} />
      </div>
      <div className="col-md-8">
       
        <div className="row">
          {plantsList.map((plant) => (
            <div className="col-md-4 mb-4" key={plant._id}>
              <PlantCard plant={plant} onDeleteClick={handleDeletePlant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default ProfilePage;
