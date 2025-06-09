import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import NoData from "./components/NoData";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [noData, setNoData] = useState(false);

  const handleSearch = async (searchTerm) => {
    setQuery(searchTerm);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          searchTerm
        )}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.results.length === 0) {
        setNoData(true);
        setPhotos([]);
      } else {
        setNoData(false);
        setPhotos(data.results);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setNoData(true);
      setPhotos([]);
    }
  };

  return (
    <div className="App">
      <h1>Unsplash Photo Search</h1>
      <SearchBar onSearch={handleSearch} />
      {noData ? <NoData /> : <ImageGrid photos={photos} />}
    </div>
  );
}

export default App;
