// src/components/Footer.tsx
import React from "react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"; // Import icons

const Footer: React.FC = () => (
  <footer className="footer">
    <p>© 2024 Balon Party</p>
    <div className="social-media">
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram /> Instagram
      </a>
      <a
        href="https://t.me/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane /> Telegram
      </a>
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  </footer>
);

export default Footer;
