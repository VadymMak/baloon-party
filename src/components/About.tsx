import React from "react";
import styles from "./About.module.scss"; // Import SCSS module

const About: React.FC = () => (
  <section className={styles.about}>
    <h2>O nás</h2>
    <p>
      Vitajte na stránke Baloon Party00! Sme profesionáli v tvorbe dekorácií a
      fotostien pre vaše výnimočné chvíle v Trenčíne a celom Trenčianskom kraji.
      Naším cieľom je priniesť do vášho sviatočného dňa jedinečnú atmosféru a
      farebnú krásu, ktorá zanechá spomienky plné radosti a šťastia.
    </p>
    <p>
      Milujeme prinášať svetlé emócie a robiť oslavy nezabudnuteľnými. Či už
      plánujete svadbu, narodeninovú oslavu, firemný večierok alebo inú
      špeciálnu udalosť, postaráme sa o to, aby bola výnimočná.
    </p>
    <p>
      Ponúkame tiež možnosť vytvoriť individuálny dizajn presne podľa vašich
      predstáv. Spolu s vami premeníme vaše nápady na skutočnosť a zabezpečíme,
      aby výzdoba dokonale ladila s vaším štýlom a charakterom udalosti.
    </p>
    <p>Ďakujeme, že nám dôverujete s vašimi najkrajšími momentmi!</p>
  </section>
);

export default About;
