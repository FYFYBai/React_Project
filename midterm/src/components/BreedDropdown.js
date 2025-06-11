// src/components/BreedDropdown.js

// This component displays a dropdown list of all available cat breeds.
// When the user selects a breed, it updates the selected breed in context.

import React, { useContext } from "react";
import { CatContext } from "../context/CatContext";

function BreedDropdown() {
  const { breeds, selectedBreedId, setSelectedBreedId } =
    useContext(CatContext);

  return (
    <div className="mb-6">
      <label
        htmlFor="breed-select"
        className="block mb-2 text-lg font-medium text-gray-700"
      >
        Select a Cat Breed:
      </label>
      <select
        id="breed-select"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={selectedBreedId}
        onChange={(e) => setSelectedBreedId(e.target.value)}
      >
        <option value="">-- Choose a breed --</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BreedDropdown;
