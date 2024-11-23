import React, { useState } from "react";
import styles from "./Testimonials.module.scss";
import { useTranslation } from "react-i18next";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: "Viktoriia Bieliaieva",
      feedback: t("testimonials.testimonial1"),
      picture: "/images/testempnials_nikolay.jpg",
    },
    {
      id: 2,
      name: "Naděžda Javor",
      feedback: t("testimonials.testimonial2"),
      picture: "/images/testemonials_nadja.jpg",
    },
    {
      id: 3,
      name: "Galina",
      feedback: t("testimonials.testimonial3"),
      picture: "/images/testemonials_market.jpg",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <section className={styles.testimonials}>
      <h2>{t("testimonials.title")}</h2>
      <div className={styles.testimonialList}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialItem}>
            <img
              src={testimonial.picture}
              alt={testimonial.name}
              onClick={() => openModal(testimonial.picture)}
            />
            <p className={styles.feedback}>"{testimonial.feedback}"</p>
            <p className={styles.name}>{testimonial.name}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img src={modalImage} alt="Full view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
