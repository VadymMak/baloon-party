import React from "react";
import styles from "./ContactUs.module.scss";
import phoneQrCode from "../assets/phone_qrcode.svg";
import phoneImg from "../assets/icons/converted-phone.png";
import instagramImg from "../assets/icons/converted-instagram.png";

// Check if the user is on a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const phoneNumber = "+421950266320";
const instagramProfileUrl = "https://www.instagram.com/yourprofile"; // Replace with actual Instagram profile URL

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <p>
          Nezdráhajte sa nás kontaktovať pre akékoľvek otázky alebo ďalšie
          informácie.
        </p>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          {/* Phone Section */}
          <div className={styles.contactGroup}>
            {/* Phone Icon linked to tel */}
            <a
              href={isMobile ? `tel:${phoneNumber}` : "#"}
              className={styles.phoneIconLink}
            >
              <img src={phoneImg} alt="Phone" className={styles.phoneIcon} />
            </a>
            <a
              href={isMobile ? `tel:${phoneNumber}` : instagramProfileUrl}
              className={styles.contactItem}
            >
              {phoneNumber}
            </a>
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
        </div>
      </div>

      {/* QR Code at the bottom */}
      <div className={styles.qrCodeContainer}>
        <img src={phoneQrCode} alt="Phone QR Code" className={styles.qrCode} />
      </div>
    </div>
  );
};

export default ContactPage;
