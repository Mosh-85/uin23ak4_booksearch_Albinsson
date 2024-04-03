import React, { useState } from "react";
import Article from "./Bookcard";

export default function Searchresult({
  searchResults,
  isLoading,
  setMoreInfo,
}) {
  const [page, setPage] = useState(1);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  return (
    <section>
      <h3>Search results...</h3>
      {isLoading && <p className="load"></p>}
      {searchResults.slice(0, 24 * page).map((book, index) => (
        <Article key={index} book={book} setMoreInfo={setMoreInfo} />
      ))}
      {searchResults.length > 24 * page && (
        <button className="showmore" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </section>
  );
}
