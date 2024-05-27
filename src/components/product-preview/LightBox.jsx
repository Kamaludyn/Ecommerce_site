import lbThumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import lbThumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import lbThumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import lbThumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";

const LightBox = ({ selectedImageIndex, images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] =
    useState(selectedImageIndex);

  let lightBoxThumbnails = [
    { id: 1, thumbnail: lbThumbnail1 },
    { id: 2, thumbnail: lbThumbnail2 },
    { id: 3, thumbnail: lbThumbnail3 },
    { id: 4, thumbnail: lbThumbnail4 },
  ];

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log(currentImageIndex);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentImageIndex);
  };

  const selectedImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="lightbox-section flex">
      <div className="lightbox-image-container" id="lightbox-image">
        <svg
          onClick={onClose}
          id="close-lightbox"
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="hsl(26, 100%, 55%)"
            fillRule="evenodd"
          />
        </svg>
        <img
          className="lightboxImg"
          src={images[currentImageIndex]}
          alt="Lightbox Image"
        />
        <div className="arrows">
          <div id="lightbox-arrows" onClick={prevImage}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>

          <div id="lightbox-arrows" onClick={nextImage}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="lightbox-thumbnail-cont">
        {lightBoxThumbnails.map((thumbnail, index) => (
          <div
            key={thumbnail.id}
            className={currentImageIndex === index ? "border" : "false"}
          >
            <img
              src={thumbnail.thumbnail}
              alt={`Thumbnail${index + 1}`}
              id="thumbnail"
              onClick={() => selectedImage(index)}
              style={{ opacity: currentImageIndex === index && "0.4" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LightBox;
