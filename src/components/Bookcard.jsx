import React from "react";
import { Link } from "react-router-dom";

export default function Article({ book, setMoreInfo }) {
  function handleClick(clickedBook) {
    setMoreInfo(clickedBook);
  }

  return (
    <article className="article">
      <h2>{book?.title || "No title available"}</h2>
      <ul className="cardul">
        <li>First Published: {book?.first_publish_year || "Unknown"}</li>
        <li>Author: {book?.author_name?.join(", ") || "Unknown"}</li>
        <li>Avg.rating: {book?.ratings_average || "N/A"}</li>
      </ul>

      <ul className="cardli">
        <Link
          to={`/book/${book?.title.replace(/\s+/g, "-")}`}
          className="linkButton"
          onClick={() => handleClick(book)}
        >
          Details
        </Link>
        <a
          className="linkButton"
          href={`https://www.amazon.com/s?k=${book?.isbn?.[0] || ""}`}
        >
          Amazon
        </a>
      </ul>
    </article>
  );
}
