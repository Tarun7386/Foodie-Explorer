import React, { useState } from "react";
import './sheetcss1/AddPlaces.css'
const AddPlaces = () => {
  const [image, setImage] = useState("");
  const [Place, setPlace] = useState("");
  const [FoodItem, setFoodItem] = useState("");
  const [Rating, setRating] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const placeData = {
      image,
      Place,
      FoodItem,
      Rating,
    };
    let missingFields = [];
    if (!image) missingFields.push("Image URL");
    if (!Place) missingFields.push("Place");
    if (!FoodItem) missingFields.push("Food Item");
    if (!Rating) missingFields.push("Rating");

    if (missingFields.length > 0) {
      alert(`Please fill the ${missingFields.join(", ")}`);
      return;
    }
    
    try {
      const response = await fetch(
        "http://localhost:3000/addplaces/add_places",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(placeData),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Successfully submitted");
        window.location.reload();
      } else {
        alert("Submission failed: " + result.message);
      }

     
      setImage("");
      setPlace("");
      setFoodItem("");
      setRating("");
    } catch (error) {
      alert("Error submitting: " + error.message);
    }
  };

  return (
    <div className="place-card">
      
      <div className="inner-card1">
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div  className="inner-card2">
        <label>Place:</label>
        <input
          type="text"
          value={Place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div  className="inner-card3">
        <label>Food Item:</label>
        <input
          type="text"
          value={FoodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
      </div>
      <div  className="inner-card4">
        <label>Rating:</label>
        <input
          type="number"
          value={Rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button  className="btn" onClick={handleSubmit} type="button">
        Add Place
      </button>
    </div>
  );
};

export default AddPlaces;
