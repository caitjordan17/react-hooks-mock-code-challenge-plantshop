import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  
  //console.log("in PlantList", plants)
  const plantsToList = plants.map((plant) => (
    <PlantCard key={plant.id}
    plant={plant}/>
  ))
  //console.log(plantsToList)

  return (
    <div>
      <ul className="cards">{plantsToList}</ul>
    </div>
  );
}

export default PlantList;
