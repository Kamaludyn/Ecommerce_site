import Zoe from "../../assets/images/images/banner/zoe.png";

const ExploreBanner = () => {
  return (
    <section
      className="banner section-m1"
      id="banner"
      style={{ backgroundImage: `url(${Zoe})` }}
    >
      <h4>Repair Services</h4>
      <h2>
        Up to <span>70% Off</span> - All t-shirts & Accessories
      </h2>
      <button className="normal">Explore More</button>
    </section>
  );
};

export default ExploreBanner;
