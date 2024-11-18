import React, { useState, useEffect, useRef } from "react";
import PlantCard from "./PlantCard";
import plantsData from "../data/plants";

const PlantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState(""); 
  const [plants, setPlants] = useState(plantsData);
  const [showForm, setShowForm] = useState(false);
  const [newPlant, setNewPlant] = useState({
    commonName: "",
    botanicalName: "",
    description: "",
    imageUrl: "",
    light: "",
    water: "",
    humidity: "",
    fertilizer: "",
    pests: "",
    difficulty: "",
  });
  const formRef = useRef(null);

  // Load plants from localStorage on mount
  useEffect(() => {
    const savedPlants = JSON.parse(localStorage.getItem("plants"));
    if (savedPlants) {
      setPlants(savedPlants);
    }
  }, []);

  // Handle input changes for form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({
      ...newPlant,
      [name]: value,
    });
  };

  // Add a new plant
  const handleAddPlant = (e) => {
    e.preventDefault();
    if (Object.values(newPlant).some((field) => field === "")) {
      alert("Please fill in all fields.");
      return;
    }

    const newPlantData = {
      ...newPlant,
      id: plants.length + 1,
      pests: newPlant.pests.split(",").map((pest) => pest.trim()),
    };

    const updatedPlants = [...plants, newPlantData];
    setPlants(updatedPlants);
    setNewPlant({
      commonName: "",
      botanicalName: "",
      description: "",
      imageUrl: "",
      light: "",
      water: "",
      humidity: "",
      fertilizer: "",
      pests: "",
      difficulty: "",
    });

    localStorage.setItem("plants", JSON.stringify(updatedPlants));
    setShowForm(false);
  };

  // Delete a plant
  const handleDeletePlant = (id) => {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);
    localStorage.setItem("plants", JSON.stringify(updatedPlants));
  };

  // Filter plants based on search term and difficulty
  const filteredPlants = plants.filter((plant) => {
    const matchesSearchTerm = plant.commonName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter
      ? plant.difficulty.toLowerCase() === difficultyFilter.toLowerCase()
      : true;
    return matchesSearchTerm && matchesDifficulty;
  });

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        formRef.current &&
        !formRef.current.contains(e.target) &&
        e.target.className !== "add-plant-button"
      ) {
        setShowForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a plant"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filter by difficulty */}
      <select
        value={difficultyFilter}
        className="difficulty-select"
        onChange={(e) => setDifficultyFilter(e.target.value)}
      >
        <option value="">All Difficulties</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* Toggle form */}
      <button onClick={() => setShowForm(!showForm)} className="add-plant-button">
        {showForm ? "Cancel" : "Add Plant"}
      </button>

      {/* Add plant form */}
      {showForm && (
        <form onSubmit={handleAddPlant} ref={formRef}>
          <h2>Add a New Plant</h2>
          <input
            type="text"
            name="commonName"
            placeholder="Common Name"
            value={newPlant.commonName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="botanicalName"
            placeholder="Botanical Name"
            value={newPlant.botanicalName}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newPlant.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newPlant.imageUrl}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="light"
            placeholder="Light Requirements"
            value={newPlant.light}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="water"
            placeholder="Watering Frequency"
            value={newPlant.water}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="humidity"
            placeholder="Humidity Requirements"
            value={newPlant.humidity}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="fertilizer"
            placeholder="Fertilizer Needs"
            value={newPlant.fertilizer}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="pests"
            placeholder="Common Pests (comma separated)"
            value={newPlant.pests}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="difficulty"
            placeholder="Difficulty Level"
            value={newPlant.difficulty}
            onChange={handleInputChange}
          />
          <button type="submit" className="add-plant-button">
            Add Plant
          </button>
        </form>
      )}

      {/* Display plant list */}
      <div className="plant-list">
        {filteredPlants.map((plant) => (
          <div key={plant.id}>
            <PlantCard plant={plant} />
            <button
              onClick={() => handleDeletePlant(plant.id)}
              className="delete-plant-button"
            >
              Delete Plant
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantList;
