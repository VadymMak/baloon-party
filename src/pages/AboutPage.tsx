import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.scss";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>Vitajte na stránke Baloon Party!</h1>
      <p>
        Sme tím profesionálov, ktorí sa špecializujú na tvorbu dekorácií a
        fotostien pre vaše najvýznamnejšie chvíle v Trenčíne a celom
        Trenčianskom kraji. Naším poslaním je priniesť do vašich osláv jedinečnú
        atmosféru a farebnosť, ktoré vytvoria krásne spomienky plné radosti a
        šťastia.
      </p>
      <p>
        S radosťou prinášame nezabudnuteľné emócie a robíme každú oslavu
        výnimočnou. Či už plánujete svadbu, narodeninovú oslavu, firemnú akciu
        alebo inú špeciálnu udalosť, sme tu na to, aby sme ju premenili na
        jedinečný zážitok. Naša práca nekončí pri dekorácii – venujeme sa aj
        detailom, ktoré dodajú vašej udalosti osobitý šarm.
      </p>
      <p>
        Poskytujeme aj možnosť vytvorenia personalizovaného dizajnu presne podľa
        vašich predstáv. Spolu s vami dokážeme premeniť vaše nápady na realitu a
        zabezpečíme, aby výzdoba dokonale vystihovala váš štýl a atmosféru
        udalosti. Každá naša fotostena je vytvorená s láskou a dôrazom na
        detail, aby každá fotka bola dokonalou spomienkou.
      </p>
      <p>
        Neustále sledujeme nové trendy a inšpirujeme sa svetovými dizajnérmi,
        aby sme vám priniesli tie najmodernejšie a najkreatívnejšie riešenia.
        Pre nás je dôležité, aby ste sa cítili výnimočne a aby každá dekorácia
        vyvolala "wow" efekt.
      </p>
      <p>
        Ďakujeme, že nám zverujete svoje najkrajšie momenty! Sme tu, aby sme vám
        pomohli urobiť vašu oslavu nezabudnuteľnou, plnou radosti, farieb a
        krásy. Tešíme sa na spoluprácu s vami!
      </p>

      {/* Link to the Price List page */}
      <div className={styles.priceListLink}>
        <Link to="/price-list">View Our Price List</Link>
      </div>
    </div>
  );
};

export default AboutPage;
