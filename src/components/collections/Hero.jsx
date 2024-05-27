import heroImage2 from "../../assets/images/images/hero/hero2.webp";

const Hero = () => {
  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${heroImage2})` }}
    >
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & up to 70% off!</p>
      <button>Shop Now</button>
    </section>
  );
};

export default Hero;
