import React, { useState } from "react";
import "./userStyles/SearchBar.css";
const SearchBar = () => {
  const [searchResults, setSearchResults] = useState("");
  const [query, setQuery] = useState("");
  const searchLocation = async () => {
    try {
      const response = await fetch(
        `https://foodie-explorer-deploy.vercel.app/addplaces/user_cusines?q=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
    setQuery("");
  };
  return (
    <div className="main_search_bar">
      <div className="search_bar_in">
        <h1 className="title">Search FoodItem/Location</h1>
        <input
          type="text"
          id="explorerPlace"
          placeholder="Enter explorer place..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={searchLocation}>
          Search
        </button>
        <div>
        <div id="searchResults">
          {searchResults.length > 0 ? (
            <div className="cusine-grid">
            
              {searchResults.map((result, index) => (
                <div  className="search-card" key={index}>
                  
                  <img className="search-img"
                    src={result.image}
                    alt={result.FoodItem}
                    
                  /><br></br>
                  <div className="result-details">
                  <strong>Place:</strong> {result.Place} <br />
                  <strong>Food Item:</strong> {result.FoodItem} <br />
                  <strong>Rating:</strong> {result.Rating} <br />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No cusines found.</p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
