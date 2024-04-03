import React from "react";

export default function BookDetails({ more }) {
  return (
    <>
      <div>Book Details for book ID: {}</div>
      <article>
        <h2>{more?.title || "No title available"}</h2>
      </article>
    </>
  );
}
