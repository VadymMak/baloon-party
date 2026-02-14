import React from "react";
import styles from "./Footer.module.scss";
import instagramImg from "../assets/icons/instagram.jpg";
import telegramImg from "../assets/icons/telegram.jpg";
import whatsappImg from "../assets/icons/whatsapp.jpg";
import facebookImg from "../assets/icons/facebook.jpg";
import tiktokIcon from "../assets/icons/tiktok.jpg";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      {/* Contact row */}
      <div className={styles.contactRow}>
        <a href="mailto:baloon-party00@gmail.com" className={styles.contactLink}>
          ✉ baloon-party00@gmail.com
        </a>
        <a href="tel:+421950266320" className={styles.contactLink}>
          ☎ +421 (95) 026-63-20
        </a>
      </div>

      {/* Social icons */}
      <div className={styles.socials}>
        <a href="https://www.instagram.com/baloon_party00" target="_blank" rel="noopener noreferrer">
          <img src={instagramImg} alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com/@baloon.party00" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
        </a>
        <a href="https://t.me/valeriiamukhina" target="_blank" rel="noopener noreferrer">
          <img src={telegramImg} alt="Telegram" />
        </a>
        <a href="https://wa.me/421950266320" target="_blank" rel="noopener noreferrer">
          <img src={whatsappImg} alt="WhatsApp" />
        </a>
        <a href="https://www.facebook.com/share/15H6znYrTq/" target="_blank" rel="noopener noreferrer">
          <img src={facebookImg} alt="Facebook" />
        </a>
      </div>

      {/* Designer credit - cross-promotion */}
      <p className={styles.designerCredit}>
        {t("footerDesignBy")}{" "}
        <a
          href="https://akillustrator.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Anastasiia Kolisnyk
        </a>
      </p>

      {/* Copyright */}
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Balónová párty · Trenčín, Slovensko
      </p>
    </footer>
  );
};

export default Footer;