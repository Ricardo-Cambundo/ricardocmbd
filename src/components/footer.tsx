import { useNavigate } from "react-router-dom";
import "../css/footer.css";
import { ScrollContext } from "@/store/context";
import { useContext } from "react";
// import logo from "../assets/images/logo-long-black.svg";
// import logoLight from "../assets/images/logo-long-white.svg";
const Footer = () => {

  const navigate = useNavigate()
  //@ts-ignore

  const { dark, setDark } = useContext(ScrollContext);
  
  return (
    <>
    {/* <div style={{marginTop: 60, display: 'flex', flexDirection: 'row', marginBottom: 0}}>
      <div
          
          style={{ cursor: "pointer !important", width: '115px',
  height: '30px'}}
          onClick={() => {
            location.pathname != "/" && navigate("/");
          }}
        >
          <img
            loading="eager" src={dark ? logoLight : logo}
            onClick={() => {
              location.pathname != "/" && navigate("/");
            }}
          />
          <span style={{color: dark ? 'white' : 'grey', fontSize: 13}}>Driven by curiosity and code</span>
        </div>

    </div> */}
    <div className="skillsContainer" id="footer">
      <span style={{color: dark ? '#ccccccff' : 'grey'}}>
        © {new Date().getFullYear()} {window.location.protocol}//
        {window.location.host} <span onClick={() => {
          location.pathname != '/privacy' && navigate('/privacy')
        }} style={{fontWeight: '600', color: dark ? '#e2e2e2ff ': 'black', cursor: 'pointer'}}> | privacy?</span>
      </span>

      <div className="contacts">
        <i
          onClick={() => {
            window.open("https://linkedin.com/in/ricardo-cambundo-bab2a0210");
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
    </>
  );
};

export default Footer;
