import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import Spinner from "../Spinner";
import AddProductForm from "./categories/AddProductForm";
import ProductPreview from "./ProductPreview";

const Products = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState(false);

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
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <FaEdit
            style={{
              cursor: "pointer",
              marginRight: "10px",
              color: "greenyellow",
            }}
            onClick={() => handleEdit(row)}
          />
          <FaTrash
            style={{ cursor: "pointer", color: "firebrick" }}
            onClick={() => handleDelete(row)}
          />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const addProduct = () => {
    setOpenForm(true);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleDelete = () => {
    console.log("deleted");
  };

  const handleEdit = () => {
    console.log("edit");
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
          onRowClicked={handleRowClick}
          highlightOnHover
          pointerOnHover
          selectableRows
        />
      )}
      {openForm && (
        <AddProductForm categories={categories} setOpenForm={setOpenForm} />
      )}
      {selectedRow && (
        <ProductPreview
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      )}
    </section>
  );
};

export default Products;
