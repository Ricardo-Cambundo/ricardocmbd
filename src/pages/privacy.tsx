import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import "../css/privacy.css";

const Privacy = () => {
  const navigate = useNavigate()
  return (
    <div className="homeBodyContainer">
  <Header />
  <div className="page">
    <div className="greetings">Privacy Policy</div>

    <div id="privacySection">
      <div className="date">Last Updated: September 2024</div>
      <div className="sectionTitle">Welcome!</div>
      Thanks for visiting! This <strong>Privacy Policy</strong> explains how your information is handled here. My website primarily showcases my projects, and I prioritize respecting your privacy.
      
      <div className="sectionTitle">Information I Collect (Not Much, Honestly)</div>
      Since this is a simple portfolio site, I don't actively gather personal data. There are no accounts to create, no tracking cookies, and no hidden data collection practices.
      
      <ol type="1">
        <li>
          <div>Chatbot Interactions</div>
          If you communicate with the chatbot, your messages might be stored temporarily for caching or training. Please avoid sharing sensitive or confidential info here.
        </li>
        <li>
          <div>Contact Details</div>
          Any information you provide via email or contact form is entirely voluntary. I only use it to respond and communicate—no other use.
        </li>
      </ol>
      
      <div className="sectionTitle">How Your Info Is Used</div>
      Here's a quick overview of what I might do with any data I collect:
      <ul>
        <li>Ensure the website functions properly</li>
        <li>Enhance the site based on your feedback</li>
        <li>Address your questions or comments</li>
      </ul>
      
      <div className="sectionTitle">Sharing Your Data (Spoiler: I Don't)</div>
      I do not sell, trade, or rent your personal information. If you accidentally shared something sensitive, feel free to reach out, and I’ll assist in removing it.
      
      <div className="sectionTitle">Data Security (The Internet's Not Perfect)</div>
      I will do my best to keep your information safe, but no system is completely invulnerable. While I take reasonable steps to protect your data, I cannot guarantee absolute security.
      
      <div className="sectionTitle">Policy Changes (No Surprises)</div>
      This policy is current as of <strong>September 2025</strong>. Any updates will be reflected here, so check back periodically. Rest assured, I won't make major changes without informing you.
      
      <div className="sectionTitle">Questions or Concerns?</div>
      If you have any questions, concerns, or just want to connect, you can email me at <span onClick={() => {
        window.open('mailto:ricardocmbd@gmail.com?subject=Hello, I found your site&body=Hi, I came from your portfolio website.')
      }}>ricardocmbd@gmail.com</span> or use the <span onClick={() => { navigate('/contact') }}>contact form</span>. I’d love to hear from you!
    </div>
    <Footer />
  </div>
</div>
  );
};

export default Privacy;
