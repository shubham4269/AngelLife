import React from "react";
import Layout from "../layout/Layout";
import LeadForm from "../components/LeadForm/LeadForm";
import styles from "./Contact.module.css";

const Contact = () => {
  const offices = [
    {
      city: "Mumbai (Head Office)",
      address: "1703 A Wing, Himalyan Heights, Wadala, Mumbai",
      phone: "+91 9429691807",
      email: "care@angellife.in",
    },
    { city: "Lucknow", address: "Gomti Nagar, Lucknow, Uttar Pradesh", phone: "+91 9429691807" },
    { city: "Kolkata", address: "Salt Lake City, Kolkata, West Bengal", phone: "+91 9429691807" },
    { city: "Ranchi", address: "Circular Road, Ranchi, Jharkhand", phone: "+91 9429691807" },
    { city: "Prayagraj", address: "Civil Lines, Prayagraj, Uttar Pradesh", phone: "+91 9429691807" },
    { city: "Lagos (Nigeria)", address: "Victoria Island, Lagos, Nigeria", phone: "+234 8123456789" },
    { city: "Tanzania", address: "Dar es Salaam, Tanzania", phone: "+255 987654321" },
  ];

  return (
    <Layout>
      <section className={styles.contactSection}>
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.subtext}>
          Have questions about admissions or programs? Our student support team is here to help.
        </p>

        {/* ===== Lead Form ===== */}
        <div className={styles.formContainer}>
          <LeadForm />
        </div>

        {/* ===== Office Locations ===== */}
        <h1 className={styles.heading}>our centre</h1>
        <div className={styles.locations}>
        
          {offices.map((office, i) => (
            <div key={i} className={styles.officeCard}>
              <h3>{office.city}</h3>
              <p>{office.address}</p>
              <p>📞 {office.phone}</p>
              {office.email && <p>✉️ {office.email}</p>}
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

