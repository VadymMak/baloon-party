import React from "react";
import { Helmet } from "react-helmet";
import styles from "./ContactUs.module.scss";
import { useTranslation } from "react-i18next";

import PhoneIcon from "../assets/svg/PhoneIcon";
import InstagramIcon from "../assets/svg/InstagramIcon";
import qrCodeIcon from "../assets/icons/frame-removebg-preview.png";
import ContactFAQ from "../components/ContactFaq";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const phoneNumber = "+421(95)026-63-20";
const instagramProfileUrl = "https://www.instagram.com/yourprofile";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`${t(
          "contact.title"
        )} | Balón Party00 - Event Decorations & Photo Walls`}</title>
        <meta name="description" content={t("contact.description")} />
      </Helmet>

      <div className={styles.contactPage}>
        <div className={styles.content}>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.description")}</p>

          <section
            className={styles.contactSection}
            aria-labelledby="contact-methods"
          >
            <div className={styles.contactGroup}>
              <a
                href={isMobile ? `tel:${phoneNumber}` : "#"}
                className={styles.phoneIconLink}
                aria-label={t("contact.phone")}
              >
                <PhoneIcon width={50} height={50} />
              </a>
              <a
                href={isMobile ? `tel:${phoneNumber}` : instagramProfileUrl}
                className={styles.contactItem}
              >
                {phoneNumber}
              </a>
            </div>

            <div className={styles.socialMedia}>
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramLink}
                aria-label={t("contact.instagramProfile")}
              >
                <InstagramIcon width={50} height={50} />
                <span className={styles.balonPartyText}>
                  {t("contact.businessName")}
                </span>
              </a>
            </div>
          </section>

          {/* QR Code */}
          <div className={styles.qrCode}>
            <img src={qrCodeIcon} alt="QR Code" />
          </div>

          {/* FAQ Section */}
          <ContactFAQ />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
