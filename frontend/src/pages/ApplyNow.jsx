import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Layout from "../layout/Layout";
import LeadForm from "../components/LeadForm/LeadForm";
import "./Academic.css";


const ApplyNow = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState({
    programType: "",
    programId: "", 
    centreId: "",
    intakeMonth: "",
    intakeYear: "",
    highestQualification: "",
    isMedical: "",
    regNumber: "",
    experienceYears: "",
    source: "",
    notes: "",
    contactData: null
  });
  const [applicationId, setApplicationId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Program data
  const programTypes = [
    { value: "degree", label: "Degree" },
    { value: "pg-diploma", label: "PG Diploma" },
    { value: "diploma", label: "Diploma" },
    { value: "certification", label: "Certification" }
  ];

  const programs = {
    "degree": [
      { value: "bsc-nursing", label: "B.Sc. Nursing" },
      { value: "bsc-medical-lab", label: "B.Sc. Medical Laboratory Technology" },
      { value: "msc-nursing", label: "M.Sc. Nursing" }
    ],
    "pg-diploma": [
      { value: "pgd-healthcare-management", label: "PG Diploma in Healthcare Management" },
      { value: "pgd-medical-coding", label: "PG Diploma in Medical Coding" }
    ],
    "diploma": [
      { value: "diploma-nursing", label: "Diploma in Nursing" },
      { value: "diploma-pharmacy", label: "Diploma in Pharmacy" }
    ],
    "certification": [
      { value: "cert-phlebotomy", label: "Certified Phlebotomy Technician" },
      { value: "cert-ecg", label: "ECG Technician Certification" },
      { value: "cert-dialysis", label: "Dialysis Technician Certification" },
      { value: "cert-medical-assistant", label: "Medical Assistant Certification" },
      { value: "cert-pharmacy-assistant", label: "Pharmacy Assistant Certification" }
    ]
  };

  const centres = [
    { value: "mumbai", label: "Mumbai (HO)" },
    { value: "lucknow", label: "Lucknow" },
    { value: "kolkata", label: "Kolkata" },
    { value: "ranchi", label: "Ranchi" },
    { value: "prayagraj", label: "Prayagraj" },
    { value: "nigeria", label: "Nigeria" },
    { value: "tanzania", label: "Tanzania" }
  ];

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 3 }, (_, i) => ({
    value: (currentYear + i).toString(),
    label: (currentYear + i).toString()
  }));

  const qualifications = [
    { value: "12th", label: "12th Standard" },
    { value: "diploma", label: "Diploma" },
    { value: "graduation", label: "Graduation" },
    { value: "post-graduation", label: "Post Graduation" },
    { value: "phd", label: "PhD" },
    { value: "other", label: "Other" }
  ];

  const sources = [
    { value: "instagram", label: "Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "google", label: "Google" },
    { value: "referral", label: "Referral" },
    { value: "other", label: "Other" }
  ];

  const handleInputChange = (field, value) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactFormSubmit = (contactData) => {
    setApplicationData(prev => ({
      ...prev,
      contactData: contactData
    }));
    setCurrentStep(3);
  };

  const validateStep1 = () => {
    return true; // Always enable the button, but show alerts on navigation
  };

  const validateStep2 = () => {
    return true; // Always enable the button, but show alerts on navigation
  };

  const checkStep1Complete = () => {
    return applicationData.programType && 
           applicationData.centreId && 
           applicationData.intakeMonth && 
           applicationData.intakeYear;
  };

  const checkStep2Complete = () => {
    return applicationData.contactData && 
           applicationData.highestQualification &&
           applicationData.isMedical !== "";
  };

  const handleStepNavigation = (step) => {
    if (step === 2 && !checkStep1Complete()) {
      alert("Please complete Program Selection first");
      return;
    }
    if (step === 3 && (!checkStep1Complete() || !checkStep2Complete())) {
      alert("Please complete all previous steps first");
      return;
    }
    setCurrentStep(step);
  };

  const handleSubmitApplication = async () => {
    if (!applicationData.contactData) {
      alert("Please provide your contact information first");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get the human-readable course name for the course field
      const selectedProgram = programs[applicationData.programType]?.find(
        program => program.value === applicationData.programId
      );
      const courseName = selectedProgram ? selectedProgram.label : applicationData.programId;

      // Build the payload with only the fields your Lead schema expects
      const payload = {
        name: applicationData.contactData.name,
        email: applicationData.contactData.email,
        mobile: applicationData.contactData.mobile,
        course: courseName,  // Human-readable course name
        city: applicationData.contactData.city || "",
        consent: true,

        // 🔽 New fields you just added to Lead schema
        programType: applicationData.programType,
        programId: applicationData.programId,  // Technical program ID
        centreId: applicationData.centreId,
        intakeMonth: applicationData.intakeMonth,
        intakeYear: applicationData.intakeYear,
      };

      console.log("Sending payload:", payload);
      console.log("Intake details - Month:", applicationData.intakeMonth, "Year:", applicationData.intakeYear);

      const response = await api.post('/leads', payload);
      console.log("Server response:", response.data);
      console.log("Response status:", response.status);

      if (response.status === 201 && response.data.message === "Lead saved") {
        setApplicationId(response.data.lead._id);
        setCurrentStep(4);
        
        // Fire tracking event
        if (window.gtag) {
          window.gtag('event', 'apply_submitted', {
            program_type: applicationData.programType,
            centre: applicationData.centreId
          });
        }
      } else {
        alert("Error saving application: " + (response.data.error || response.data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      if (err.response) {
        // Server responded with error status
        alert("Server error: " + (err.response.data.message || err.response.data.error || err.message));
      } else if (err.request) {
        // Request was made but no response received
        alert("Network error: Unable to connect to server. Please check if the backend is running.");
      } else {
        // Something else happened
        alert("Error: " + err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const StepIndicator = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '40px',
      gap: '20px'
    }}>
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: currentStep >= step ? '#8b5e3c' : '#e9ecef',
            color: currentStep >= step ? 'white' : '#6c757d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={() => handleStepNavigation(step)}
          >
            {step}
          </div>
          {step < 3 && (
            <div style={{
              width: '60px',
              height: '3px',
              background: currentStep > step ? '#8b5e3c' : '#e9ecef',
              transition: 'all 0.3s ease'
            }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const ProgramSelection = () => (
    <div className="section-block" style={{ 
      background: '#f9f6f2', 
      padding: '40px', 
      borderRadius: '15px',
      marginBottom: '30px',
      border: '2px solid #f0f0f0'
    }}>
      <h2 style={{ 
        color: '#8b5e3c', 
        marginBottom: '30px',
        fontSize: '1.8rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        1️⃣ Program Selection
      </h2>
      
      <div style={{ display: 'grid', gap: '25px' }}>
        {/* Program Type */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '10px',
            color: '#5c4a3d',
            fontWeight: '600',
            fontSize: '1.1rem'
          }}>
            Choose Program Type *
          </label>
          <select
            value={applicationData.programType}
            onChange={(e) => {
              handleInputChange('programType', e.target.value);
              handleInputChange('programId', ''); // Reset program selection
            }}
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '8px',
              border: '2px solid #e9ecef',
              fontSize: '1rem',
              backgroundColor: 'white'
            }}
          >
            <option value="">Select Program Type</option>
            {programTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        {/* Specific Program */}
        {applicationData.programType && (
          <div>
            <label style={{
              display: 'block',
              marginBottom: '10px',
              color: '#5c4a3d',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Choose Specific Program *
            </label>
            <select
              value={applicationData.programId}
              onChange={(e) => handleInputChange('programId', e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #e9ecef',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select Program</option>
              <option value="undecided">Undecided – Request Counselling</option>
              {programs[applicationData.programType]?.map(program => (
                <option key={program.value} value={program.value}>{program.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* Preferred Centre */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '10px',
            color: '#5c4a3d',
            fontWeight: '600',
            fontSize: '1.1rem'
          }}>
            Preferred Centre *
          </label>
          <select
            value={applicationData.centreId}
            onChange={(e) => handleInputChange('centreId', e.target.value)}
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '8px',
              border: '2px solid #e9ecef',
              fontSize: '1rem',
              backgroundColor: 'white'
            }}
          >
            <option value="">Select Centre</option>
            {centres.map(centre => (
              <option key={centre.value} value={centre.value}>{centre.label}</option>
            ))}
          </select>
        </div>

        {/* Intended Intake */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '10px',
            color: '#5c4a3d',
            fontWeight: '600',
            fontSize: '1.1rem'
          }}>
            Intended Intake *
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <select
              value={applicationData.intakeMonth}
              onChange={(e) => handleInputChange('intakeMonth', e.target.value)}
              style={{
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #e9ecef',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select Month</option>
              {months.map(month => (
                <option key={month.value} value={month.value}>{month.label}</option>
              ))}
            </select>
            <select
              value={applicationData.intakeYear}
              onChange={(e) => handleInputChange('intakeYear', e.target.value)}
              style={{
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #e9ecef',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select Year</option>
              {years.map(year => (
                <option key={year.value} value={year.value}>{year.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={() => {
            if (checkStep1Complete()) {
              setCurrentStep(2);
            } else {
              alert("Please complete Program Selection first");
            }
          }}
          disabled={!validateStep1()}
          style={{
            background: validateStep1() ? '#8b5e3c' : '#ccc',
            color: 'white',
            padding: '15px 40px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: validateStep1() ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease'
          }}
        >
          Continue to Applicant Details
        </button>
      </div>
    </div>
  );

  const ApplicantDetails = () => (
    <div className="section-block" style={{ 
      background: '#f9f6f2', 
      padding: '40px', 
      borderRadius: '15px',
      marginBottom: '30px',
      border: '2px solid #f0f0f0'
    }}>
      <h2 style={{ 
        color: '#8b5e3c', 
        marginBottom: '30px',
        fontSize: '1.8rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        2️⃣ Applicant Details
      </h2>
      
      {/* Contact Form Component */}
      <div style={{ marginBottom: '30px' }}>
        <LeadForm onSubmit={handleContactFormSubmit} isApplicationForm={true} />
      </div>
    </div>
  );

  const ReviewSubmit = () => (
    <div className="section-block" style={{ 
      background: '#f9f6f2', 
      padding: '40px', 
      borderRadius: '15px',
      marginBottom: '30px',
      border: '2px solid #f0f0f0'
    }}>
      <h2 style={{ 
        color: '#8b5e3c', 
        marginBottom: '30px',
        fontSize: '1.8rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        3️⃣ Review & Submit
      </h2>

      {/* Summary Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Program Summary */}
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '10px',
          border: '2px solid #e9ecef'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <h4 style={{ color: '#8b5e3c', margin: '0' }}>Program Details</h4>
            <button
              onClick={() => setCurrentStep(1)}
              style={{
                background: 'none',
                border: '1px solid #8b5e3c',
                color: '#8b5e3c',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Edit
            </button>
          </div>
          <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            <p><strong>Type:</strong> {programTypes.find(p => p.value === applicationData.programType)?.label}</p>
            <p><strong>Program:</strong> {applicationData.programId === 'undecided' ? 'Undecided – Request Counselling' : 
              programs[applicationData.programType]?.find(p => p.value === applicationData.programId)?.label}</p>
            <p><strong>Centre:</strong> {centres.find(c => c.value === applicationData.centreId)?.label}</p>
            <p><strong>Intake:</strong> {months.find(m => m.value === applicationData.intakeMonth)?.label} {applicationData.intakeYear}</p>
          </div>
        </div>

        {/* Applicant Summary */}
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '10px',
          border: '2px solid #e9ecef'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <h4 style={{ color: '#8b5e3c', margin: '0' }}>Applicant Details</h4>
            <button
              onClick={() => setCurrentStep(2)}
              style={{
                background: 'none',
                border: '1px solid #8b5e3c',
                color: '#8b5e3c',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Edit
            </button>
          </div>
          <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            {applicationData.contactData && (
              <>
                <p><strong>Name:</strong> {applicationData.contactData.name}</p>
                <p><strong>Email:</strong> {applicationData.contactData.email}</p>
                <p><strong>Phone:</strong> {applicationData.contactData.mobile}</p>
                <p><strong>City:</strong> {applicationData.contactData.city}</p>
                <p><strong>Course Selected:</strong> {applicationData.contactData.course}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={handleSubmitApplication}
          disabled={isSubmitting}
          style={{
            background: isSubmitting ? '#ccc' : 'linear-gradient(135deg, #8b5e3c 0%, #a67658 100%)',
            color: 'white',
            padding: '20px 50px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '1.3rem',
            fontWeight: '600',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '200px'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
        
        <p style={{
          color: '#666',
          fontSize: '0.9rem',
          marginTop: '15px',
          fontStyle: 'italic',
          maxWidth: '600px',
          margin: '15px auto 0'
        }}>
          You'll receive an acknowledgement by email/WhatsApp. Our counsellor will contact you within one working day to schedule a guidance call.
        </p>
      </div>
    </div>
  );

  const SuccessState = () => (
    <div className="section-block" style={{ 
      background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)', 
      padding: '50px', 
      borderRadius: '20px',
      textAlign: 'center',
      border: '3px solid #28a745'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
      <h1 style={{ 
        color: '#155724', 
        marginBottom: '20px',
        fontSize: '2.5rem',
        fontWeight: '700'
      }}>
        Application Received!
      </h1>
      
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '30px',
        display: 'inline-block'
      }}>
        <h3 style={{ color: '#155724', marginBottom: '10px' }}>Your Application ID</h3>
        <div style={{
          fontSize: '2rem',
          fontWeight: '800',
          color: '#28a745',
          fontFamily: 'monospace'
        }}>
          {applicationId}
        </div>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.8)',
        padding: '25px',
        borderRadius: '12px',
        marginBottom: '30px'
      }}>
        <h4 style={{ color: '#155724', marginBottom: '15px' }}>Next Steps</h4>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <span style={{ color: '#155724', fontWeight: '600' }}>Counsellor call</span>
          <span style={{ color: '#155724' }}>→</span>
          <span style={{ color: '#155724', fontWeight: '600' }}>Document verification</span>
          <span style={{ color: '#155724' }}>→</span>
          <span style={{ color: '#155724', fontWeight: '600' }}>Offer & confirmation</span>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => window.open('https://wa.me/9910478281', '_blank')}
          style={{
            background: '#28a745',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Book Counselling
        </button>
        <button 
          onClick={() => navigate('/download-brochure')}
          style={{
            background: 'white',
            color: '#28a745',
            padding: '12px 25px',
            borderRadius: '8px',
            border: '2px solid #28a745',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Download Brochure
        </button>
        <button 
          onClick={() => navigate('/courses')}
          style={{
            background: 'white',
            color: '#28a745',
            padding: '12px 25px',
            borderRadius: '8px',
            border: '2px solid #28a745',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Explore Courses
        </button>
      </div>
    </div>
  );

  const FAQ = () => (
    <div className="section-block" style={{ 
      background: '#f9f6f2', 
      padding: '40px', 
      borderRadius: '15px',
      marginBottom: '30px'
    }}>
      <h3 style={{ 
        color: '#8b5e3c', 
        marginBottom: '25px',
        fontSize: '1.5rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        Frequently Asked Questions
      </h3>
      
      <div style={{ 
        display: 'grid', 
        gap: '15px'
      }}>
        {[
          {
            q: "Can I apply without finalising a program?",
            a: "Yes—select Undecided and request counselling."
          },
          {
            q: "Can I change centres later?", 
            a: "Subject to seat availability before batch start."
          },
          {
            q: "Are scholarships available?",
            a: "Merit/need‑based; assessed during counselling."
          }
        ].map((faq, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <h4 style={{ 
              color: '#8b5e3c', 
              marginBottom: '8px',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              {faq.q}
            </h4>
            <p style={{ 
              color: '#5c4a3d', 
              margin: '0',
              fontSize: '0.95rem'
            }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const SecondaryCTAs = () => (
    <div style={{
      textAlign: 'center',
      marginTop: '40px',
      padding: '30px',
      background: '#f9f6f2',
      borderRadius: '15px'
    }}>
      <h3 style={{ 
        color: '#8b5e3c', 
        marginBottom: '20px',
        fontSize: '1.3rem'
      }}>
        Not Ready to Apply Yet?
      </h3>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        <button style={{
          background: 'white',
          color: '#8b5e3c',
          padding: '12px 25px',
          borderRadius: '8px',
          border: '2px solid #8b5e3c',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Book Free Counselling
        </button>
        <button style={{
          background: 'white',
          color: '#8b5e3c',
          padding: '12px 25px',
          borderRadius: '8px',
          border: '2px solid #8b5e3c',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Download Brochure
        </button>
        <button style={{
          background: 'white',
          color: '#8b5e3c',
          padding: '12px 25px',
          borderRadius: '8px',
          border: '2px solid #8b5e3c',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          View Courses
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      <section className="academics-section">
        {/* Header */}
        <div className="section-block" style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          background: 'linear-gradient(135deg, #8b5e3c 0%, #a67658 100%)',
          color: 'white',
          padding: '60px 40px',
          borderRadius: '20px'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: 'white', 
            marginBottom: '15px',
            fontWeight: '700'
          }}>
            Apply Now
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(255,255,255,0.95)', 
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            Begin Your Application to AngelLife International Institute
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(255,255,255,0.9)', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Complete a short form to apply for your chosen program. Our counsellors will review your details, verify eligibility, and guide you through the next steps.
          </p>
        </div>

        {/* Step Indicator */}
        {currentStep <= 3 && <StepIndicator />}

        {/* Step Content */}
        {currentStep === 1 && <ProgramSelection />}
        {currentStep === 2 && <ApplicantDetails />}
        {currentStep === 3 && <ReviewSubmit />}
        {currentStep === 4 && <SuccessState />}

        {/* FAQ & Secondary CTAs */}
        {currentStep <= 3 && (
          <>
            <FAQ />
            <SecondaryCTAs />
          </>
        )}
      </section>
    </Layout>
  );
};

export default ApplyNow;
