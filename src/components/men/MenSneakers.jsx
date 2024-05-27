import { useContext } from "react";
import { GlobalContext } from "../../global-context/GlobalContext";
import Spinner from "../Spinner";
import Sneaker from "../collections/Sneaker";
const MenSneakers = () => {
  const { sneakers, loading } = useContext(GlobalContext);

  return (
    <section>
      <div className="pro-container">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            {sneakers
              .filter((products) => products.category === "men")
              .map((sneaker) => (
                <Sneaker sneaker={sneaker} key={sneaker.id} />
              ))}
          </>
        )}
      </div>
    </section>
  );
};

export default MenSneakers;
