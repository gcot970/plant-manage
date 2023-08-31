import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PLANT } from './utils/mutations';

const PlantForm = ({ onPlantAdded }) => {
  const [formData, setFormData] = useState({
    commonName: '',
    scientificName: '',
    nickname: '',
    watering: '',
  });

  const [addPlantMutation] = useMutation(ADD_PLANT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addPlantMutation({
        variables: { ...formData },
      });
      setFormData({
        commonName: '',
        scientificName: '',
        nickname: '',
        watering: '',
      });
      onPlantAdded(data.addPlant);
    } catch (error) {
      console.error(`Error adding plant: ${error.message}`);
    }
  };

  console.log('Rendering AddPlantForm');

  return (
    <div className="sidebar">
      <h2>Add a Plant</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="commonName">Common Name</label>
          <input
            type="text"
            id="commonName"
            name="commonName"
            value={formData.commonName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="scientificName">Scientific Name</label>
          <input
            type="text"
            id="scientificName"
            name="scientificName"
            value={formData.scientificName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="watering">Watering Schedule</label>
          <input
            type="text"
            id="watering"
            name="watering"
            value={formData.watering}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

export default PlantForm;