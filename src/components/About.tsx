import React from "react";
import styles from "./About.module.scss"; // Import SCSS module

const About: React.FC = () => (
  <section className={styles.about}>
    <h2>O nás</h2>
    <p>
      Vitajte v Balon Party! Sme odborníci na balónové dekorácie a organizovanie
      osláv. Našim cieľom je pridať do každého podujatia trochu kúzla a radosti
      pomocou našich krásnych balónov a jedinečných dizajnov.
    </p>
    <p>
      Naša spoločnosť sa zaoberá poskytovaním širokej škály služieb, od
      dekorovania svadieb a narodeninových osláv až po tematické párty. Každý
      projekt sa starostlivo plánuje, aby sme vyhoveli vašim potrebám a
      predstavám. Nechajte nás spríjemniť váš špeciálny deň!
    </p>
  </section>
);

export default About;
