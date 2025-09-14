import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../css/contact.css";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="homeBodyContainer">
      <Header />
      <div className="page">
        <div className="greetings">contact me</div>
        
        <div id="featuredSection">
          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
