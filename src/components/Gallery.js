
import React, { useState } from 'react';
import './Gallery.css';
/*menu items*/
function Gallery() {
  const menuItems = [
    { id: 1, name: 'SIGNATURE BURGER', category: 'MAINS', image: '/images/gallery/dish1.jpg' },
    { id: 2, name: 'GRILLED SALMON', category: 'SEAFOOD', image: '/images/gallery/dish2.jpg' },
    { id: 3, name: 'TRUFFLE PASTA', category: 'PASTA', image: '/images/gallery/dish3.jpg' },
    { id: 4, name: 'RIBEYE STEAK', category: 'MAINS', image: '/images/gallery/dish4.jpg' },
    { id: 5, name: 'CAESAR SALAD', category: 'SALADS', image: '/images/gallery/dish5.jpg' },
    { id: 6, name: 'LOBSTER ROLL', category: 'SEAFOOD', image: '/images/gallery/dish6.jpg' },
    { id: 7, name: 'CHOCOLATE LAVA', category: 'DESSERTS', image: '/images/gallery/dish7.jpg' },
    { id: 8, name: 'ARTISAN PIZZA', category: 'MAINS', image: '/images/gallery/dish8.jpg' }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">OUR MENU</h2>
        <div className="title-underline"></div>
        <p className="gallery-subtitle">
          HANDCRAFTED DISHES THAT TELL A STORY
        </p>
      </div>

      <div className="gallery-grid">
        {menuItems.map((item, index) => (
          <div 
            className="gallery-item" 
            key={item.id}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(item)}
          >
            <img src={item.image} alt={item.name} />
            <div className="gallery-overlay">
              <span className="item-category">{item.category}</span>
              <h3 className="item-name">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={selectedImage.image} alt={selectedImage.name} />
            <div className="lightbox-info">
              <span className="lightbox-category">{selectedImage.category}</span>
              <h3>{selectedImage.name}</h3>
            </div>
          </div>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
        </div>
      )}
    </section>
  );
}

export default Gallery;