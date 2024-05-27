import hero1 from "../../assets/images/images/hero/ESB.jpg";
import hero2 from "../../assets/images/images/hero/adidas.jpg";
import hero3 from "../../assets/images/images/hero/AIR_JORDAN.png";

const MenHero = () => {
  return (
    <>
      <h2 className="h2-men">Men</h2>
      <div className="hero-images-men">
        <img loading="lazy" src={hero1} alt="" className="hero1" />
        <div className="hero-imgs-side">
          <img loading="lazy" src={hero2} alt="" />
          <img loading="lazy" src={hero3} alt="" />
        </div>
      </div>
    </>
  );
};

export default MenHero;
