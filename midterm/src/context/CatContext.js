// src/context/CatContext.js

// This file sets up global state management using React Context.
// It fetches cat breeds, handles breed selection, and fetches breed-specific images.

import React, { createContext, useState, useEffect } from "react";

export const CatContext = createContext();

export const CatProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreedId, setSelectedBreedId] = useState("");
  const [images, setImages] = useState([]);
  const [breedDescription, setBreedDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch breed list when the app loads
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await res.json();
        setBreeds(data);
      } catch (err) {
        setError("Failed to load breeds.");
      }
    };
    fetchBreeds();
  }, []);

  // Fetch images for the selected breed
  useEffect(() => {
    if (!selectedBreedId) return;

    const fetchImages = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreedId}&limit=6`
        );
        const data = await res.json();
        setImages(data);

        const breed = breeds.find((b) => b.id === selectedBreedId);
        setBreedDescription(breed?.description || "");
      } catch (err) {
        setError("Failed to fetch images.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [selectedBreedId, breeds]);

  return (
    <CatContext.Provider
      value={{
        breeds,
        selectedBreedId,
        setSelectedBreedId,
        images,
        breedDescription,
        loading,
        error,
      }}
    >
      {children}
    </CatContext.Provider>
  );
};
