import Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../../assets/images/icon-delete.svg";
import { useContext } from "react";
import { GlobalContext } from "../../global-context/GlobalContext";

const Cart = () => {
  const { numberOfProd, setNumberOfProd, setDropdown } =
    useContext(GlobalContext);

  const productPrice = 125;

  const deleteCartItem = () => {
    setNumberOfProd(0);
  };

  const closeCart = () => {
    setDropdown(false);

    console.log("closeCart");
  };
  return (
    <div className="dropdown-container">
      <h3>Cart</h3>
      {numberOfProd === 0 ? (
        <div className="item" id="item">
          <p id="empty">Your cart is empty.</p>
        </div>
      ) : (
        <div className="item" id="item">
          <img className="thumbnail1" src={Thumbnail} alt="Product"></img>
          <p>
            Fall Limited Edition Sneakers
            <br />
            <span>{`$${productPrice}.00`} x </span>
            <span>{numberOfProd}</span>{" "}
            <strong>{`$${productPrice * numberOfProd}`}</strong>
          </p>
          <img
            className="delete"
            src={DeleteIcon}
            alt=""
            onClick={deleteCartItem}
          ></img>
        </div>
      )}
      <button onClick={closeCart} className="checkout-btn">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
