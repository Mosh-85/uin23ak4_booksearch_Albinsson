import React from "react";
import Article from "./Bookcard";

export default function Searchresult({ searchResults, isLoading }) {
  {
    searchResults.map((result, index) => <li key={index}>{result.title}</li>);
  }

  console.log(isLoading);

  return (
    <section>
      <h1>Search results...</h1>
      {isLoading && <p className="load"></p>}
      {searchResults.slice(0, 50).map((book, index) => (
        <Article key={index} book={book} />
      ))}
    </section>
  );
}
