// src/components/CatImages.js

// This component displays the images and description of the selected cat breed.
// It also shows a loading message while images are being fetched,
// and displays error messages if the fetch fails.

import React, { useContext } from "react";
import { CatContext } from "../context/CatContext";

function CatImages() {
  const { images, breedDescription, loading, error, selectedBreedId } =
    useContext(CatContext);

  if (!selectedBreedId) return null;

  return (
    <div className="mt-6">
      {loading && (
        <p className="text-blue-600 font-semibold">Loading images...</p>
      )}
      {error && <p className="text-red-500 font-semibold">{error}</p>}
      {!loading && !error && (
        <>
          <p className="mb-4 text-gray-700">{breedDescription}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((imgObj) => (
              <img
                key={imgObj.id}
                src={imgObj.url}
                alt="cat"
                className="rounded shadow-md w-full h-auto object-cover"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CatImages;
