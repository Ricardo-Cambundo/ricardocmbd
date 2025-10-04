import React, { useState } from "react";
import "../css/featured.css";
import levelrh from '../assets/images/levelrh.webp'
import levelinvoice from '../assets/images/levelinvoice.webp'
import navia from '../assets/images/navia.webp'
import going from '../assets/images/going_places.webp'
import { useNavigate } from "react-router-dom";
import { Blurhash } from "react-blurhash";

const OptimizedImage = React.memo(({ src, alt }: {src: any, alt?: any}) => {
  const [loaded, setLoaded] = useState(false);

  return(
    <>
    {!loaded && (
        <Blurhash hash={'L7QJfn_N000000-;M{ay00-;t7M{'} width="92%" height="92%" resolutionX={32} resolutionY={32} punch={1} />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          display: loaded ? 'block' : 'none',
          height: 'auto',
        }}
        onLoad={() => setLoaded(true)}
      />
    </>
)});

const Featured = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([
    {
      title: "Level RH",
      description:
        "Highly tested and used complete human resource management system for employee tracking, payroll and much more",
      image: levelrh,
      tags: ["AngularJS", "JavaScript", "Laravel/PHP", "PostgreSQL", "Google SMTP", "Twilio SMS", "Docker", "JWT"],
      source: true,
    },
    {
      title: "Level Invoice",
      description:
        "Highly tested and used web-based platform for generating, tracking, automating invoices and much more",
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
      tags: ["React Native", "JavaScript", "Django", "Python", "JWT", "PostgreSQL",  "Firebase", "Websockets"],
      source: true

    },
  ]);
  return (
    <div className="skillsContainer" id="featuredSection">
      <div className="sectionTitle">
        featured projects{" "}
        <span onClick={() => {
          navigate('/projects')
        }}>
          view more <i className="bi bi-arrow-right-short"></i>
        </span>
      </div>
      <div className="projects">
        {posts.map((i: any, index: number) => {
          return(
            <div className="project" key={index}>
              <div className="imageContainer">
                <OptimizedImage src={i?.image} alt={i?.title} />
                
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
