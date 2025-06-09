import React from "react";

function ImageGrid({ photos }) {
  return (
    <div className="image-grid">
      {photos.map((photo) => (
        <div key={photo.id} className="image-card">
          <img
            src={photo.urls.small}
            alt={photo.alt_description}
            className="photo-img"
          />
          <div className="photo-info">
            <p className="photo-author">📸 {photo.user.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
