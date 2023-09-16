import React, {useState} from "react";

function NewPlantForm({handleUpdate, plantData}) {
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    image: "",
    price: 0,
  })
  const idNumber = (plantData.length + 1)

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,

    });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(e)
    fetch("http://localhost:6001/plants", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       id: idNumber,
       name: formData.name,
       image: formData.image,
       price: formData.price,
      }),
    });
    handleUpdate(formData);
  }

  console.log("formdata", formData)
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => handleChange(e)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => handleChange(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => handleChange(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
