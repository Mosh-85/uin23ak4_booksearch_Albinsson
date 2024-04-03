import "./App.css";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Bookdetails from "./components/Bookdetails";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [, setSearchParam] = useSearchParams([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moreInfo, setMoreInfo] = useState([]);

  console.log("test", moreInfo);
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
          element={
            <Home
              searchResults={searchResults}
              isLoading={isLoading}
              setMoreInfo={setMoreInfo}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<Bookdetails moreInfo={moreInfo} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
