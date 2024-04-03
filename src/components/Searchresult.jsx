import React from "react";
import Article from "./Bookcard";

export default function Searchresult({ searchResults }) {
  {
    searchResults.map((result, index) => <li key={index}>{result.title}</li>);
  }

  return (
    <section>
      <h1>Search results...</h1>
      {searchResults.slice(0, 50).map((book, index) => (
        <Article key={index} book={book} />
      ))}
    </section>
  );
}
