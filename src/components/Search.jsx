import React, { useState, useEffect } from "react";

export default function Search({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() !== "") {
        try {
          const response = await fetch(
            `https://openlibrary.org/search.json?title=${encodeURIComponent(
              searchTerm
            )}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setSearchResults(data.docs);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Trigger search when form is submitted
    setSearchTerm(event.target.search.value);
  };

  useEffect(() => {
    // Pass searchResults to the parent component if onSearchResults is a function
    if (typeof onSearchResults === "function") {
      onSearchResults(searchResults);
    }
  }, [searchResults, onSearchResults]);

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for books:</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter book title"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
