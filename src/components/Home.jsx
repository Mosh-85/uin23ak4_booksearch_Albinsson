import React from "react";
import Searchresult from "./Searchresult";

export default function Home({ searchResults, isLoading }) {
  return (
    <>
      <main className="home">
        <h1>Book Search</h1>
        <Searchresult searchResults={searchResults} isLoading={isLoading} />
      </main>
    </>
  );
}
