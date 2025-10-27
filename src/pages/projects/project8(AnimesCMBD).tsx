import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import { androidstudio, CopyBlock } from "react-code-blocks";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import { format } from "date-fns";
import animescmbd from "../../assets/images/animescmbd.webp";
import animescmbd1 from "../../assets/images/animescmbd/animescmbd1.png";
import animescmbd2 from "../../assets/images/animescmbd/animescmbd2.png";
import animescmbd3 from "../../assets/images/animescmbd/animescmbd3.png";

const Project8 = () => {
  const navigate = useNavigate();
  const { dark } = useContext(ScrollContext);
  const info = {
    title: "AnimesCMBD",
    preDescription: "Anime cataloging mobile app for IOS and Android",
    highlight:
      "This is my first mobile application and the one I'm most proud of haha. I had a lot of fun building this one.",
    description:
      "AnimesCMBD is a user-friendly mobile app for iOS and Android designed for anime enthusiasts. Built with Python/Django and React Native, it offers a comprehensive cataloging experience with features like personalized collections, advanced search filters, user reviews and ratings, and tailored recommendations. The app integrates external APIs to enrich anime metadata, ensuring users have access to detailed information about their favorite series. With secure authentication, seamless cross-platform performance, and a clean, intuitive interface, AnimeCollector makes managing and discovering anime a fun and engaging experience.",
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
              <img src={animescmbd} />
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
                seamless access to your anime collection
              </li>
              <li>
                Advanced search filters to find anime by genre, release year,
                popularity, and more
              </li>
              <li>
                Ability to create and manage personalized anime lists, including
                favorites, watchlist, and completed series
              </li>
              <li>
                Integration with external anime APIs to enrich metadata with
                episodes, summaries, and images
              </li>
              <li>
                User reviews and ratings to share your opinions and discover
                popular titles
              </li>
              <li>
                Recommendations engine based on your viewing habits and
                preferences
              </li>
              <li>
                Dark Mode support for comfortable viewing in low-light
                environments
              </li>

              <li>
                Data management with a scalable PostgreSQL database for reliable
                performance
              </li>
              <li>
                Community features such as comment sections and discussion
                forums to engage with fellow anime fans
              </li>
            </ul>
            <p>Let's see how some of these functionalities look like below.</p>
            <h1>
              1. Advanced search filters and integration with anime API
            </h1>
            <p>
              The system integrates with external anime APIs to enrich metadata with episode details, summaries, and images. It features advanced search filters allowing users to find anime by genre, release year, popularity, and other criteria, enabling comprehensive and efficient catalog browsing:
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
              <img src={animescmbd1} />
            </div>

            <h1>2. Reviews, ratings, and discussions and recommendations</h1>
            <p>
            The platform includes user reviews and ratings for sharing opinions and discovering popular titles. Community features like comment sections and discussion forums facilitate engagement among anime fans. A personalized recommendations engine suggests titles based on viewing habits and preferences:
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
              <img src={animescmbd2} />
            </div>

            <h1>3. Dark mode support</h1>
            <p>
              Supports Dark Mode to provide a comfortable viewing experience in low-light environments, minimizing eye strain and enabling seamless use during nighttime or dimly lit conditions. This feature enhances user comfort and accessibility:
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
              <img loading="lazy" src={animescmbd3} />
            </div>


            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                AnimesCMBD is a robust anime cataloging application. It offers a
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
export default Project8;
