import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../../pages/Academic.css';
import './CoursesTabs.css';

// Full course dataset with Unsplash image URLs (no download needed)
const allCourses = [

  {
    id: 1,
    category: "Degree",
    anchorId: "course-bsc-cosmo",
    title: "B.Sc – Cosmetology & Wellness",
    duration: "3 Years",
    fee: "₹1,20,000",
    tracks: ["Skin", "Hair", "Nutrition"],
    description: "Comprehensive science-backed career path in cosmetology and wellness.",
    pexelsSrc:
      "https://images.pexels.com/photos/3985351/pexels-photo-3985351.jpeg?auto=compress&cs=tinysrgb&w=1800",
    modules: [
      "Foundations: anatomy & physiology of skin and hair, hygiene & sterilization",
      "Cosmetic chemistry, product formulation basics & safe ingredient use",
      "Skin care protocols: facials, peels, acne & pigmentation management",
      "Hair care protocols: scalp analysis, treatments & styling",
      "Wellness fundamentals: nutrition & client consultation",
      "Professional practice & quality standards"
    ],
    outcomes: [
      "Job-ready for clinics, salons & wellness centers",
      "Portfolio & treatment plans",
      "Placement support"
    ],
    idealFor: "Students wanting a science-based cosmetology career."
  },

  {
    id: 2,
    category: "Degree",
    title: "M.Sc – Cosmetology & Wellness",
    duration: "2 Years",
    fee: "₹2,50,000",
    tracks: ["Skin", "Hair", "Nutrition", "Anti-Aging"],
    description: "Advanced program for leadership and educator roles.",
pexelsSrc:
  "https://images.pexels.com/photos/3997995/pexels-photo-3997995.jpeg?auto=compress&cs=tinysrgb&w=1800",
    modules: [
      "Advanced ingredient science",
      "Skin & hair disorder mapping",
      "Device-based aesthetic care",
      "Wellness program design",
      "Research methods & evidence-based practice"
    ],
    outcomes: ["Senior roles", "Trainer/Educator capabilities"],
    idealFor: "Graduates seeking leadership roles."
  },

  {
    id: 3,
    category: "Degree",
    title: "B.Voc – Nursing Care",
    duration: "3 Years",
    fee: "₹50,000",
    tracks: ["Clinical Practice", "Patient Care", "Community Health"],
    description:
      "Hands-on vocational degree focused on nursing care & patient management.",
    pexelsSrc:
      "https://images.pexels.com/photos/6129231/pexels-photo-6129231.jpeg?auto=compress&cs=tinysrgb&w=1800",
    modules: [
      "Foundations of nursing",
      "Nursing procedures",
      "Medical-surgical nursing",
      "Community health",
      "Nutrition & therapeutic diets",
      "Hospital management",
      "Internship & practicum"
    ],
    outcomes: [
      "Work-ready for hospitals & healthcare centers",
      "Real-world patient care exposure"
    ],
    idealFor: "Students pursuing a practical healthcare career."
  },

  {
    id: 4,
    category: "Degree",
    title: "M.Sc – Facial Aesthetics & Cosmetology",
    duration: "2 Years",
    fee: "₹3,20,000",
    tracks: ["Lasers", "Medi-Facials", "Anti-Aging"],
    description: "Specialized program for medical professionals.",
    pexelsSrc:
      "https://images.pexels.com/photos/7581083/pexels-photo-7581083.jpeg?auto=compress&cs=tinysrgb&w=1800",
    modules: [
      "Facial anatomy & assessment",
      "Chemical peels & micro-needling",
      "Lasers & energy devices",
      "Anti-aging pathways",
      "Complication management"
    ],
    outcomes: ["Clinical aesthetics integration", "Consent & protocol kits"],
    idealFor: "MBBS/BDS/MD professionals expanding into aesthetics."
  },

  {
    id: 5,
    category: "PG Diploma",
    title: "PG Diploma – Facial Aesthetics & Cosmetology",
    duration: "2 Years",
    fee: "₹1,60,000",
    tracks: ["Lasers", "Medi-Facials", "Anti-Aging"],
    description:
      "Clinical approach to cosmetic concerns for medical professionals.",
    pexelsSrc:
      "https://images.pexels.com/photos/6231731/pexels-photo-6231731.jpeg?auto=compress&cs=tinysrgb&w=1800",
    modules: [
      "Facial analysis",
      "Advanced medi-facials",
      "Laser fundamentals"
    ],
    outcomes: ["Structured clinical approach"],
    idealFor: "Medical professionals adding aesthetics."
  },

  {
    id: 6,
    category: "PG Diploma",
    title: "PG Diploma – Cosmetology & Wellness",
    duration: "2 Years",
    fee: "₹1,20,000",
    tracks: ["Skin", "Hair", "Nutrition"],
    description:
      "Mastery program with s800trong client-handling & treatment planning.",
    pexelsSrc:
      "https://images.pexels.com/photos/8534274/pexels-photo-8534274.jpeg?auto=compress&cs=tinysrgb&w=1800",
    modules: [
      "Advanced skincare & haircare",
      "Client communication & expectation management",
      "Wellness integration"
    ],
    outcomes: ["Complete service planning & client management"],
    idealFor: "Graduates seeking mastery."
  },

  {
    id: 7,
    category: "Diploma",
    title: "Diploma – Cosmetology & Wellness",
    duration: "1 Year",
    fee: "₹70,000",
    tracks: ["Skin", "Hair"],
    description: "Job-ready skills with clinical standards.",
    pexelsSrc:
      "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1800",
    modules: [
      "Core facials, medi-facials & peels",
      "Hair spa & scalp care",
      "Hygiene & sterilization"
    ],
    outcomes: ["Job-ready execution skills"],
    idealFor: "Freshers upgrading to clinical standards."
  },

  {
    id: 8,
    category: "Certification",
    title: "Certification – Makeup Artistry (Basic)",
    duration: "1 Month",
    fee: "₹20,000",
    tracks: ["PMU"],
    pexelsSrc:
      "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=2000",
    description: "Beginner-friendly course with portfolio building.",
    modules: ["Skin prep, base, blending, day/party looks"],
    outcomes: ["Starter portfolio & freelance readiness"],
    idealFor: "Beginners in makeup."
  },

  {
    id: 9,
    category: "Certification",
    title: "Certification – Makeup Artistry (Advanced)",
    duration: "3 Months",
    fee: "₹60,000",
    tracks: ["PMU"],
    pexelsSrc:
      "https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=2000",
    description: "Professional bridal & editorial makeup program.",
    modules: ["Bridal, HD makeup, editorial shoots"],
    outcomes: ["Professional portfolio"],
    idealFor: "Aspiring makeup artists."
  },

  {
    id: 10,
    category: "Certification",
    title: "Certification – Hair Dressing (Basic)",
    duration: "1 Month",
    fee: "₹20,000",
    tracks: ["Hair"],
    pexelsSrc:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=2000",
    description: "Salon foundations & basic styling.",
    modules: ["Shampooing, sectioning, blow-dry, basic cuts"],
    outcomes: ["Salon floor support"],
    idealFor: "Beginners entering hair styling."
  },

  {
    id: 11,
    category: "Certification",
    title: "Certification – Hair Dressing (Advanced)",
    duration: "3 Months",
    fee: "₹60,000",
    tracks: ["Hair"],
    pexelsSrc:
      "https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg?auto=compress&cs=tinysrgb&w=2000",
    description: "Advanced styling & color training.",
    modules: ["Advanced cuts & color theory"],
    outcomes: ["Independent stylist readiness"],
    idealFor: "Aspiring professionals."
  },

  {
    id: 12,
    category: "Certification",
    title: "Certification – Permanent Makeup (PMU)",
    duration: "3 Months",
    fee: "₹20,000",
    tracks: ["PMU"],
    pexelsSrc:
      "https://images.pexels.com/photos/3762660/pexels-photo-3762660.jpeg?auto=compress&cs=tinysrgb&w=2000",
    description: "PMU service-ready skill development.",
    modules: ["Brow mapping, micropigmentation & hygiene"],
    outcomes: ["Service-ready"],
    idealFor: "Professionals expanding into PMU."
  },

  {
    id: 13,
    category: "Certification",
    title: "Certification – Cosmetology (Advanced)",
    duration: "1 Year",
    fee: "₹45,000",
    tracks: ["Medi-Facials", "Skin"],
    pexelsSrc:
      "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=2000",
    description:
      "Clinical-grade service competency with treatment sequencing.",
    modules: ["Advanced medi-facials", "Peel planning"],
    outcomes: ["Clinical-grade competency"],
    idealFor: "Professionals upgrading skills."
  }
];


