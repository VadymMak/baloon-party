// src/components/Footer.tsx
import React from "react";
import styles from "./Footer.module.scss";
import instagramImg from "../assets/icons/instagram.jpg";
import telegramImg from "../assets/icons/telegram.jpg";
import whatsappImg from "../assets/icons/whatsapp.jpg";
import envelopImage from "../assets/icons/envelop.jpg";
import phoneImage from "../assets/icons/phones.jpg";
import facebookImg from "../assets/icons/facebook.jpg";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.contactInfo}>
      {/* Email Group */}
      <div className={styles.contactGroup}>
        <a href="mailto:your-email@example.com" className={styles.contactItem}>
          <img src={envelopImage} alt="Email" className={styles.contactIcon} />
          <span>Email: baloon-party00@gmail.com</span>
        </a>
      </div>
      {/* Phone Group */}
      <div className={styles.contactGroup}>
        <a href="tel:+123456789" className={styles.contactItem}>
          <img src={phoneImage} alt="Phone" className={styles.phoneIcon} />
          <span>Phone: +421(95)026-63-20</span>
        </a>
      </div>
      {/* Social Media Group */}
      <div className={styles.socialMediaGroup}>
        <div className={styles.socialMedia}>
          <a
            href="https://instagram.com/yourusername"
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
            href="https://t.me/yourusername"
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
            href="https://wa.me/yourphonenumber"
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
            href="https://wa.me/yourphonenumber"
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
    <p className={styles.property}>© 2024 Balon Party</p>
  </footer>
);

export default Footer;
