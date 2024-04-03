import React, { useState, useEffect } from "react";

export default function Search({
  onSearchResults,
  searchResults,
  setSearchResults,
  setSearchParam,
}) {
  const [search, setSearch] = useState("James Bond");

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim() !== "" && search.length >= 3) {
        try {
          const response = await fetch(
            `https://openlibrary.org/search.json?title=${encodeURIComponent(
              search
            )}`
          );

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
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    setSearchParam(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(search);
  };

  useEffect(() => {
    if (typeof onSearchResults === "function") {
      onSearchResults(searchResults);
    }
  }, [searchResults, onSearchResults]);

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Book search: </label>
        <input
          type="text"
          id="search"
          placeholder="Search here..."
          value={search}
          onChange={handleChange}
        />
        <input className="button" type="submit" value={"Search"} />
      </form>
    </div>
  );
}
