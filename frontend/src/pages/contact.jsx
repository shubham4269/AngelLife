import React from "react";
import Layout from "../layout/Layout";
import LeadForm from "../components/LeadForm/LeadForm";
import styles from "./Contact.module.css";

const Contact = () => {
  // Main contact (only one phone and one email)
  const mainPhone = "+91 9910478281 ";
  const mainEmail = "care@angellife.in";

  const offices = [
    {
      city: "Mumbai (Head Office)",
      address: "1703 A Wing, Himalyan Heights, Wadala, Mumbai",
    },
    { city: "Lucknow", address: "Gomti Nagar, Lucknow, Uttar Pradesh" },
    { city: "Kolkata", address: "Salt Lake City, Kolkata, West Bengal" },
    { city: "Ranchi", address: "Circular Road, Ranchi, Jharkhand" },
    { city: "Prayagraj", address: "Civil Lines, Prayagraj, Uttar Pradesh" },
    { city: "Lagos (Nigeria)", address: "Victoria Island, Lagos, Nigeria" },
    { city: "Tanzania", address: "Dar es Salaam, Tanzania" },
  ];

  return (
    <Layout>
      <section className={styles.contactSection}>
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.subtext}>
          Have questions about admissions or programs? Our student support team is here to help.
        </p>

        {/* ===== Main Contact Info (One Phone + One Email) ===== */}
        <div className={styles.singleContactBox}>
          <p><strong>📞 Phone:</strong> {mainPhone}</p>
          <p><strong>✉️ Email:</strong> {mainEmail}</p>
        </div>

        {/* ===== Lead Form ===== */}
        <div className={styles.formContainer}>
          <LeadForm />
        </div>

        {/* ===== Office Locations ===== */}
        <h1 className={styles.heading}>Our Centres</h1>
        <div className={styles.locations}>
          {offices.map((office, i) => (
            <div key={i} className={styles.officeCard}>
              <h3>{office.city}</h3>
              <p>{office.address}</p>
            </div>
          ))}
        </div>

        {/* ===== Map Embed ===== */}
        <div className={styles.mapWrapper}>
          <iframe
            title="AngelLife Head Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8570193214924!2d72.8695!3d19.0461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cecdeabcd!2sWadala%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1697030000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;


