import React, { useState } from "react";
import Searchresult from "./Searchresult";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <article className="home">
        <h1>Book Search</h1>
        <Searchresult searchResults={searchResults} />
      </article>
    </>
  );
}
