import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import { androidstudio, CopyBlock } from "react-code-blocks";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import { format } from "date-fns";
import goingplaces from "../../assets/images/going_places.webp";
import levelinvoice1 from "../../assets/images/levelinvoice/levelinvoice1.png";
import levelinvoice2 from "../../assets/images/levelinvoice/levelinvoice2.png";
import levelinvoice3 from "../../assets/images/levelinvoice/levelinvoice3.png";

const Project4 = () => {
  const navigate = useNavigate();
  const { dark } = useContext(ScrollContext);
  const info = {
    title: "GoingPlaces",
    preDescription: "Car rental/sharing mobile application for IOS and Android",

    description:
      "GoingPlaces is a user-friendly car rental/sharing app for iOS and Android, built with Python/Django and React Native. It offers real-time location-based search, secure authentication, personalized profiles, and a flexible booking process. Using PostgreSQL for scalable data management, the app features push notifications and geolocation integration to enhance user experience. Designed to streamline vehicle sharing and promote community-driven transportation, GoingPlaces makes renting and sharing cars easy and efficient.",
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
              <img src={goingplaces} />
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
                Real-time location-based search for available vehicles and
                nearby sharing options
              </li>
              <li>
                Flexible booking system with options for hourly, daily, and
                long-term rentals
              </li>
              <li>
                Integration with geolocation APIs for accurate vehicle tracking
                and navigation
              </li>
              <li>
                Push notifications for booking confirmations, reminders, and
                updates
              </li>
              <li>
                Management of vehicle availability, reservations, and user
                reviews
              </li>
              <li>
                Data management with scalable PostgreSQL database for reliable
                performance
              </li>
              <li>
                Support for sharing and community engagement features to promote
                resource utilization
              </li>
            </ul>
            <p>Let's see how some of these functionalities look like below.</p>
            <h1>1. Support for multiple invoice types</h1>
            <p>
              Support for multiple invoice types, including Standard Invoice,
              Receipt Invoice, Pro Forma Invoice, and Credit Notes for
              Cancellation and Correction, allowing businesses to handle various
              billing scenarios accurately and efficiently:
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
              {/* <img src={levelinvoice} /> */}
            </div>
            <h1>
              2. Analytics on invoicing activity, revenue, and outstanding
              balances
            </h1>
            <p>
              Comprehensive analytics on invoicing activity, including detailed
              insights into revenue generated, outstanding balances, payment
              trends, and overdue accounts, to help businesses make informed
              financial decisions and optimize cash flow management.
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
              <img src={levelinvoice1} />
            </div>

            <h1>3. SAF-T (Standard Audit File for Tax) file generation</h1>
            <p>
              Generation of SAF-T (Standard Audit File for Tax) files to enable
              precise and secure reporting of financial and tax information,
              ensuring full compliance with local tax authority regulations,
              supporting audit procedures, and simplifying the tax filing
              process for businesses:
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
              <img src={levelinvoice2} />
            </div>

            <h1>4. Verification of invoice authenticity</h1>
            <p>
              The system's invoice verification feature allows you to quickly
              assess the authenticity of invoices by simply scanning a QR code.
              This streamlined process ensures invoices are legitimate and
              compliant, helping to prevent fraud, reduce errors, and accelerate
              approval workflows with minimal effort:
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
              <img src={levelinvoice3} />
            </div>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                This is a highly tested and proven software solution that is
                already in use. It includes many more screens and features to
                streamline invoice management. Notably, several private,
                top-tier academic institutions in Angola are leveraging it to
                handle their invoice needs. If you're interested in seeing more
                or would like a quick demo, feel free to email me, and I’ll be
                happy to walk you through it.
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
export default Project4;
