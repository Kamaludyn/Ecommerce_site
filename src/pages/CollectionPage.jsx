import "./Collections.css";
import Hero from "../components/collections/Hero.jsx";
import FeatureSection from "../components/collections/FeatureSection.jsx";
import FeaturedProduct from "../components/collections/FeaturedProduct.jsx";
import ExploreBanner from "../components/collections/ExploreBanner.jsx";
import NewArrivals from "../components/collections/NewArrivals.jsx";
import AdBanner from "../components/collections/AdBanner.jsx";
import Newsletter from "../components/collections/Newsletter.jsx";

const CollectionPage = () => {
  return (
    <div className="collections">
      <Hero />
      <FeatureSection />
      <FeaturedProduct />
      <ExploreBanner />
      <NewArrivals />
      <AdBanner />
      <Newsletter />
    </div>
  );
};

export default CollectionPage;
