import React, { useState } from "react";
import PlantCard from "./PlantCard";
import plantsData from "../data/plants";

const PlantList = () => {

    const[searchTerm, setSearchTerm]=useState("");
    const filteredPlants = plantsData.filter(plant =>
        plant.commonName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return ( 
     <div>
        <input type="text"  placeholder="Search for a plant" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <div className="plant-list">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
     </div>
     );
}
 
export default PlantList;