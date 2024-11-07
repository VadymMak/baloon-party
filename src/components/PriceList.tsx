import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PriceList.module.scss";

import instagramImg from "../assets/icons/instagram.jpg";
import phoneImg from "../assets/icons/phone.jpg";
import qrCodeIcon from "../assets/icons/frame-removebg-preview.png";
import logoDeselected from "../assets/logo-deselected.svg";

const PriceList: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.priceList}>
      <div className={styles.topBar}>
        <img src={logoDeselected} alt="Logo" className={styles.logo} />
        <h1 className={styles.pageTitle}>Price List</h1>
      </div>

      <button className={styles.closeButton} onClick={handleClose}>
        ×
      </button>

      <ul className={styles.productList}>
        <li>Mini girlanda (dĺžka 1,5 m) ................... 100 €</li>
        <li>Stredná girlanda (2 m) ...............................120 €</li>
        <li>Veľká girlanda (2,5 m) ..................................150 €</li>
        <li>
          Balónik s héliom (kus)........................................ 5 €
        </li>
      </ul>

      <p className={styles.specialOffer}>
        Ponúkame tiež špeciálne pozadia pre tematické oslavy, ostatné dekorácie
        a ďalšie individuálne prvky na mieru podľa vašich predstáv.
      </p>

      <p className={styles.personalCalculation}>
        Vypočítať cenu individuálnej výzdoby
      </p>

      <div className={styles.contactSection}>
        {/* Phone Section */}
        <div className={styles.contactGroup}>
          <img src={phoneImg} alt="Phone" className={styles.phoneIcon} />
          <span className={styles.contactItem}>+421(95)026-63-20</span>
        </div>

        {/* Instagram and Balón Party Text */}
        <div className={styles.socialMedia}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramIcon}
          >
            <img src={instagramImg} alt="Instagram" />
          </a>
          <span className={styles.balonPartyText}>Balón Party00</span>
        </div>

        {/* QR Code Section */}
        <div className={styles.qrCode}>
          <img src={qrCodeIcon} alt="QR Code" />
        </div>
      </div>
    </div>
  );
};

export default PriceList;
