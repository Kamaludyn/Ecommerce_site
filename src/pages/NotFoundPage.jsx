import "./NotFoundPage.css";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="section">
      <FaExclamationTriangle className="exclamation-icon" />
      <h1 className="nf-p">404 Not Found</h1>
      <p className="nf-p">This page does not exist</p>
      <Link to="/" className="go-back">
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
