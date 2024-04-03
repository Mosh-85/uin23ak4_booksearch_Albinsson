import React from "react";

export default function Article({ book }) {
  return (
    <article className="article">
      <h2>{book?.title || "No title available"}</h2>
      <p className="publish">
        First publish year: {book?.first_publish_year || "Unknown"}
      </p>
      <p className="author">
        Author: {book?.author_name?.join(", ") || "Unknown"}
      </p>
      <p className="avg">Avg.rating: {book?.ratings_average || "N/A"}</p>
      <a
        className="linkButton"
        href={`https://www.amazon.com/s?k=${book?.isbn?.[0] || ""}`}
      >
        Amazon
      </a>
    </article>
  );
}
