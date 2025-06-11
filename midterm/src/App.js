// src/App.js
import React from "react";
import "./index.css"; // or App.css if you're using that
import { CatProvider } from "./context/CatContext";
import BreedDropdown from "./components/BreedDropdown";
import CatImages from "./components/CatImages";

function App() {
  return (
    <CatProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Cat Breed Explorer
        </h1>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <BreedDropdown />
          <CatImages />
        </div>
      </div>
    </CatProvider>
  );
}

export default App;
