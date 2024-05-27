import { useContext } from "react";
import { GlobalContext } from "../../global-context/GlobalContext";
import Sneaker from "../collections/Sneaker";
import Spinner from "../Spinner";

const WomenSneakers = () => {
  const { sneakers, loading } = useContext(GlobalContext);

  return (
    <section>
      <div className="pro-container">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            {sneakers
              .filter((product) => product.category === "women")
              .map((sneaker) => (
                <Sneaker sneaker={sneaker} key={sneaker.id} />
              ))}
          </>
        )}
      </div>
    </section>
  );
};

export default WomenSneakers;
