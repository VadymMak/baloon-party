import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import styles from "./Article.module.scss";

interface IArticle {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
}

const Article: React.FC = () => {
  const [articles] = useState<IArticle[]>([
    {
      title: "Vianočná sviatočná oslava",
      description:
        "Naša vianočná oslava v Trenčíne sa niesla v duchu teplého a rodinného prostredia. Vianočné balónové dekorácie dokonale zapadli do sviatočnej atmosféry a pomohli vytvoriť nezabudnuteľnú vianočnú oslavu. V Trenčíne a jeho okolí sa tešíme, že môžeme vytvárať krásne spomienky na výnimočné chvíle.",
      imageSrc: "/images/article_1.jpg",
      imageAlt: "Christmas Celebration",
      imageLeft: false,
    },
    {
      title: "Halloweenska párty oslava",
      description:
        "Vytvorili sme strašidelnú, no zábavnú atmosféru na Halloweenskej párty v Trenčíne, kde sa hostia tešili na tematickú výzdobu a originálne balónové dekorácie. Naša práca zanechala nezabudnuteľný dojem na všetkých účastníkoch. Sme hrdí, že môžeme prinášať čarovnú atmosféru do Trenčína a celého Trenčianskeho kraja.",
      imageSrc: "/images/article_2.jpg",
      imageAlt: "Halloween Party",
      imageLeft: true,
    },
  ]);

  return (
    <section className={styles.articles}>
      <h1 className={styles.sectionTitle}>
        Nedávne oslavy a podujatia, ktoré sme dekorovali
      </h1>
      {articles.map((article, index) => (
        <div
          key={index}
          className={`${styles.article} ${
            article.imageLeft ? styles.imageLeft : styles.imageRight
          }`}
        >
          <div className={styles.textContainer}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <div className={styles.priceListLink}>
              <Link to="/price-list">
                <FontAwesomeIcon icon={faTag} /> Zobraziť náš cenník
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={article.imageSrc}
              alt={article.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Article;
