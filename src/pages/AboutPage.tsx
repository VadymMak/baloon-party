import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Slider from "../components/Slider";

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Add top image */}
      <div className={styles.topImageContainer}>
        <img
          src="/images/about-us.jpg"
          alt="About Us"
          className={styles.topImage}
        />
      </div>

      <div className={styles.aboutPage}>
        <h1>Vitajte na stránke Baloon Party!</h1>
        <p>
          Sme tím profesionálov, ktorí sa špecializujú na tvorbu dekorácií a
          fotostien pre vaše najvýznamnejšie chvíle v Trenčíne a celom
          Trenčianskom kraji. Naším poslaním je priniesť do vašich osláv
          jedinečnú atmosféru a farebnosť, ktoré vytvoria krásne spomienky plné
          radosti a šťastia.
        </p>
        {/* More content here */}
        <div className={styles.priceListLink}>
          <Link to="/price-list">
            <FontAwesomeIcon icon={faTag} /> View Our Price List
          </Link>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default AboutPage;
