import React from "react";
import { Helmet } from "react-helmet";
import styles from "./ContactUs.module.scss";
import phoneQrCode from "../assets/phone_qrcode.svg";
import instagramImg from "../assets/icons/converted-instagram.svg";

import PhoneIcon from "../assets/svg/PhoneIcon";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const phoneNumber = "+421(95)026-63-20";
const instagramProfileUrl = "https://www.instagram.com/yourprofile"; // Replace with actual Instagram profile URL
const siteUrl = "https://yourdomain.com"; // Replace with your actual domain

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Us | Balón Party00 - Event Decorations & Photo Walls
        </title>
        <meta
          name="description"
          content="Contact Balón Party00 for event decorations, photo walls, and party setups in Slovakia. Reach us via phone or Instagram for bookings or inquiries."
        />
        <meta
          name="keywords"
          content="Balón Party00, event decorations, Slovakia, photo walls, party setups, contact"
        />
        <meta name="author" content="Balón Party00" />
        <meta property="og:title" content="Contact Us | Balón Party00" />
        <meta
          property="og:description"
          content="Get in touch with Balón Party00 to plan your event decor and photo walls. We are based in Slovakia and ready to make your celebrations unforgettable."
        />
        <meta property="og:image" content="/images/contact-page.jpg" />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Balón Party00" />
        <meta
          name="twitter:description"
          content="Contact Balón Party00 to discuss custom event decor for your special day. We're here to make your vision a reality!"
        />
        <meta name="twitter:image" content="/images/contact-page.jpg" />
        <link rel="canonical" href={`${siteUrl}/contact`} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Balón Party00",
            url: `${siteUrl}/contact`,
            telephone: phoneNumber,
            address: { "@type": "PostalAddress", addressCountry: "Slovakia" },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: phoneNumber,
                contactType: "Customer Service",
                availableLanguage: ["English", "Slovak"],
              },
            ],
            sameAs: ["https://www.instagram.com/yourprofile"],
          })}
        </script>
      </Helmet>

      <div className={styles.contactPage}>
        <div className={styles.content}>
          <h1>Contact Us</h1>
          <p>
            Nezdráhajte sa nás kontaktovať pre akékoľvek otázky alebo ďalšie
            informácie.
          </p>

          {/* Contact Section */}
          <section
            className={styles.contactSection}
            aria-labelledby="contact-methods"
          >
            {/* Phone Section */}
            <div className={styles.contactGroup}>
              <a
                href={isMobile ? `tel:${phoneNumber}` : "#"}
                className={styles.phoneIconLink}
                aria-label="Call us by phone"
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

            {/* Instagram and Balón Party Text */}
            <div className={styles.socialMedia}>
              <a
                href="https://www.instagram.com/yourprofile" // Replace with your actual profile
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagramLink}
                aria-label="Visit our Instagram profile"
              >
                <img
                  src={instagramImg}
                  alt="Instagram icon"
                  className={styles.instagramIcon}
                  loading="lazy"
                />
                <span className={styles.balonPartyText}>Balón Party00</span>
              </a>
            </div>
          </section>
        </div>

        {/* QR Code at the bottom */}
        <footer className={styles.qrCodeContainer}>
          <img
            src={phoneQrCode}
            alt="QR code to call us"
            className={styles.qrCode}
            loading="lazy"
          />
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
