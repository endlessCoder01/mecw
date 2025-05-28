import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import img1 from '../images/teams/ChEvV4oeC55oObht7vTuCuR7mdPft2eoQMttBgUg.jpg';
import img2 from '../images/teams/Climate-Migration-Stakeholder-Meeting-crop-1268x885.jpg';
import img3 from '../images/teams/Fqto_rNXoBMnB-x.jpg';
import img4 from '../images/teams/IMG-20201203-WA0025.jpg';
import img5 from '../images/teams/IMG-20210408-WA0149.jpg';
import img6 from '../images/teams/IMG-20221102-WA0001.jpg';
import img7 from '../images/teams/Imagem1-768x387.jpg';
import img8 from '../images/teams/OIP (1).jpg';
import img9 from '../images/teams/OIP (2).jpg';
import img10 from '../images/teams/OIP (3).jpg';
import img11 from '../images/teams/OIP (4).jpg';
import img12 from '../images/teams/OIP (5).jpg';
import img13 from '../images/teams/OIP.jpg';

const images = [
  { id: 1, src: img1, alt: 'Team Image 1' },
  { id: 2, src: img2, alt: 'Team Image 2' },
  { id: 3, src: img3, alt: 'Team Image 3' },
  { id: 4, src: img4, alt: 'Team Image 4' },
  { id: 5, src: img5, alt: 'Team Image 5' },
  { id: 6, src: img6, alt: 'Team Image 6' },
  { id: 7, src: img7, alt: 'Team Image 7' },
  { id: 8, src: img8, alt: 'Team Image 8' },
  { id: 9, src: img9, alt: 'Team Image 9' },
  { id: 10, src: img10, alt: 'Team Image 10' },
  { id: 11, src: img11, alt: 'Team Image 11' },
  { id: 12, src: img12, alt: 'Team Image 12' },
  { id: 13, src: img13, alt: 'Team Image 13' },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="gallery-page">
            <button onClick={handleBack} className="back-button">Back</button>
      <h1 className="header">Image Gallery</h1>
      <div className="gallery-container">
        {images.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => openModal(image.src)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Full Size" className="modal-image" />
        </div>
      )}

      <style jsx>{`
        .gallery-page {
          padding: 20px;
          background-color: #f8f9fa;
        }
        .back-button {
          background: #007bff;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .back-button:hover {
          background: #0056b3;
        }
        .header {
          position: sticky;
          top: 0;
        background: grey;
          padding: 10px 0;
          z-index: 10;
          text-align: center;
          font-size: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .gallery-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .gallery-item {
          flex: 1 1 calc(33.333% - 10px);
          box-sizing: border-box;
          margin-bottom: 10px;
          cursor: pointer; /* Indicate clickable item */
        }
        .gallery-item img {
          width: 100%;
          height: 200px; /* Fixed height for uniformity */
          object-fit: cover; /* Maintain aspect ratio */
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 768px) {
          .gallery-item {
            flex: 1 1 calc(50% - 10px);
          }
        }
        @media (max-width: 480px) {
          .gallery-item {
            flex: 1 1 100%;
          }
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-image {
          max-width: 90%;
          max-height: 90%;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;