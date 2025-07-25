import React, { useState } from 'react';
import portfolioPreview from '../assets/portfolio-preview.png';
import '../styles.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="gallery">
      <h2>Gallery</h2>

      <div className="gallery-grid">
        <div className="gallery-item" onClick={() => openModal(portfolioPreview)}>
          <img src={portfolioPreview} alt="Portfolio Preview" />
          <p>Portfolio Preview</p>
        </div>
        {/* Add more images the same way if needed */}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
