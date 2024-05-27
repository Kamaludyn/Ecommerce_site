import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const Sneaker = ({ sneaker }) => {
  const navigate = useNavigate();

  return (
    <div className="pro" onClick={() => navigate("/Container")}>
      <img src={sneaker.image} alt=""></img>
      <div className="des">
        <span>{sneaker.brand}</span>
        <h5>{sneaker.name}</h5>
        <div className="star">
          <FaStar className="icon" />
          <FaStar className="icon" />
          <FaStar className="icon" />
          <FaStar className="icon" />
          <FaStar className="icon" />
        </div>
        <h4>${sneaker.price}</h4>
      </div>
      <Link to="#" className="cart">
        <FaShoppingCart
          className="shopping-cart"
          style={{ fontSize: 18, marginTop: "10px" }}
        />
      </Link>
    </div>
  );
};

export default Sneaker;
