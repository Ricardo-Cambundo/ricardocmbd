import React, { useContext, useState } from "react";
import "../css/featured.css";
import levelrh from '../assets/images/levelrh.webp'
import levelinvoice from '../assets/images/levelinvoice.webp'
import navia from '../assets/images/navia.webp'
import going from '../assets/images/going_places.webp'
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";

const OptimizedImage = React.memo(({ src, alt }: {src: any, alt?: any}) => {
    //@ts-ignore

  const [loaded, setLoaded] = useState(true);

  return(
    <>
    {!loaded && (
        <></>
      )}
      <img
      loading="lazy"
        src={src}
        alt={alt}
        style={{
          // display: loaded ? 'block' : 'none',
          height: 'auto',
        }}
        // onLoad={() => setLoaded(true)}
      />
    </>
)});

const Featured = () => {
  const navigate = useNavigate()
  //@ts-ignore
  const { dark } = useContext(ScrollContext)
  //@ts-ignore

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Level RH",
      description:
        "Highly tested and used complete human resource management system for employee tracking, payroll and much more",
      image: levelrh,
      tags: ["AngularJS", "JavaScript", "Laravel/PHP", "PostgreSQL", "Google SMTP", "Twilio SMS", "Docker", "JWT"],
      source: true,
    },
    {
      id: 2,
      title: "Level Invoice",
      description:
        "Highly tested and used web-based platform for generating, tracking, automating invoices and much more",
      image: levelinvoice,
      tags: ["AngularJS", "JavaScript", "Laravel/PHP", "PostgreSQL", "Google SMTP", "Twilio SMS", "Docker", "JWT"],
      source: true

    },
    {
      id: 3,
      title: "NaVia",
      description:
        "Cross-platform m-commerce app with courier logistics (IOS/Android)...",
      image: navia,
      tags: ["React Native", "TypeScript", "JWT", "PostgreSQL", "Laravel/PHP", "Firebase", "Websockets"],
      source: true
    },
    {
      id: 4,
      title: "GoingPlaces",
      description:
        "Car rental/sharing mobile application for IOS and Android...",
      image: going,
      tags: ["React Native", "JavaScript", "Django", "Python", "JWT", "PostgreSQL",  "Firebase", "Websockets"],
      source: true

    },
  ]);
  return (
    <div className="skillsContainer" id="featuredSection">
      <div className="sectionTitle" style={{color: dark && 'white' }}>
        featured projects{" "}
        <span onClick={() => {
          navigate('/projects')
        }} style={{color: dark && '#e3e3e3' }}>
          view more <i className="bi bi-arrow-right-short"></i>
        </span>
      </div>
      <div className="projects">
        {posts.map((i: any, index: number) => {
          return(
            <div className="project" key={index} onClick={() => {
            navigate(`/projects/${i?.id}`)
          }} style={{borderColor: dark && '#243044ff'}}>
              <div className="imageContainer">
                <OptimizedImage src={i?.image} alt={i?.title} />
                
              </div>
              <div className="projectInfo">
                <div className="projectTitle" style={{color: dark && 'white'}}>{i?.title}</div>
                <div className="projectDescription" style={{color: dark && '#c9c9c9ff'}}>{i?.description}</div>
                <div className="projectTags">
                  {[...i?.tags||[]].map((tag: any, ind: number) => {
                    return (
                      <div className="projectTag" key={ind} style={{background: dark && '#243044ff', color: dark && 'white'}}>
                        {tag}
                      </div>
                    )
                  })}
                </div>
                <div className="projectLinks">
                  {i?.source && <div style={{background: dark && '#eeeeee', color: dark && 'black' }} className="projectLink"><i className="bi bi-github"></i> Source</div>}
                  <div className="projectLink" style={{background: dark && '#eeeeee', color: dark && 'black' }} ><i className="bi bi-info-circle-fill"></i>Read more</div>
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
