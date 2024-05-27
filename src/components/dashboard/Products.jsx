import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Spinner from "../Spinner";
import AddProductForm from "./categories/AddProductForm";

const Products = ({ categories, setCategories }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://mern-ecommerce-backend-bjcv.onrender.com/api/products"
        );
        setProducts(response.data.products);
      } catch (error) {
        if (error.response) {
          console.error("Error response:", error.response);
        } else if (error.request) {
          console.error("Error request:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          className="table-img"
          src={row.image.secure_url}
          alt={row.name}
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
          onError={(e) => {
            e.target.src = "default-image-url.png";
          }}
        />
      ),
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Count",
      selector: (row) => row.countInStock,
      sortable: true,
    },
  ];

  const addProduct = () => {
    setOpenForm(true);
  };

  return (
    <section className="products-section">
      <header>
        <h2>Products</h2>
        <button onClick={addProduct}>Add Product</button>
      </header>
      {loading ? (
        <Spinner />
      ) : (
        <DataTable
          className="data-table"
          //   title="Products"
          columns={columns}
          data={products}
          direction="auto"
          fixedHeaderScrollHeight="300px"
          pagination
          responsive
          subHeaderAlign="right"
          subHeaderWrap
        />
      )}
      {openForm && (
        <AddProductForm categories={categories} setOpenForm={setOpenForm} />
      )}
    </section>
  );
};

export default Products;
