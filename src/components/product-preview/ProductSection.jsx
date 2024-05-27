import prevIcon from "../../assets/images/icon-previous.svg";
import nextIcon from "../../assets/images/icon-next.svg";
import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";
import productImage1 from "../../assets/images/image-product-1.jpg";
import productImage2 from "../../assets/images/image-product-2.jpg";
import productImage3 from "../../assets/images/image-product-3.jpg";
import productImage4 from "../../assets/images/image-product-4.jpg";
import LightBox from "./LightBox.jsx";
import { useState } from "react";

const ProductSection = () => {
  const [openLBox, setOpenLightBox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] =
    useState(selectedImageIndex);
  const [border, setBorder] = useState(false);

  const openLightBox = (index) => {
    setOpenLightBox(true);
    setSelectedImageIndex(index);
    setBorder(true);
    console.log("lol");
  };

  const productImages = [
    { id: 1, thumbnail: thumbnail1, prodImg: productImage1 },
    { id: 2, thumbnail: thumbnail2, prodImg: productImage2 },
    { id: 3, thumbnail: thumbnail3, prodImg: productImage3 },
    { id: 4, thumbnail: thumbnail4, prodImg: productImage4 },
  ];

  const images = productImages.map((image) => image.prodImg);
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

  return (
    <>
      <section className="product-section">
        <div
          className="product"
          id="product-image"
          style={{
            backgroundImage: `url(${
              images[currentImageIndex] || productImage1
            })`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="arrows">
            <img
              onClick={prevImage}
              id="lightbox-arrows"
              className="previous arrow"
              src={prevIcon}
              alt=""
            ></img>
            <img
              onClick={nextImage}
              id="lightbox-arrows"
              className="next arrow"
              src={nextIcon}
              alt=""
            ></img>
          </div>
        </div>
        <div className="product-thumbnail">
          {productImages.map((image, index) => (
            <div
              key={image.id}
              className={selectedImageIndex === index ? "border" : ""}
            >
              <img
                onClick={() => openLightBox(index)}
                src={image.thumbnail}
                alt="thumbnail"
                style={{ opacity: selectedImageIndex === index && "0.3" }}
              ></img>
            </div>
          ))}
        </div>
      </section>
      {openLBox && (
        <LightBox
          selectedImageIndex={selectedImageIndex}
          images={images}
          prevImage={prevImage}
          nextImage={nextImage}
          onClose={() => setOpenLightBox(false)}
        />
      )}
    </>
  );
};

export default ProductSection;
