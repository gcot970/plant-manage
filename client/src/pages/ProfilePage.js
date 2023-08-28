import React from 'react';
import PlantCard from './PlantCard';
import { useMutation } from '@apollo/client';
import { DELETE_PLANT } from './utils/mutations';

const MyPlantList = ({ plants }) => {
    const [deletePlantMutation] = useMutation(DELETE_PLANT);

    const handleDeletePlant = async (plant) => {
        try {
            const { data } = await deletePlantMutation({
                variables: { plantId: plant._id },
            });

            console.log(`Plant deleted: ${data.deletePlant._id}`);
        } catch (error) {
            console.error(`Error deleting plant: ${error.message}`);
        }
    };

    return (
        <div className="container">
            <h1 className="my-4">My Plants</h1>
            <div className="row">
                {plants.map((plant) => (
                    <div className="col-md-4 mb-4" key={plant._id}>
                        <PlantCard
                            plant={plant}
                            onDeleteClick={handleDeletePlant}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPlantList;
