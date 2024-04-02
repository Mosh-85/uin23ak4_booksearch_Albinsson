import React, { useState } from "react";

export default function Searchresult({ searchResults }) {
  console.log(searchResults);
  return (
    <div>
      <h1>Search results...</h1>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
