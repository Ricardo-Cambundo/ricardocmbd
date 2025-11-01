import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import angotrans from "../../assets/images/angotrans_site.webp";
import angotrans4 from "../../assets/images/angotransexpress/angotrans4.png";
import angotrans5 from "../../assets/images/angotransexpress/angotrans5.png";
import angotrans6 from "../../assets/images/angotransexpress/angotrans6.png";
import angotrans7 from "../../assets/images/angotransexpress/angotrans7.png";

const Project6 = () => {
  const navigate = useNavigate();
    //@ts-ignore

  const { dark } = useContext(ScrollContext);
  const info = {
    title: "AngoTrans Express website",
    preDescription:
      "Corporate website for a company specialized in road transport and cargo transportation solutions",
     warning:
      "This website is still in the works, but I thought I could just share some the features it currently has.",
    description:
      "This corporate website serves as a comprehensive information hub for a company specializing in road transport and cargo transportation solutions. It features detailed sections on services, fleet information, and the company's history, providing visitors with an in-depth understanding of offerings. The platform also includes a news portal to foster ongoing engagement. Additionally, an integrated admin dashboard enables staff to perform real-time content updates through a user-friendly interface, ensuring efficient management and dynamic content delivery.",
    read: 4,
    date: "2025-03-03",
    tags: [
      "React",
      "JavaScript",
      "Laravel/PHP",
      "PostgreSQL",
      "Google SMTP",
      "Twilio SMS",
      "Docker",
      "JWT",
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
              <img src={angotrans} />
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
                <div key={ind} className="tag" style={{background: dark && '#243044ff', color: dark && 'white'}}>
                  {tag}
                </div>
              );
            })}
          </div>

          {info?.warning && (
            <div className={dark ? "warning1" : "warning"}>{info?.warning}</div>
          )}

          <div className="content" style={{ color: dark && "white" }}>
            <hr />
            <p>{info?.description}</p>
            <h1>Core Functionalities</h1>
            <ul>
              <li>
                User-friendly corporate interface presenting detailed
                information about services, fleet, and company history to
                visitors.
              </li>
              <li>
                Responsive design ensuring optimal viewing experience across
                devices, enhancing user engagement and accessibility.
              </li>
              <li>
                Admin dashboard with no-code content management tools, allowing
                staff to easily update website content, news, and service
                information in real-time.
              </li>
              <li>
                Secure login and role-based access controls for administrative
                staff to manage sensitive content and maintain website
                integrity.
              </li>
                <li>Integrated news portal for publishing updates, company announcements, industry news, and engaging content for visitors.</li>
              <li>
                Analytics and tracking tools embedded within the platform to
                monitor visitor interactions and optimize content strategy.
              </li>
            </ul>
            <p>Let's see how some of these functionalities look like below.</p>
            <h1>
              1. User-friendly corporate interface presenting detailed information
            </h1>
            <p>
              A user-friendly corporate interface designed to provide visitors with comprehensive and easily accessible information about the company's range of services, the extensive fleet of assets and background of the company, ensuring an engaging and informative experience for all users:
            </p>
            <div className={`${dark ? "imageContainer-light" : "imageContainer"}`} style={{display: 'flex', flexDirection: 'column', gap: 20, padding: 0}}>
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
                  <img src={angotrans4} className="2pc" />
                </div>
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
                  <img src={angotrans5} className="2pc" />
                </div>
            </div>
            <h1>2. Admin dashboard </h1>
            <p>
              An advanced admin dashboard equipped with no-code content management tools, enabling staff members to effortlessly update and maintain website content, news, and service information in real-time without requiring technical expertise. Additionally, the platform includes integrated analytics and tracking tools that allow administrators to monitor visitor interactions, engagement metrics, and user behavior. These insights help optimize content strategies, improve user experience, and ensure the website remains dynamic, relevant, and aligned with organizational goals:
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
              <img src={angotrans7} className="2pc" />
            </div>

            <h1>
              3. Integrated news portal
            </h1>
            <p>
             An integrated news portal designed to seamlessly publish and showcase a wide range of updates, including company announcements, industry news, and engaging content tailored for visitors. This platform enables the organization to communicate important information effectively, keep stakeholders informed, and foster ongoing engagement by providing timely and relevant news in a centralized, easily accessible format:
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
              <img src={angotrans6} className="2pc" />
            </div>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                This software solution is
                already in use. It includes many more screens and features to
                serves as a comprehensive information hub for a company. If you're interested in seeing more or would
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
export default Project6;
