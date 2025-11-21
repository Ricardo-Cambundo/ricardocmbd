import React, { useContext, useState } from "react";
import "../css/featured.css";
import levelrh from "../assets/images/levelrh 1.svg";
import levelinvoice from "../assets/images/levelinvoice 1.svg";
import navia from "../assets/images/navia 1.svg";
import going from "../assets/images/going_places 1.svg";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import lottie from "../components/loading6.svg";

const OptimizedImage = React.memo(({ src, alt }: { src: any; alt?: any }) => {
  //@ts-ignore

  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {!loaded && <></>}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        style={{
          // display: loaded ? 'block' : 'none',
          height: "auto",
        }}
        // onLoad={() => setLoaded(true)}
      />
    </>
  );
});

const Featured = () => {
  const navigate = useNavigate();
  //@ts-ignore
  const { dark } = useContext(ScrollContext);
  //@ts-ignore

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Level RH",
      description:
        "Highly tested and used complete human resource management system for employee tracking, payroll and much more",
      image: levelrh,
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
      source: false,
    },
    {
      id: 2,
      title: "Level Invoice",
      description:
        "Highly tested and used web-based platform for generating, tracking, automating invoices and much more",
      image: levelinvoice,
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
      source: false,
    },
    {
      id: 3,
      title: "NaVia",
      description:
        "Cross-platform m-commerce app with courier logistics (IOS/Android)...",
      image: navia,
      tags: [
        "React Native",
        "TypeScript",
        "JWT",
        "PostgreSQL",
        "Laravel/PHP",
        "Firebase",
        "Websockets",
      ],
      source: "https://github.com/Ricardo-Cambundo/navia_frontend.git",
    },
    {
      id: 4,
      title: "GoingPlaces",
      description:
        "Car rental/sharing mobile application for IOS and Android...",
      image: going,
      tags: [
        "React Native",
        "JavaScript",
        "Django",
        "Python",
        "JWT",
        "PostgreSQL",
        "Firebase",
        "Websockets",
      ],
      source: "https://github.com/Ricardo-Cambundo/GoingPlacesFront",
    },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="skillsContainer" id="featuredSection">
      <Dialog
        open={dialogOpen}
        onOpenChange={(e) => {
          setDialogOpen(e);
        }}
      >
        <DialogTrigger style={{ display: "none" }}></DialogTrigger>
        <DialogContent
          style={{
            width: "100%",
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            backgroundColor: dark && "#030712",
            borderColor: dark && "#283346ff",
          }}
          showCloseButton={false}
        >
          <DialogClose
            style={{
              position: "absolute",
              top: "6px",
              right: "16.5px",
              cursor: "pointer",
              color: dark ? "white" : "black",
              fontSize: "25px",
              background: "none",
              outline: "none",
              border: "none",
              zindex: 9999,
            }}
          >
            &times; {/* or your icon */}
          </DialogClose>

          <div
            style={{
              textAlign: "center",
              fontSize: 20,
              marginTop: 0,
              fontWeight: "600",
              color: dark && "white",
            }}
          >
            Private and restricted access
          </div>
          <div
            style={{
              textAlign: "center",
              color: "grey",
              fontSize: 14,
              color: dark && "white",
            }}
          >
            This repository is private and has restricted access. It cannot be
            displayed publicly unfortunately. If you'd like to see how my code
            works,{" "}
            <strong
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: !dark ? "#003796ff" : "#81adf8ff",
              }}
              onClick={() => {
                location.pathname != "/contact" && navigate("/contact");
              }}
            >
              please reach out
            </strong>{" "}
            and I'll be happy to go through it with you.
          </div>
          <div
            style={{
              paddingTop: 20,
              width: "100%",
              borderTop: "2px solid #e6e6e6",
              borderColor: dark && "#283346ff",
            }}
          ></div>
         <img src={lottie}
                 style={{
                       width: "100%",
                       aspectRatio: "4/2",
                       alignSelf: "center",
                       marginBlock: 10,
                       marginTop: -10
                     }}
                     className="lottieItem"/>
          <div
            style={{
              paddingTop: 20,
              width: "100%",
              borderTop: "2px solid #e6e6e6",
              borderColor: dark && "#283346ff",
            }}
          ></div>

          <div
            style={{
              textAlign: "center",
              fontSize: 13,
              marginTop: -20,
              color: dark && "white",
              paddingBottom: 20,
            }}
          >
            You're probably wondering,{" "}
            <strong>"Why show the GitHub button?"</strong>
            <strong> First</strong>, it indicates the project is in a Git repo
            (good practice).
            <strong>Second</strong>, I'm working on a demo with a new, public
            repo and URL to showcase key features, so stay tuned for that.
          </div>
        </DialogContent>
      </Dialog>
      <div className="sectionTitle" style={{ color: dark && "white" }}>
        featured projects{" "}
        <span
          onClick={() => {
            navigate("/projects");
          }}
          style={{ color: dark && "#e3e3e3" }}
        >
          view more <i className="bi bi-arrow-right-short"></i>
        </span>
      </div>
      <div className="projects">
        {posts.map((i: any, index: number) => {
          return (
            <div
              className="project"
              key={index}
              style={{ borderColor: dark && "#243044ff" }}
            >
              <div className="imageContainer">
                <OptimizedImage src={i?.image} alt={i?.title} />
              </div>
              <div className="projectInfo">
                <div
                  className="projectTitle"
                  style={{ color: dark && "white" }}
                  onClick={() => {
                    navigate(`/projects/${i?.id}`);
                  }}
                >
                  {i?.title}
                </div>
                <div
                  className="projectDescription"
                  style={{ color: dark && "#c9c9c9ff" }}
                >
                  {i?.description}
                </div>
                <div className="projectTags">
                  {[...(i?.tags || [])].map((tag: any, ind: number) => {
                    return (
                      <div
                        className="projectTag"
                        key={ind}
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
                <div className="projectLinks">
                  {true && (
                    <div
                      style={{
                        background: dark && "#eeeeee",
                        color: dark && "black",
                      }}
                      className="projectLink"
                      onClick={() => {
                          !(i?.source) && setDialogOpen(true);
                          i?.source && window.open(i?.source);

                        }}
                    >
                      <i
                        className="bi bi-github"
                        
                      ></i>{" "}
                      Source
                    </div>
                  )}
                  <div
                    className="projectLink"
                    style={{
                      background: dark && "#eeeeee",
                      color: dark && "black",
                    }}
                    onClick={() => {
                      navigate(`/projects/${i?.id}`);
                    }}
                  >
                    <i className="bi bi-info-circle-fill"></i>Read more
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Featured;
