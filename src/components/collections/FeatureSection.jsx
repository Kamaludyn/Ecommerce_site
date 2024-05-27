import freeShipping from "../../assets/images/images/features/free-shipping.jpg";
import onlineOrder from "../../assets/images/images/features/online-order.jpg";
import saveMoney from "../../assets/images/images/features/save-money.jpg";
import promotions from "../../assets/images/images/features/sales-promotion.jpg";
import happySell from "../../assets/images/images/features/happy-sell.jpg";
import support from "../../assets/images/images/features/24-hours.jpg";

const FeatureSection = () => {
  const items = [
    { title: "Free Shipping", image: freeShipping },
    { title: "Online Order", image: onlineOrder },
    { title: "Save Money", image: saveMoney },
    { title: "Promotions", image: promotions },
    { title: "Happy sell", image: happySell },
    { title: "24/7 Support", image: support },
  ];

  return (
    <section className="feature section-p1" id="feature">
      {items.map((item, index) => (
        <div key={index} className="fe-box">
          <img src={item.image} alt="" />
          <h6>{item.title}</h6>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;
