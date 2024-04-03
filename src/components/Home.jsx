import React from "react";
import Searchresult from "./Searchresult";

export default function Home({ searchResults }) {
  return (
    <>
      <main className="home">
        <h1>Book Search</h1>
        <Searchresult searchResults={searchResults} />
      </main>
    </>
  );
}
