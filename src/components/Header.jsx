import React, { useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header({
  setSearchResults,
  setSearchParam,
  setIsLoading,
}) {
  return (
    <header>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Search
        setSearchResults={setSearchResults}
        setSearchParam={setSearchParam}
        setIsLoading={setIsLoading}
      />
    </header>
  );
}
