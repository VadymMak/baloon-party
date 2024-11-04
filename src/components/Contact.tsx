// src/components/Contact.tsx
import React from "react";

const Contact: React.FC = () => (
  <section className="contact">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
