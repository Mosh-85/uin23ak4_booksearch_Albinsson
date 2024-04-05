import React from "react";

export default function BookDetails({ moreInfo }) {
  console.log(moreInfo);
  return (
    <>
      <article>
        <h2>{moreInfo?.title || "No title available"}</h2>
        <ul>
          {Object.entries(moreInfo || {}).map(([key, value], index) => (
            <li key={index}>
              {key}: {Array.isArray(value) ? value.join(", ") : value}
            </li>
          ))}
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

/* Har ikke laget noen css for denne siden, men skriver ut det som er i moreInfo-objektet. */
