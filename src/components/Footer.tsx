// src/components/Footer.tsx
import React from "react";
import styles from "./Footer.module.scss";
import instagramImg from "../assets/icons/instagram.jpg";
import telegramImg from "../assets/icons/telegram.jpg";
import whatsappImg from "../assets/icons/whatsapp.jpg";
import envelopImage from "../assets/icons/envelop.jpg";
import phoneImage from "../assets/icons/phones.jpg";
import facebookImg from "../assets/icons/facebook.jpg";
import tiktokIcon from "../assets/icons/tiktok.jpg";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.contactInfo}>
      {/* Email Group */}
      <div className={styles.contactGroup}>
        <a href="mailto:baloon-party00@gmail.com" className={styles.contactItem}>
          <img src={envelopImage} alt="Email" className={styles.contactIcon} />
          <span>baloon-party00@gmail.com</span>
        </a>
      </div>
      {/* Phone Group */}
      <div className={styles.contactGroup}>
        <a href="tel:+421950266320" className={styles.contactItem}>
          <img src={phoneImage} alt="Telefón" className={styles.phoneIcon} />
          <span>+421 (95) 026-63-20</span>
        </a>
      </div>
      {/* Social Media Group */}
      <div className={styles.socialMediaGroup}>
        <div className={styles.socialMedia}>
          <a
            href="https://www.instagram.com/baloon_party00"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <img
              src={instagramImg}
              alt="Instagram"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.tiktok.com/@baloon.party00"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <img
              src={tiktokIcon}
              alt="TikTok"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://t.me/valeriiamukhina"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <img
              src={telegramImg}
              alt="Telegram"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://wa.me/421950266320"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <img
              src={whatsappImg}
              alt="WhatsApp"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.facebook.com/share/15H6znYrTq/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <img
              src={facebookImg}
              alt="Facebook"
              className={styles.socialIcon}
            />
          </a>
        </div>
      </div>
    </div>
    <p className={styles.property}>© {new Date().getFullYear()} Balónová párty</p>
  </footer>
);

export default Footer;