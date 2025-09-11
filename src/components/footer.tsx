import { useNavigate } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="skillsContainer" id="footer">
      <span>
        © {new Date().getFullYear()} {window.location.protocol}//
        {window.location.host} <span onClick={() => {
          location.pathname != '/privacy' && navigate('/privacy')
        }} style={{fontWeight: '600', color: 'black', cursor: 'pointer'}}> | privacy?</span>
      </span>

      <div className="contacts">
        <i
          onClick={() => {
            window.open("www.linkedin.com/in/ricardo-cambundo-bab2a0210");
          }}
          className="bi bi-linkedin"
          style={{ color: "#bebebe", cursor: "pointer" }}
        ></i>
        <i
          onClick={() => {
            window.open("https://github.com/Ricardo-Cambundo");
          }}
          className="bi bi-github"
          style={{ color: "#bebebe", cursor: "pointer" }}
        ></i>
        <i
          onClick={() => {
            window.open(
              "mailto:ricardocmbd@gmail.com?subject=Hello my name is &body=I come from your portfolio website, "
            );
          }}
          className="bi bi-envelope"
          style={{ color: "#bebebe", cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
};

export default Footer;
