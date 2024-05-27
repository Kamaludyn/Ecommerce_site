import { useEffect, useState } from "react";
import AddProductForm from "./AddProductForm";
import axios from "axios";
import Spinner from "../../components/Spinner";

const Categories = ({ categories, setCategories }) => {
  const [openForm, setOpenForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const closeProductForm = () => {
    setOpenForm(false);
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://mern-ecommerce-backend-bjcv.onrender.com/api/categories"
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mern-ecommerce-backend-bjcv.onrender.com/api/categories",
        { name: newCategoryName }
      );
      console.log("New category created:", response.data.category);

      fetchCategories();

      setNewCategoryName("");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <>
      <section className="main category">
        <div className="main-category">
          <div className="main-title">
            <h1>Categories</h1>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="main-cards">
              {categories.map((category) => (
                <div className="card-container" key={category._id}>
                  <div className="card">
                    <div className="inner-card">
                      <h3>{category.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {openForm && (
            <AddProductForm
              categories={categories}
              closeProductForm={closeProductForm}
            />
          )}
        </div>
        <form onSubmit={createCategory}>
          <input
            type="text"
            className="category-input"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Enter category name"
          />
          <button className="add-category-btn">Add Category</button>
        </form>
      </section>
    </>
  );
};

export default Categories;