// Build category dictionary and order; this keeps tabs in consistent order and skips empty categories


const categoryOrder = ['Certification', 'Degree', 'PG Diploma', 'Diploma', ];
const categories = categoryOrder.map((cat) => ({
  key: cat.toLowerCase().replace(/\s+/g, ''),
  label:
    cat === 'PG Diploma'
      ? 'PG Diploma'
      : cat === 'Diploma'
      ? 'Diploma Programs'
      : cat === 'Degree'
      ? 'Degree Programs'
      : cat === 'Certification'
      ? 'Certifications'
      : cat,
  data: allCourses.filter((c) => c.category === cat)
}));

// Course card - uses pexelsSrc correctly
function CourseCard({ course }) {
  const navigate = useNavigate();
  const localImage = course.image ? process.env.PUBLIC_URL + course.image : null;
  const placeholder = process.env.PUBLIC_URL + '/Images/placeholder_course.jpg';

  // Use ONLY pexelsSrc (not unsplashSrc)
  const [imgSrc, setImgSrc] = useState(course.pexelsSrc || localImage || placeholder);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
    setImgSrc(course.pexelsSrc || localImage || placeholder);
  }, [course.id, course.pexelsSrc, course.image]);

  const handleError = () => {
    if (imgSrc !== localImage && localImage) {
      setImgSrc(localImage);
    } else if (imgSrc !== placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <div className="course-card" id={course.anchorId || undefined}>
      <div className="course-card__media">
        <img
          src={ imgSrc }
          alt={course.title}
          loading="lazy"
          decoding="async"
          style={{
            background: '#f5f5f5',
            transition: 'opacity 0.3s',
            opacity: imgLoaded ? 1 : 0.5,
            width: '100%',
            height: '200px',
            objectFit: 'cover'
          }}
          onLoad={() => setImgLoaded(true)}
          onError={handleError}
        />
        <span className="course-card__duration">{course.duration}</span>
      </div>

      <div className="course-card__body">
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__meta">
          {course.duration} • Fee: {course.fee}
        </p>
        <p className="course-card__desc">{course.description}</p>

        {course.tracks && (
          <div className="course-card__tracks">
            {course.tracks.slice(0, 4).map((t, i) => (
              <span key={i} className="course-track-chip">
                {t}
              </span>
            ))}
          </div>
        )}
         <div className="course-card__actions">
  <button
    className="course-card__more"
    onClick={() => {
      if (course.category === "Certification") {
        navigate("/certifications");
      } else if (
        course.category === "Diploma" ||
        course.category === "PG Diploma"
      ) {
        navigate("/diploma-programs");
      } else if (course.category === "Degree") {
        navigate("/degree-masters");
      }
    }}
  >
    Know More →
  </button>
</div>

      </div>
    </div>
  );
}


