import React from "react";
import { Helmet } from "react-helmet";
import styles from "./ContactUs.module.scss";
import { useTranslation } from "react-i18next";
import qrCodeIcon from "../assets/icons/frame-removebg-preview.png";
import instagramImg from "../assets/icons/instagram.jpg";
import telegramImg from "../assets/icons/telegram.jpg";
import whatsappImg from "../assets/icons/whatsapp.jpg";
import facebookImg from "../assets/icons/facebook.jpg";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("contact.title")} | Balón Party – Trenčín</title>
        <meta name="description" content={t("contact.description")} />
      </Helmet>

      <div className={styles.contactPage}>
        <div className={styles.content}>
          <h1>{t("contact.title")}</h1>
          <p className={styles.subtitle}>{t("contact.description")}</p>

          {/* Contact cards */}
          <div className={styles.cards}>
            {/* Phone */}
            <a href="tel:+421950266320" className={styles.card}>
              <span className={styles.cardIcon}>☎</span>
              <span className={styles.cardLabel}>{t("contact.phone")}</span>
              <span className={styles.cardValue}>+421 (95) 026-63-20</span>
            </a>

            {/* Email */}
            <a href="mailto:baloon-party00@gmail.com" className={styles.card}>
              <span className={styles.cardIcon}>✉</span>
              <span className={styles.cardLabel}>Email</span>
              <span className={styles.cardValue}>baloon-party00@gmail.com</span>
            </a>

            {/* Hours */}
            <div className={styles.card}>
              <span className={styles.cardIcon}>🕐</span>
              <span className={styles.cardLabel}>{t("contact.hours")}</span>
              <span className={styles.cardValue}>{t("contact.hoursValue")}</span>
            </div>

            {/* Location */}
            <div className={styles.card}>
              <span className={styles.cardIcon}>📍</span>
              <span className={styles.cardLabel}>{t("contact.location")}</span>
              <span className={styles.cardValue}>Trenčín, Slovensko</span>
            </div>
          </div>

          {/* Messengers */}
          <h2>{t("contact.writeUs")}</h2>
          <div className={styles.messengers}>
            <a
              href="https://www.instagram.com/baloon_party00"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.messengerBtn}
            >
              <img src={instagramImg} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/421950266320"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.messengerBtn}
            >
              <img src={whatsappImg} alt="WhatsApp" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://t.me/valeriiamukhina"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.messengerBtn}
            >
              <img src={telegramImg} alt="Telegram" />
              <span>Telegram</span>
            </a>
            <a
              href="https://www.facebook.com/share/15H6znYrTq/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.messengerBtn}
            >
              <img src={facebookImg} alt="Facebook" />
              <span>Facebook</span>
            </a>
          </div>

          {/* QR Code */}
          <div className={styles.qrSection}>
            <img src={qrCodeIcon} alt="QR Code – Instagram Balón Party" />
            <span>{t("contact.scanQR")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;