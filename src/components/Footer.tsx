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
        <a href="mailto:your-email@example.com" className={styles.contactItem}>
          <img src={envelopImage} alt="Email" className={styles.contactIcon} />
          <span>baloon-party00@gmail.com</span>
        </a>
      </div>
      {/* Phone Group */}
      <div className={styles.contactGroup}>
        <a href="tel:+123456789" className={styles.contactItem}>
          <img src={phoneImage} alt="Phone" className={styles.phoneIcon} />
          <span>+421(95)026-63-20</span>
        </a>
      </div>
      {/* Social Media Group */}
      <div className={styles.socialMediaGroup}>
        <div className={styles.socialMedia}>
          <a
            // href="https://instagram.com/yourusername"
            // href="https://www.instagram.com/baloon_party00/profilecard/?igsh=bm84NXFuNzN5cGhh"
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
            // href="https://itiktok.com/yourusername"
            href="https://www.tiktok.com/@baloon.party00?_t=8rXpoA8ecti&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <img
              src={tiktokIcon}
              alt="Instagram"
              className={styles.socialIcon}
            />
          </a>
          <a
            // href="https://t.me/yourusername"
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
            // href="https://facebook/yourphonenumber"
            href="https://www.facebook.com/share/15H6znYrTq/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
          >
            <img
              src={facebookImg}
              alt="Face Book"
              className={styles.socialIcon}
            />
          </a>
        </div>
        {/* <p className={styles.contactText}>Contact Us</p> */}
      </div>
    </div>
    <p className={styles.property}>© 2024 Balónová párty</p>
  </footer>
);

export default Footer;
