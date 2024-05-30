const ProductPreview = ({ selectedRow, setSelectedRow }) => {
  const closePreview = () => {
    setSelectedRow(false);
  };
  return (
    <section className="display-container">
      <div className="product-preview">
        <h2>Product Preview</h2>
        <img src={selectedRow.image.secure_url} alt="Product Image" />
        <p>
          <strong>Product Name: </strong>
          {selectedRow.name}
        </p>
        <p>
          <strong>Product Description: </strong> {selectedRow.description}
        </p>
        <p>
          <strong>Product Price: </strong> {selectedRow.price}
        </p>
        <p>
          <strong>Count In Stock: </strong> {selectedRow.countInStock}
        </p>
        <svg
          className="close-form"
          width="14"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
          onClick={closePreview}
        >
          <g transform="scale(1.5)">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#b22222"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default ProductPreview;
