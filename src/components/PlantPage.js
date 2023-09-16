import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState(null)
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then((r) => r.json())
    .then((r) => setPlantData(r))
  }, [])

  function handleUpdate(e){
    setPlantData([...plantData, e])
  }

  console.log("plantData",plantData)
  
  if(!plantData){
    return <p>Loading...</p>
  }

  function handleSearch(e){
    setSearch(e)
  }

  const filteredData = plantData.filter((plant) => (plant.name.toLowerCase().includes(search.toLowerCase())))

  return (
    <main>
      <NewPlantForm plantData={plantData} handleUpdate={handleUpdate}/>
      <Search searchFor={handleSearch}/>
      <PlantList plants={filteredData}/>
    </main>
  );
}

export default PlantPage;
