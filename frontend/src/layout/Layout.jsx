import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CTAButton from "../components/CTAButton/CTAButton"; 
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main  style={{ 
    flex: 1,
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    overflowX: "hidden"
  }}>{children}</main>
      <CTAButton />
      <Footer />
       <WhatsappButton 
  phone="+919910478281" 
      message="Hi AngelLife — I want course details." 
    />
    </div>
  );
};

export default Layout;


