import React from "react";

export default function BookDetails({ moreInfo }) {
  return (
    <>
      <article>
        <h2>{moreInfo?.title || "No title available"}</h2>
        <ul>
          <li>First Published: {moreInfo?.first_publish_year || "Unknown"}</li>
          <li>Author: {moreInfo?.author_name?.join(", ") || "Unknown"}</li>
          <li>Avg.rating: {moreInfo?.ratings_average || "N/A"}</li>
        </ul>
        <img
          className="cardimg"
          src={`https://covers.openlibrary.org/b/isbn/${moreInfo?.isbn?.[0]}-L.jpg`}
          alt={moreInfo?.title + ", Cover art"}
        />
      </article>
    </>
  );
}
