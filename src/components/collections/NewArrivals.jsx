import { useContext } from "react";
import { GlobalContext } from "../../global-context/GlobalContext";
import Sneaker from "./Sneaker";
import Spinner from "../Spinner";

const NewArrivals = () => {
  const { sneakers, loading } = useContext(GlobalContext);

  return (
    <section className="product1">
      <h2>New Arrivals</h2>
      <p>Summer Collection New Morden Design</p>
      <div className="pro-container">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            {sneakers
              .filter((product) => product.date === 2024)
              .map((sneaker, index) => (
                <Sneaker sneaker={sneaker} key={sneaker.id} />
              ))}
          </>
        )}
      </div>
      <button className="load-more-btn">Load More</button>
    </section>
  );
};

export default NewArrivals;
