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
          Vitajte na stránke Baloon Party00! Sme profesionáli v tvorbe dekorácií
          a fotostien pre vaše výnimočné chvíle v Trenčíne a celom Trenčianskom
          kraji. Naším cieľom je priniesť do vášho sviatočného dňa jedinečnú
          atmosféru a farebnú krásu, ktorá zanechá spomienky plné radosti a
          šťastia.
        </p>
        <p>
          Milujeme prinášať svetlé emócie a robiť oslavy nezabudnuteľnými. Či už
          plánujete svadbu, narodeninovú oslavu, firemný večierok alebo inú
          špeciálnu udalosť, postaráme sa o to, aby bola výnimočná.
        </p>
        <p>
          Ponúkame tiež možnosť vytvoriť individuálny dizajn presne podľa vašich
          predstáv. Spolu s vami premeníme vaše nápady na skutočnosť a
          zabezpečíme, aby výzdoba dokonale ladila s vaším štýlom a charakterom
          udalosti.
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
