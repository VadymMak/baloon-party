import React from "react";
import styles from "./Banner.module.scss";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <p>
        🎈 Мы предлагаем наполненные гелием воздушные шары по цене 5 евро за
        штуку 🎈
      </p>
      <p>От одного до любого количества! Позвоните нам: +421 123 456 789</p>
    </div>
  );
};

export default Banner;
