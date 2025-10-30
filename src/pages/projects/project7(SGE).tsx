import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import { androidstudio, CopyBlock } from "react-code-blocks";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import { format } from "date-fns";
import sge from "../../assets/images/sge.webp";
import sge1 from "../../assets/images/sge/sge1.png";
import sge2 from "../../assets/images/sge/sge2.png";
import sge3 from "../../assets/images/sge/sge3.png";
import sge4 from "../../assets/images/sge/sge4.png";

const Project7 = () => {
  const navigate = useNavigate();
  const { dark } = useContext(ScrollContext);
  const info = {
    title: "SGE - Internship Management System",
    preDescription:
      "Already in use, this is an enterprise platform for academic/medical internship coordination",
    description:
      "A comprehensive and user-friendly platform that simplifies internship coordination for organizations. It includes customizable dashboards and data visualizations to monitor intern progress, performance, and compliance. The system features integrated email and SMS notifications to keep interns, mentors, and staff informed and engaged. Built with a multi-role architecture, it provides tailored interfaces for educational institutions, companies, mentors, and interns, enabling efficient program management, task delegation, documentation, and analytics. Supporting over 500 interns annually, the platform enhances collaboration, oversight, and operational efficiency across multiple organizational partners.",
    read: 4,
    warning:
      "The application is accessible only within organization's internal network, with no public-facing URL. Currently working on a live demo environment for demonstration purposes.",
    date: "2025-03-03",
    tags: [
      "AngularJS",
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
              <img src={sge} />
            </div>
          </div>
          <div className="greetings" >{info?.title}</div>
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
                Attendance and activity tracking with detailed analytics,
                providing insights into intern participation and engagement
              </li>
              <li>
                Automated progress summaries, evaluation reports, and
                documentation management to streamline program oversight
              </li>
              <li>
                Digital libraries for easy access to training materials,
                resources, and documentation
              </li>
              <li>
                Polls and voting features for quick decision-making and feedback
                collection from interns and staff
              </li>
              <li>
                Quick info gathering tools such as surveys and forms to gather
                feedback, assessments, and other data efficiently
              </li>
              <li>
                Tracking internship milestones, task assignments, and progress
                updates for interns
              </li>
              <li>
                Management of intern personal details and enrollment information
              </li>
            </ul>
            <p>Let's see how some of these functionalities look like below.</p>
            <h1>
              1. Attendance and activity tracking
            </h1>
            <p>
              The internship management system includes comprehensive attendance and activity tracking features, capturing real-time employee and intern check-ins, check-outs, and engagement activities. Coupled with advanced statistical reporting, it enables managers to monitor participation, identify trends, and optimize resource allocation efficiently:
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
              <img src={sge1} className="2pc" />
            </div>
            <h1>2. Digital libraries </h1>
            <p>
              Digital libraries offer a centralized digital repository for organizational resources such as documents, research, and multimedia. They enable efficient search, secure access, and management of digital assets, supporting remote use and seamless knowledge sharing through metadata tagging, user controls, and integration with other systems:
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
              <img src={sge2} />
            </div>
<h1>3. Tracking intern personal details, enrollment info, milestones and progress</h1>
            <p>
              The system manages intern personal details and enrollment, tracks milestones, assigns tasks, and monitors progress updates through an integrated dashboard. This provides real-time oversight and streamlined intern management:
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
              <img src={sge4} className="2pc" />
            </div>
            <h1>
              4. Polls and voting features
            </h1>
            <p>
              Polls and voting features enable quick, secure, and transparent decision-making within the organization. They allow users to create, distribute, and manage polls or votes, collect responses in real time, and generate results automatically. These tools support anonymous or identified voting, ensuring privacy and integrity for effective participative processes:
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
              <img src={sge3} />
            </div>

            

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                This is a tested and proven internship management system that is actively in use. It offers numerous features and a user-friendly interface to streamline intern management processes. Notably, several private, top-tier educational institutions and clinics in Angola have adopted this solution to efficiently manage their intern programs. If you're interested in learning more or would like a quick demo, please feel free to email me, and I’ll be happy to walk you through it.
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
export default Project7;
