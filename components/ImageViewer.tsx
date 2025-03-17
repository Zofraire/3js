// components/ImageViewer.tsx

import React from 'react';

interface ImageViewerProps {
  imageUrl: string;
  alt: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, alt }) => {
  return (
    <div className="image-container">
      <img 
        src={imageUrl} 
        alt={alt} 
        className="custom-image" // Применение кастомного класса
      />
    </div>
  );
};

export default ImageViewer;
