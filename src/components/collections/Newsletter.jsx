import cosmos from "../../assets/images/images/banner/cosmos.jpg";

const Newsletter = () => {
  return (
    <section
      className="newsletter section-p1 section-m1"
      style={{ backgroundImage: `url(${cosmos})` }}
    >
      <div className="newstext">
        <h4>Sign Up For Newsletter</h4>
        <p>
          Get E-mail updates about our latest shop and{" "}
          <span>special offers.</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address"></input>
        <button>Sign Up</button>
      </div>
    </section>
  );
};

export default Newsletter;
