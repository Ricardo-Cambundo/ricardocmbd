import { useState } from "react";
import "../css/featured.css";
import levelrh from '../assets/images/levelrh.png'
import levelinvoice from '../assets/images/levelinvoice.png'
import navia from '../assets/images/navia.png'
import going from '../assets/images/going_places.png'

const Featured = () => {
  const [posts, setPosts] = useState([
    {
      title: "Level RH",
      description:
        "Complete human resource management system for employee tracking, payroll and much more...",
      image: levelrh,
      tags: ["AngularJS", "JavaScript", "Laravel/PHP", "PostgreSQL", "Google SMTP", "Twilio SMS", "Docker", "JWT"],
      source: true,
    },
    {
      title: "Level Invoice",
      description:
        "Web-based platform for generating, tracking, and automating invoices...",
      image: levelinvoice,
      tags: ["AngularJS", "JavaScript", "Laravel/PHP", "PostgreSQL", "Google SMTP", "Twilio SMS", "Docker", "JWT"],
      source: true

    },
    {
      title: "NaVia",
      description:
        "Cross-platform m-commerce app with courier logistics (IOS/Android)...",
      image: navia,
      tags: ["React Native", "TypeScript", "JWT", "PostgreSQL", "Laravel/PHP", "Firebase", "Websockets"],
      source: true
    },
    {
      title: "GoingPlaces",
      description:
        "Car rental/sharing mobile application for IOS and Android...",
      image: going,
      tags: ["React Native", "JavaScript", "JWT", "PostgreSQL", "Laravel/PHP", "Firebase", "Websockets"],
      source: true

    },
  ]);
  return (
    <div className="skillsContainer" id="featuredSection">
      <div className="sectionTitle">
        featured projects{" "}
        <span>
          view more <i className="bi bi-arrow-right-short"></i>
        </span>
      </div>
      <div className="projects">
        {posts.map((i: any, index: number) => {
          return(
            <div className="project" key={index}>
              <div className="imageContainer">
                <img src={i?.image} style={{}}/>
                
              </div>
              <div className="projectInfo">
                <div className="projectTitle">{i?.title}</div>
                <div className="projectDescription">{i?.description}</div>
                <div className="projectTags">
                  {[...i?.tags||[]].map((tag: any, ind: number) => {
                    return (
                      <div className="projectTag" key={ind}>
                        {tag}
                      </div>
                    )
                  })}
                </div>
                <div className="projectLinks">
                  {i?.source && <div className="projectLink"><i className="bi bi-github"></i> Source</div>}
                  <div className="projectLink"><i className="bi bi-info-circle-fill"></i>Read more</div>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  );
};
export default Featured;
