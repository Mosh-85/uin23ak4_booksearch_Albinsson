import React from "react";
import { Link } from "react-router-dom";

export default function Article({ book, setMoreInfo }) {
  function handleClick() {
    setMoreInfo(book.id);
  }

  return (
    <article className="article">
      <h2>{book?.title || "No title available"}</h2>
      <ul className="cardul">
        <li>First Published: {book?.first_publish_year || "Unknown"}</li>
        <li>Author: {book?.author_name?.join(", ") || "Unknown"}</li>
        <li>Avg.rating: {book?.ratings_average || "N/A"}</li>
      </ul>
      <img
        className="cardimg"
        src={`https://covers.openlibrary.org/b/isbn/${book?.isbn?.[0]}-M.jpg`}
        alt={book?.title + ", Cover art"}
      />
      <ul className="cardli">
        <Link
          to={`/book/${book?.id}`}
          className="linkButton"
          onClick={() => handleClick(book?.id)}
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
