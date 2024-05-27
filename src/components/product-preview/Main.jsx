import ProductInfo from "./ProductInfo";
import ProductSection from "./ProductSection";

const Main = ({ count, setCount, handleChange }) => {
  return (
    <main className="main-container">
      <ProductSection />
      <ProductInfo
        count={count}
        setCount={setCount}
        handleChange={handleChange}
      />
    </main>
  );
};

export default Main;
