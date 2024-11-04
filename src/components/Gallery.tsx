// src/components/Gallery.tsx
import React from "react";

const Gallery: React.FC = () => (
  <section className="gallery">
    <h2>Our Work</h2>
    <div className="gallery-grid">
      <img src="/path/to/image1.jpg" alt="Event 1" />
      <img src="/path/to/image2.jpg" alt="Event 2" />
      <img src="/path/to/image3.jpg" alt="Event 3" />
    </div>
  </section>
);

export default Gallery;
