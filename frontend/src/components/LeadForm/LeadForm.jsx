import React, { useState } from 'react';
import api from "../../api/api";
import styles from './LeadForm.module.css';

const LeadForm = ({ onSubmit, isApplicationForm = false, buttonText = null }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    city: '',
  });

  const [status, setStatus] = useState(null);

  const courses = [
    "Certification in Cosmetology (Advanced)",
    "Diploma - Cosmetology & Wellness",
    "B.Sc - Cosmetology & Wellness",
    "M.Sc - Cosmetology & Wellness",
    "M.Sc - Facial Aesthetics & Cosmetology",
    "PG Diploma - Cosmetology & Wellness",
    "PG Diploma - Facial Aesthetics & Cosmetology",
    "Certification in Permanent Makeup (PMU)",
    "Certification in Makeup Artistry (Basic)",
    "Certification in Makeup Artistry (Advanced)",
    "Certification in Hair Dressing (Basic)",
    "Certification in Hair Dressing (Advanced)",
    "B.Voc  Nursing Care"
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    if (isApplicationForm && onSubmit) {
      // For application form, just pass the data to parent
      setTimeout(() => {
        onSubmit(form);
        setStatus('success');
      }, 500);
      return;
    }
    
    // Original lead form behavior
    try {
      const payload = {
        ...form, 
        source: 'home-lead-form',
        // Add default values for new schema fields
        programType: "",
        programId: "",
        centreId: "",
        intakeMonth: "",
        intakeYear: "",
      };
      await api.post('/leads', payload);
      setStatus('success');
      setForm({ name: '', email: '', mobile: '', course: '', city: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className={styles.wrapper}>
      {!isApplicationForm && (
        <>
          <h3 className={styles.heading}>Talk to Our Experts</h3>
          <p className={styles.subtext}>
            Get free counselling and details about our flagship programs.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Name */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <label className={styles.label}>Name</label>
        </div>

        {/* Email */}
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <label className={styles.label}>Email</label>
        </div>

        {/* Mobile */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <label className={styles.label}>Mobile</label>
        </div>

        {/* Course Dropdown */}
        <div className={`${styles.inputGroup} ${styles.selectWrapper}`}>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className={`${styles.input} ${styles.select}`}
            required
          >
            <option value="" disabled hidden></option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          <label className={styles.label}>Course</label>
        </div>

        {/* City */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className={styles.input}
          />
          <label className={styles.label}>City</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`${styles.button} ${
            status === 'loading' ? styles.loading : ''
          }`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Processing...' : (buttonText || (isApplicationForm ? 'Continue' : 'Submit'))}
        </button>

        {/* Status Messages */}
        {status === 'success' && !isApplicationForm && (
          <p className={`${styles.message} ${styles.success}`}>
            ✅ Thank you! Our team will reach out shortly.
          </p>
        )}
        {status === 'error' && (
          <p className={`${styles.message} ${styles.error}`}>
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default LeadForm;
