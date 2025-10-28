import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import { androidstudio, CopyBlock } from "react-code-blocks";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import { format } from "date-fns";
import angotrans from "../../assets/images/angotrans.webp";
import angotrans1 from "../../assets/images/angotransexpress/angotrans1.png";
import angotrans2 from "../../assets/images/angotransexpress/angotrans2.png";
import angotrans3 from "../../assets/images/angotransexpress/angotrans3.png";


const Project9 = () => {
  const navigate = useNavigate();
  const { dark } = useContext(ScrollContext);
  const info = {
    title: "AngoTrans Express",
    preDescription: "Real-time bus tracking mobile app for IOS and Android",

    description:
      "AngoTrans is a sleek and intuitive mobile application designed for real-time bus tracking on iOS and Android devices. Built with React Native, Laravel, and Google Maps API, it provides passengers with live GPS updates, accurate ETAs, and congestion alerts to improve their commuting experience. The app features personalized notifications via Firebase and Twilio, offering real-time distance and time estimates, route delays, and service alerts. With an easy-to-use interface and dynamic map visuals, GoingPlaces ensures travelers stay informed and connected, streamlining urban transit and making daily travel more predictable and hassle-free.",
    read: 2,

    // warning:
    //   "The application is accessible only within organization's internal network, with no public-facing URL. Currently working on a live demo environment for demonstration purposes.",
    // date: "2025-03-03",
    tags: [
      "React Native",
      "JavaScript",
      "JWT",
      "PostgreSQL",
      "Laravel/PHP",
      "Firebase",
      "Websockets",
      "IOS",
      "Android",
    ],
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="homeBodyContainer">
      <Header />
      <div className="page" style={{ paddingTop: 40 }}>
        {/* <div className="greetings">contact me</div> */}
        <div
          onClick={() => {
            navigate(-1);
          }}
          className={`${dark ? "backHome-light" : "backHome"}`}
          style={{
            marginTop: 0,
            display: "inline",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-arrow-left"></i> go back
        </div>
        <div id="featuredSection" className="blogPage">
          <div className="image">
            {/* <span
              style={{
                background: dark && "#c4c4c4ff",
                color: dark && "black",
                borderColor: dark && "#eeeeee",
              }}
            >
              <i style={{ marginRight: 10 }} className="bi bi-image-fill"></i>
              {1} image
            </span> */}
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
              style={{
                overflow: "hidden",
                maxHeight: 500,
                position: "relative",
                padding: 0,
              }}
            >
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={angotrans} />
            </div>
          </div>
          <div className="greetings">{info?.title}</div>
          <div className="preDescription">{info?.preDescription}</div>
          <div className="dateInfo">
            {/* <div
              className="date"
              style={{
                borderRight: "1px solid #eeeeee",
                paddingRight: 20,
                marginRight: 8,
              }}
            >
              <i className="bi bi-calendar-event"></i>
              {format(new Date(), "MMMM d, yyyy")}
            </div> */}

            <div className="date">
              <i className="bi bi-hourglass-split"></i> {info?.read} min read
            </div>
          </div>
          <div className="postTags">
            {[...(info?.tags || [])].map((tag: any, ind: number) => {
              return (
                <div key={ind} className="tag">
                  {tag}
                </div>
              );
            })}
          </div>

          {info?.highlight && (
            <div className={dark ? "highlight1" : "highlight"}>
              {info?.highlight}
            </div>
          )}
          {info?.warning && (
            <div className={dark ? "warning1" : "warning"}>{info?.warning}</div>
          )}

          <div className="content" style={{ color: dark && "white" }}>
            <hr />
            <p>{info?.description}</p>
            <h1>Core Functionalities</h1>
            <ul>
              <li>
                Secure user authentication and personalized profiles for
                seamless access
              </li>
              <li>
                Real-time GPS tracking and live bus location updates for
                accurate arrivals
              </li>
              <li>
                Personalized notifications via SMS and push alerts for arrival
                times and delays
              </li>
              <li>
                Interactive maps with congestion and delay indicators, refreshed
                every 15 seconds
              </li>
              <li>
                Route management with color-coded visuals for easy navigation
                and delay detection
              </li>
              <li>
                Scalable backend using Laravel and PostgreSQL to handle high traffic
                and data reliability
              </li>
              <li>
                User engagement features such as service alerts, schedule
                updates, and personalized preferences
              </li>
            </ul>
            <p>Let's see how some of these functionalities look like below.</p>
            <h1>
              1. Real-time GPS tracking and live bus location updates for
                accurate arrivals
            </h1>
            <p>
              Provides real-time GPS tracking and live bus location updates, ensuring accurate and up-to-date information on bus arrivals. This feature helps users monitor bus positions in real-time, enabling better planning and improved transportation efficiency through the mobile app:
            </p>
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
              style={{
                overflow: "hidden",
                maxHeight: 500,
                position: "relative",
                padding: 0,
              }}
            >
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={angotrans1} />
            </div>

            <h1>2. Personalized notifications via SMS and push alerts for arrival times and delays</h1>
            <p>
              Offers personalized notifications through SMS and push alerts to inform users about bus arrival times, delays, and service updates. This feature ensures timely communication, enhancing the user experience by keeping passengers informed and allowing for better trip planning:
            </p>

            {/* <h1>Upcoming Topics</h1> */}
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
              style={{
                overflow: "hidden",
                maxHeight: 500,
                position: "relative",
                padding: 0,
              }}
            >
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={angotrans2} />
            </div>

            <h1>3. Secure user authentication and personalized profiles for seamless access</h1>
            <p>
              Implement OTP-based authentication to ensure secure user verification and prevent SMS from being sent to wrong numbers. Additionally, provide users with the ability to manage and update their personal details within their profiles. This combination ensures seamless, protected access while maintaining data accuracy and privacy:
            </p>
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
              style={{
                overflow: "hidden",
                maxHeight: 500,
                position: "relative",
                padding: 0,
              }}
            >
              <img loading="lazy" src={angotrans3} />
            </div>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                Angotrans is a robust bus tracking app. It offers a
                comprehensive suite of features all designed to enhance the user
                experience. It has many more screens. The app supports both
                Android and iOS platforms, ensuring accessibility for a wide
                range of users. If you're interested in exploring more or would
                like a quick demo, please feel free to contact me, and I’ll be
                happy to guide you through its capabilities.
              </p>
            </footer>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/projects");
          }}
          className={`${dark ? "backHome-light" : "backHome"}`}
          style={{
            marginTop: 20,
            display: "block",
            cursor: "pointer",
            textAlign: "right",
            alignSelf: "flex-end",
            marginLeft: "auto",
            width: "120px",
          }}
        >
          more projects <i className="bi bi-arrow-right"></i>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Project9;
