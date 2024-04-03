import "./App.css";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header
        setSearchResults={setSearchResults}
        setSearchParam={setSearchParam}
        setIsLoading={setIsLoading}
      />
      <Routes>
        <Route
          path="/"
          element={<Home searchResults={searchResults} isLoading={isLoading} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
