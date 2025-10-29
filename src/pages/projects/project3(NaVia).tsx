import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import { androidstudio, CopyBlock } from "react-code-blocks";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import { format } from "date-fns";
import navia from "../../assets/images/navia.webp";
import navia1 from "../../assets/images/navia/navia1.png";
import goingplaces2 from "../../assets/images/goingplaces/goingplaces2.png";
import goingplaces3 from "../../assets/images/goingplaces/goingplaces3.png";
import goingplaces4 from "../../assets/images/goingplaces/goingplaces4.png";

const Project3 = () => {
  const navigate = useNavigate();
  const { dark } = useContext(ScrollContext);
  const info = {
    title: "NaVia",
    preDescription:
      "Cross-platform m-commerce app with courier logistics (IOS/Android)",

    description:
      "NaVia is a powerful cross-platform m-commerce app with integrated courier logistics for iOS and Android, built with React Native and Laravel. It offers live package tracking with Google Maps, providing real-time delivery status updates. The app features order management, seller analytics, inventory tools, and dynamic pricing. With push notifications via Twilio and Firebase, users stay informed about orders and deliveries. Its intuitive UI and engaging animations deliver a seamless, efficient experience, simplifying logistics and commerce in one unified platform.",
    read: 2,

    // warning:
    //   "The application is accessible only within organization's internal network, with no public-facing URL. Currently working on a live demo environment for demonstration purposes.",
    // date: "2025-03-03",
    tags: [
      "React Native",
      "JavaScript",
      "Django",
      "Python",
      "JWT",
      "PostgreSQL",
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
              <img src={navia} />
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
                Live package tracking with Google Maps for real-time delivery
                updates
              </li>
              <li>
                Order management system with detailed delivery status and
                history
              </li>
              <li>
                Integration with geolocation APIs for precise route navigation
                and tracking
              </li>
              <li>
                Push notifications via Twilio and Firebase for order and
                delivery alerts
              </li>
              <li>
                 Beautiful, intuitive UI with engaging animations and micro-interactions
              </li>
              <li>
                Product management features including bulk uploads, variants,
                and dynamic pricing
              </li>
              <li>
                Scalable backend with Laravel and MySQL ensuring reliable
                performance
              </li>
            </ul>
            <p>Let's see how some of these functionalities look like below.</p>
            <h1>
              1. Live package tracking with Google Maps for real-time delivery
                updates
            </h1>
            <p>
              Live package tracking with Google Maps for real-time delivery updates, allowing users to monitor their shipments on an interactive map, view estimated delivery times, and receive instant notifications about the current status and location of their packages as they move through the delivery process:
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
              <img src={navia1} />
            </div>

            <h1>2. Product management features including graphs, bulk uploads, variants, and dynamic pricing</h1>
            <p>
              Product management features including detailed analytics with interactive graphs, support for bulk uploads of multiple products, handling of product variants such as sizes and colors, and the ability to set and adjust dynamic pricing rules to optimize sales and inventory control:
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
              <img src={navia1} />
            </div>

            <h1>3.  Intuitive UI and delivery programming</h1>
            <p>
              Beautiful, intuitive UI with engaging animations, smooth micro-interactions, high-quality image slides for products, and an easy checkout process that allows users to schedule deliveries for a later date, ensuring a seamless and flexible shopping experience:
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
              <img loading="lazy" src={goingplaces3} />
            </div>

            <h1>4. Seamless checkout process</h1>
            <p>
              The system features a seamless checkout process that includes
              options for vehicle protection plans and additional services such
              as pre-paid gas filling. It supports multiple payment methods,
              providing users with convenient and flexible payment options to
              enhance their rental experience:
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
              <img src={goingplaces4} />
            </div>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                GoingPlaces is a robust car rental application. It offers a
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
export default Project3;
