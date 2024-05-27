import Hero1 from "../../assets/images/images/New Arrivals/women/nike/airmax5.webp";
import Hero2 from "../../assets/images/images/hero/Karhu_Flow_State.jpg";

const WomenHero = () => {
  return (
    <>
      <h2 className="h2">Women</h2>
      <div className="hero-images">
        <div>
          <img className="img1" src={Hero2} alt="" />
        </div>
        <div>
          <img className="img2" src={Hero1} alt="" />
        </div>
      </div>
    </>
  );
};

export default WomenHero;
