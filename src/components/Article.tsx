import React, { useState } from "react";
import styles from "./Article.module.scss"; // Import SCSS module

interface IArticle {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean; // Boolean to toggle image side
}

const Article: React.FC = () => {
  const [articles] = useState<IArticle[]>([
    {
      title: "Christmas Holiday Celebration",
      description:
        "Naša vianočná oslava v Trenčíne sa niesla v duchu teplého a rodinného prostredia. Vianočné balónové dekorácie dokonale zapadli do sviatočnej atmosféry a pomohli vytvoriť nezabudnuteľnú vianočnú oslavu. V Trenčíne a jeho okolí sa tešíme, že môžeme vytvárať krásne spomienky na výnimočné chvíle.",
      imageSrc: "/images/article_1.jpg",
      imageAlt: "Christmas Celebration",
      imageLeft: false, // Picture on the right side
    },
    {
      title: "Halloween Party Celebration",
      description:
        "Vytvorili sme strašidelnú, no zábavnú atmosféru na Halloweenskej párty v Trenčíne, kde sa hostia tešili na tematickú výzdobu a originálne balónové dekorácie. Naša práca zanechala nezabudnuteľný dojem na všetkých účastníkoch. Sme hrdí, že môžeme prinášať čarovnú atmosféru do Trenčína a celého Trenčianskeho kraja.",
      imageSrc: "/images/article_1.jpg",
      imageAlt: "Halloween Party",
      imageLeft: true, // Picture on the left side
    },
  ]);

  return (
    <section className={styles.articles}>
      <h1 className={styles.sectionTitle}>
        Recent Celebrations and Events We've Decorated
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
