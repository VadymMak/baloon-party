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

          {/* Location & Hours */}
          {/* <section className={styles.locationHoursSection}>
            <h2>{t("contact.locationTitle")}</h2>
            <p>{t("contact.locationDescription")}</p>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?...your-location..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </section> */}

          {/* Testimonials Section */}
          <section className={styles.testimonialsSection}>
            <h2>{t("contact.testimonialsTitle")}</h2>
            {/* Implement a carousel or card layout for testimonials */}
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
