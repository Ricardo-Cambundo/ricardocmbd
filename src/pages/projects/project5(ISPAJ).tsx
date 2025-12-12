import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import ispaj from "../../assets/images/ispaj 1.svg";
import ispaj1 from "../../assets/images/ispaj/ispaj1.svg";
import ispaj2 from "../../assets/images/ispaj/ispaj2.svg";
import ispaj3 from "../../assets/images/ispaj/ispaj3.svg";
import ispaj4 from "../../assets/images/ispaj/ispaj4.svg";
import ispaj5 from "../../assets/images/ispaj/ispaj5.svg";
import ispaj6 from "../../assets/images/ispaj/ispaj6.svg";

const Project5 = () => {
  const navigate = useNavigate();
  //@ts-ignore

  const { dark } = useContext(ScrollContext);
  const info = {
    title: "ISPAJ",
    preDescription:
      "Official website for one of Angola's biggest Higher Polytechnic Institute with 10k+ monthly visitors",
    highlight:
      "ISPAJ is one of Angola's biggest private superior academic institutions. Fun fact: I worked there for a while as a software developer and network technician.",
    warning: null,
    description:
      "The official website for Instituto Superior Politécnico Alvorecer da Juventude (ISPAJ), one of Angola’s leading Higher Polytechnic Institutes with over 10,000 monthly visitors, is built using React.js and Laravel to deliver a fast, reliable, and scalable platform with 99.9% uptime. It features a custom CMS for managing news, academic programs, events, and documents, with role-based access control and automated reminders to keep users engaged and informed. The admin panel provides real-time traffic analytics, geographic and demographic insights, and granular user permissions through JWT authentication, enabling efficient content management and data-driven decision-making. Performance has been optimized through query enhancements and lazy-loading techniques, ensuring a seamless and responsive experience for students, faculty, and visitors",
    read: 4,
    date: "2025-03-03",
    tags: [
      "React",
      "JavaScript",
      "Laravel/PHP",
      "PostgreSQL",
      "Google SMTP",
      "RestAPIs",
      "JWT",
      "10k+ visitors/month",
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
              {" "}
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={ispaj} />
            </div>
          </div>
          <div className="greetings" style={{ color: dark && "white" }}>
            {info?.title}
          </div>
          <div
            className="preDescription"
            style={{ color: dark && "#c9c9c9ff" }}
          >
            {info?.preDescription}
          </div>
          <div className="dateInfo" style={{ color: dark && "#c9c9c9ff" }}>
            {/* <div
              className="date"
              style={{
                borderRight: "1px solid #eeeeee",
                paddingRight: 20,
                marginRight: 8,
              }}
            >
              <i className="bi bi-calendar-event"></i>{" "}
              {format(new Date(), "MMMM d, yyyy")}
            </div> */}

            <div className="date">
              <i className="bi bi-hourglass-split"></i> {info?.read} min read
            </div>
          </div>
          <div className="postTags">
            {[...(info?.tags || [])].map((tag: any, ind: number) => {
              return (
                <div
                  key={ind}
                  className="tag"
                  style={{
                    background: dark && "#243044ff",
                    color: dark && "white",
                  }}
                >
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
                User-friendly interface presenting detailed information about
                services, academic programs, and the institute’s history to
                visitors.
              </li>
              <li>
                Responsive design ensuring optimal viewing experience across all
                devices, enhancing user engagement and accessibility.
              </li>
              <li>
                Admin dashboard with no-code content management tools, enabling
                staff to easily update website content, news, events, and
                documents in real-time.
              </li>
              <li>
                Secure login and role-based access controls for administrative
                staff to manage sensitive content and ensure website integrity.
              </li>
              <li>
                Integrated news portal for publishing updates, announcements,
                industry news, and engaging content to keep visitors informed.
              </li>
              <li>Document library for easy access to PDFs, forms, transcripts, policies, and other important documents.</li>

              <li>
                Analytics and tracking tools embedded within the platform to
                monitor visitor interactions and help optimize content strategy.
              </li>
            </ul>
            <p>Let's see how some of these functionalities look like below.</p>
            <h1>
              1. User-friendly interface
            </h1>
            <p>
              An intuitive and easy-to-navigate design that allows visitors to quickly access information about services, programs, and the institute’s history without any technical barriers:
            </p>
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 0,
              }}
            >
              <div
                className={`${
                  dark ? "imageContainer-light" : "imageContainer"
                }`}
                style={{
                  overflow: "hidden",
                  maxHeight: 500,
                  position: "relative",
                  padding: 0,
                }}
              >
                {" "}
                {/* <img loading="lazy" src={levelinvoice} /> */}
                <img src={ispaj2} className="2pc" />
              </div>
              <div
                className={`${
                  dark ? "imageContainer-light" : "imageContainer"
                }`}
                style={{
                  overflow: "hidden",
                  maxHeight: 500,
                  position: "relative",
                  padding: 0,
                }}
              >
                {" "}
                {/* <img loading="lazy" src={levelinvoice} /> */}
                <img src={ispaj1} className="2pc" />
              </div>
            </div>
            <h1>2. Integrated news and events portal</h1>
            <p>
             The integrated news and events portal enables the institute to publish and manage updates, announcements, and industry news in real-time. It includes advanced filters, allowing users to easily browse and find relevant information about upcoming events, latest developments, and important notices, fostering ongoing engagement and effective communication:
            </p>
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 0,
              }}
            >
              <div
                className={`${
                  dark ? "imageContainer-light" : "imageContainer"
                }`}
                style={{
                  overflow: "hidden",
                  maxHeight: 500,
                  position: "relative",
                  padding: 0,
                }}
              >
                {" "}
                {/* <img loading="lazy" src={levelinvoice} /> */}
                <img src={ispaj3} className="2pc" />
              </div>
              <div
                className={`${
                  dark ? "imageContainer-light" : "imageContainer"
                }`}
                style={{
                  overflow: "hidden",
                  maxHeight: 500,
                  position: "relative",
                  padding: 0,
                }}
              >
                {" "}
                {/* <img loading="lazy" src={levelinvoice} /> */}
                <img src={ispaj4} className="2pc" />
              </div>
            </div>

            <h1>3. Admin dashboard </h1>
            <p>
              An advanced admin dashboard equipped with no-code content management tools, enabling staff members to effortlessly update and maintain website content, news, and service information in real-time without requiring technical expertise. Additionally, the platform includes integrated analytics and tracking tools that allow administrators to monitor visitor interactions, engagement metrics, and user behavior. These insights help optimize content strategies, improve user experience, and ensure the website remains dynamic, relevant, and aligned with organizational goals:
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
              {" "}
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={ispaj5} className="2pc" />
            </div>

            <h1>4. Document Library </h1>
            <p>
              The document library offers organized and easy access to PDFs, forms, transcripts, policies, and other essential documents. It enables students, staff, and visitors to quickly find and download important files, streamlining administrative processes and ensuring that vital information is readily available when needed:
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
              {" "}
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={ispaj6} className="2pc" />
            </div>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                This software solution is already in use. It includes many more
                screens and features to serves as a comprehensive information
                hub for the institution. If you're interested in seeing more or would
                like a quick demo, feel free to email me, and I’ll be happy to
                walk you through it.
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
export default Project5;