const CoursesTabs = () => {
  const [activeTabKey, setActiveTabKey] = useState(
    categories.find((c) => c.data && c.data.length > 0)?.key || (categories[0] && categories[0].key)
  );

  return (
    <section className="home-courses" aria-labelledby="home-courses-title">
      <div className="home-courses__head">
        <h2 id="home-courses-title" className="home-courses__title">
          Explore Programs
        </h2>
        <p className="home-courses__subtitle">
          Find the perfect path – degree foundations, focused diplomas or skill certifications.
        </p>
      </div>

      {/* Tabs */}
      <div className="course-tabs" role="tablist">
        {categories.map((tab) =>
          tab.data && tab.data.length > 0 ? (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTabKey === tab.key}
              aria-controls={`panel-${tab.key}`}
              className={`course-tab ${activeTabKey === tab.key ? 'is-active' : ''}`}
              onClick={() => setActiveTabKey(tab.key)}
            >
              {tab.label}
            </button>
          ) : null
        )}
      </div>

      {/* Panels */}
      {categories.map((tab) =>
        tab.data && tab.data.length > 0 ? (
          <div
            key={tab.key}
            id={`panel-${tab.key}`}
            role="tabpanel"
            hidden={activeTabKey !== tab.key}
            className="courses-panel"
          >
            <div className="courses-panel__grid">
              {tab.data.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        ) : null
      )}
    </section>
  );
};

export default CoursesTabs;
