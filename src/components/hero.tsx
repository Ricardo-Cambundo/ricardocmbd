import { useContext } from "react";
import "../css/hero.css";
import { ScrollContext } from "@/store/context";

const Hero = () => {
  const { chat, setChat } = useContext(ScrollContext);
  
  
  return (
    <div className="heroSection">
      <div className="left">
        <div className="greetings">hey there! my name's<br/> ricardo cambundo</div>
        <div className="description">
          Software developer &{" "}
          <span
            style={{ fontWeight: "600", cursor: "help" }}
            title="Computer Science"
          >
            CS
          </span>{" "}
          student
        </div>
        <div className="stat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>{" "}
          Huntsville, TX, USA
        </div>
        <div className="description" style={{ color: "grey" }}>
          Driven by curiosity and code.<br></br> Join me as I contribute to the
          digital world
        </div>

        <div className="stat1" style={{cursor: 'pointer'}} onClick={() => {
          setChat(true)
        }}>
          For Q&A, start a chat with CMBD support
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-down-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8.636 12.5a.5.5 0 0 1-.5.5H1.5A1.5 1.5 0 0 1 0 11.5v-10A1.5 1.5 0 0 1 1.5 0h10A1.5 1.5 0 0 1 13 1.5v6.636a.5.5 0 0 1-1 0V1.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5"
            />
            <path
              fill-rule="evenodd"
              d="M16 15.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L6.146 6.854a.5.5 0 1 1 .708-.708L15 14.293V10.5a.5.5 0 0 1 1 0z"
            />
          </svg>
        </div>

        <div className="contacts">
            <div className="resume" onClick={() => {
                window.open('https://drive.google.com/file/d/1eIsH-NYiKXEGzGKJF-Z49Lqs0uPWappY/view?usp=sharing')
            }}>
                Resume <i className="bi bi-file-earmark-text"></i>
            </div>
            <i onClick={() => {
                window.open('https://linkedin.com/in/ricardo-cambundo-bab2a0210')
            }} className="bi bi-linkedin" style={{color: '#bebebe', cursor: 'pointer'}}></i>
            <i onClick={() => {
                window.open('https://github.com/Ricardo-Cambundo')
            }} className="bi bi-github" style={{color: '#bebebe', cursor: 'pointer'}}></i>
            <i onClick={() => {
                window.open('mailto:ricardocmbd@gmail.com?subject=Hello my name is &body=I come from your portfolio website, ')
            }} className="bi bi-envelope" style={{color: '#bebebe', cursor: 'pointer'}}></i>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};
export default Hero;
