import cuteGirl from "../../assets/images/images/banner/cutest-swag.png";
import springSummerbBanner from "../../assets/images/images/banner/spring-summer.png";
import SpeedGT from "../../assets/images/images/banner/Moab_Speed_GTX_White.jpg";
import crocsBanner from "../../assets/images/images/banner/crocs.jpg";
import slidesBanner from "../../assets/images/images/banner/slides.jpg";

const AdBanner = () => {
  const bannerOne = [
    {
      id: 1,
      bgImg: cuteGirl,
      h4: "crazy deals",
      h2: "Buy one get one free",
      span: "The best classic sneakers",
      button: "Learn More",
    },
    {
      id: 2,
      bgImg: springSummerbBanner,
      h4: "spring/summer",
      h2: "Upcoming season",
      span: "The best classic sneakers",
      button: "Collections",
    },
  ];
  const bannerTwo = [
    {
      id: 1,
      bgimg: SpeedGT,
      h2: "SEASONAL SALE",
      h3: "Winter Collection -50% OFF",
    },
    {
      id: 2,
      bgimg: crocsBanner,
      h2: "NEW CROCS COLLECTION",
      h3: "Spring / Summer 2024",
    },
    { id: 1, bgimg: slidesBanner, h2: "SLIDES", h3: "New Trendy Prints" },
  ];
  return (
    <>
      <section className="sm-banner">
        {bannerOne.map((item, index) => (
          <div
            className="banner-box"
            key={index}
            style={{ backgroundImage: `url(${item.bgImg})` }}
          >
            <h4>{item.h4}</h4>
            <h2>{item.h2}</h2>
            <span>{item.span}</span>
            <button className="white">{item.button}</button>
          </div>
        ))}
      </section>

      <section className="banner3">
        {bannerTwo.map((banner, index) => (
          <div
            key={index}
            className="banner-box"
            style={{ backgroundImage: `url(${banner.bgimg})` }}
          >
            <h2>{banner.h2}</h2>
            <h3>{banner.h3}</h3>
          </div>
        ))}
      </section>
    </>
  );
};

export default AdBanner;
