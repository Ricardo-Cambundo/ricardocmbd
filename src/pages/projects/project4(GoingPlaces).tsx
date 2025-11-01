import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import goingplaces from "../../assets/images/going_places.webp";
import goingplaces1 from "../../assets/images/goingplaces/goingplaces1.png";
import goingplaces2 from "../../assets/images/goingplaces/goingplaces2.png";
import goingplaces3 from "../../assets/images/goingplaces/goingplaces3.png";
import goingplaces4 from "../../assets/images/goingplaces/goingplaces4.png";


const Project4 = () => {
  const navigate = useNavigate();
    //@ts-ignore

  const { dark } = useContext(ScrollContext);
  const info = {
    title: "GoingPlaces",
    preDescription: "Car rental/sharing mobile application for IOS and Android",
highlight: null,
    warning: null,
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
          <div className="greetings" style={{color: dark && 'white'}}>{info?.title}</div>
          <div className="preDescription" style={{color: dark && '#c9c9c9ff'}}>{info?.preDescription}</div>
          <div className="dateInfo" style={{color: dark && '#c9c9c9ff'}}>
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
                <div key={ind} className="tag" style={{background: dark && '#243044ff', color: dark && 'white'}}>
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
                Chatrooms and push notifications for booking confirmations, reminders, and
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
            <h1>1. Location-based search and advanced filters such as vehicle type and other criteria</h1>
            <p>
              The system offers map-based, location-aware search to quickly find available vehicles in real-time within the user’s vicinity. It includes advanced filters such as vehicle type and other criteria, along with nearby sharing options for seamless ride-sharing and access to shared vehicles:
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
              <img src={goingplaces1} />
            </div>

            <h1>2. Detailed vehicle listings with key information</h1>
            <p>
              The system provides detailed vehicle listings with key information such as make, model, year, registration, and condition. It also includes service history, ownership records, specifications, photos, and visual customer reviews. This comprehensive overview aids in better management, easier searching, and informed decision-making for fleet or inventory management:
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
              <img src={goingplaces2} />
            </div>

            <h1>
              3. Real-time chatrooms and seamless booking tracking
            </h1>
            <p>
              The system includes a chatroom feature powered by WebSockets, enabling real-time, instant communication among users and vehicle owners. It also offers damange report options and seamless booking tracking, allowing users to efficiently monitor and manage reservations or appointments within the platform:
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
              The system features a seamless checkout process that includes options for vehicle protection plans and additional services such as pre-paid gas filling. It supports multiple payment methods, providing users with convenient and flexible payment options to enhance their rental experience:
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
                GoingPlaces is a robust car rental application. It offers a comprehensive suite of features all designed to enhance the user experience. It has many more screens. The app supports both Android and iOS platforms, ensuring accessibility for a wide range of users. If you're interested in exploring more or would like a quick demo, please feel free to contact me, and I’ll be happy to guide you through its capabilities.
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
