import axios from "axios";

const AddProductForm = ({ setOpenForm, categories }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const productForm = e.target;

    // validate file
    // const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];
    // const file = productForm.querySelector("[name = product_image]").files[0];

    // // Check file type
    // if (allowedTypes.indexOf(file.type) == -1) {
    //   return toast.error("File type is invalid");
    // }

    const formData = new FormData(productForm);

    try {
      const response = await axios.post(
        "https://mern-ecommerce-backend-bjcv.onrender.com/api/products",
        formData
      );
      console.log("Product created:", response.data);
      closeProductForm();
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const closeProductForm = () => {
    setOpenForm(false);
  };

  return (
    <section className="display-container">
      <form className="add-prod-form" onSubmit={handleSubmit}>
        <h3>Add Product</h3>
        <label htmlFor="product_image">Product Image</label>
        <input
          type="file"
          name="product_image"
          id="product_image"
          accept="image/*"
          required
        />
        <label htmlFor="name">Product Name</label>
        <input type="text" name="name" placeholder="Product Name" required />
        <label htmlFor="description">Product Description</label>
        <textarea
          name="description"
          placeholder="Product Description"
          required
        ></textarea>
        <label htmlFor="price">Product Price</label>
        <input type="text" name="price" placeholder="Product Price" required />
        <select name="category" required>
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <label htmlFor="countInStock">Count In Stock</label>
        <input
          type="number"
          name="countInStock"
          placeholder="Count In Stock"
          required
        />
        <label htmlFor="isFeatured">Featured</label>
        <div className="radio-inputs">
          <div>Yes</div>
          <input type="radio" name="yes" />
          <div>No</div>
          <input type="radio" name="no" />
        </div>
        <button>Add</button>
        <svg
          className="close-form"
          width="14"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
          onClick={closeProductForm}
        >
          <g transform="scale(1.5)">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#b22222"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </form>
    </section>
  );
};

export default AddProductForm;
