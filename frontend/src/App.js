import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import Academics from './pages/Academics';
import About from './pages/about';
import Contact from './pages/contact';
import Courses from './pages/Courses';
import Certifications from './pages/Certifications';
import DiplomaPrograms from './pages/DiplomaPrograms';
import DegreeMasters from './pages/DegreeMasters';
import RefundPolicy from './pages/RefundPolicy';
import ApplyNow from './pages/ApplyNow';
import DownloadBrochure from './pages/DownloadBrochure';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Gallery from './pages/Gallery';
import Admin from "./pages/Admin";
import './App.css'; 
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/diploma-programs" element={<DiplomaPrograms />} />
        <Route path="/degree-masters" element={<DegreeMasters />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/download-brochure" element={<DownloadBrochure />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;



