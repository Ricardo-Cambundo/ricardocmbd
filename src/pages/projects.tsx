import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../css/projects.css";
import levelrh from "../assets/images/levelrh 1.svg";
import levelinvoice from "../assets/images/levelinvoice 1.svg";
import navia from "../assets/images/navia 1.svg";
import going from "../assets/images/going_places 1.svg";
import angotrans from "../assets/images/angotrans 1.svg";
import animescmbd from "../assets/images/animescmbd 1.svg";
import ispaj from "../assets/images/ispaj 1.svg";
// import { Blurhash } from "react-blurhash";

import angotrans_site from "../assets/images/angotrans_site 1.svg";
import sge from "../assets/images/sge 1.svg";
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import lottie from "../components/loading6.svg";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";

const OptimizedImage = React.memo(({ src, alt }: { src: any; alt?: any }) => {
  //@ts-ignore
  const navigate = useNavigate();
  //@ts-ignore
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {!loaded && <></>}
      {/* <img
        src={src}
        alt={alt}
        loading="lazy"
        style={
          {
            // display: loaded ? 'block' : 'none',
            // height: 'auto',
          }
        }
        // onLoad={() => setLoaded(true)}
      /> */}
      <LazyLoadImage
        src={src}
        alt={alt}
        // placeholderSrc="L7QJfn_N000000-;M{ay00-;t7M{"
      />
    </>
  );
});

const ProjectItem = React.memo(({ i }: { i: any }) => {
  const navigate = useNavigate();
  //@ts-ignore
  const { dark } = useContext(ScrollContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="project" style={{ borderColor: dark && "#243044ff" }} >
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
              // zindex: 9999,
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
              // color: "grey",
              fontSize: 14,
              color: dark ? "white" : "grey",
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
              paddingBottom: 20
            }}
          >
            You're probably wondering,{" "}
            <strong>"Why show the GitHub button?"</strong>
            <strong> First</strong>, it indicates the project is in a Git repo (good practice).
            <strong>Second</strong>, I'm working on a demo with a new, public repo and URL to
            showcase key features, so stay tuned for that.
          </div>
        </DialogContent>
      </Dialog>
      <div className="imageContainer">
        <OptimizedImage src={i?.image} alt={i?.title} />
      </div>
      <div className="projectInfo">
        <div className="projectTitle" style={{ color: dark && "white" }}
         onClick={() => {
          navigate(`/projects/${i?.id}`);
        }}>
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
          {i?.website && (
            <div
              className="projectLink"
              onClick={() => {
                window.open(i?.website);
              }}
              style={{ background: dark && "#eeeeee", color: dark && "black" }}
            >
              <i className="bi bi-globe"></i>
              Website
            </div>
          )}
          {true && (
            <div
              className="projectLink"
              style={{ background: dark && "#eeeeee", color: dark && "black" }}
              onClick={() => {
                !i?.source && setDialogOpen(true);
                i?.source && window.open(i?.source);
              }}
            >
              <i className="bi bi-github"></i> Source
            </div>
          )}
          <div
            className="projectLink"
            style={{ background: dark && "#eeeeee", color: dark && "black" }}
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
});

const Projects = () => {
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
      highlight: "Extensively tested and reliable for large-scale deployments",
    },
    {
      id: 2,
      title: "Level Invoice",
      description:
        "Highly tested and used web-based platform for generating, tracking, and automating invoices",
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
        "Cross-platform m-commerce app with courier logistics (IOS/Android)",
      image: navia,
      tags: [
        "React Native",
        "TypeScript",
        "JWT",
        "PostgreSQL",
        "Laravel/PHP",
        "Firebase",
        "Websockets",
        "IOS",
        "Android",
      ],
      source: "https://github.com/Ricardo-Cambundo/navia_frontend.git",
    },
    {
      id: 4,
      title: "GoingPlaces",
      description: "Car rental/sharing mobile application for IOS and Android",
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
        "IOS",
        "Android",
      ],
      source: "https://github.com/Ricardo-Cambundo/GoingPlacesFront",
    },

    {
      id: 7,
      title: "Internship Management System",
      description:
        "Already in use, this is an enterprise platform for academic/medical internship coordination",
      image: sge,
      tags: [
        "React",
        "JavaScript",
        "Laravel/PHP",
        "PostgreSQL",
        "Google SMTP",
        "Docker",
        "JWT",
      ],
      source: false,
    },
    {
      id: 5,
      title: "ISPAJ",
      description:
        "Official website for one of Angola's biggest Higher Polytechnic Institute with 10k+ monthly visitors",
      image: ispaj,
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
      source: false,
      website: "https://ispaj.co.ao/",
    },
    {
      id: 9,
      title: "AngoTrans Express",
      description: "Real-time bus tracking mobile app for IOS and Android",
      image: angotrans,
      tags: [
        "React Native",
        "JavaScript",
        "JWT",
        "PostgreSQL",
        "Laravel/PHP",
        "Firebase",
        "Websockets",
        "IOS",
        "Android",
      ],
      source: false,
    },
    {
      id: 8,
      title: "AnimesCMBD",
      description: "Anime cataloging mobile app for IOS and Android",
      image: animescmbd,
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
      source: true,
    },
    {
      id: 6,
      title: "AngoTrans Express website",
      description:
        "Corporate website for a company specialized in road transport and cargo transportation solutions",
      image: angotrans_site,
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
      source: false,
      website: "https://angotransexpress.ao/",
    },
    ,
  ]);
  const [filtered, setFiltered] = useState(posts);
  //@ts-ignore
  const { dark } = useContext(ScrollContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState<any>("all");
  const [search, setSearch] = useState("");
  useEffect(() => {
    setFiltered(
      posts
        .filter((item: any) => {
          if (filter == "all") {
            return true;
          } else if (filter == "mobile") {
            return [...item?.tags].some((i) => i == "IOS");
          } else {
            return ![...item?.tags].some((i) => i == "IOS");
          }
        })
        .filter((item: any) => {
          if (search.length == 0) {
            return true;
          } else {
            return (
              `${item?.title}`.toLowerCase().includes(search.toLowerCase()) ||
              `${item?.description}`
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              [...item?.tags].some((i: string) =>
                i?.toLowerCase().includes(search.toLowerCase())
              )
            );
          }
        })
    );
  }, [filter, search]);

  return (
    <div className="homeBodyContainer">
      <Header />
      <div className="page">
        <div className="greetings" style={{ color: dark && "white" }}>
          my projects
        </div>
        <div className="searchContainer">
          <div
            className={dark ? "inputContainer1" : "inputContainer"}
            style={{ borderColor: dark && "#243044ff" }}
          >
            <input
              key={dark ? "dark" : "light"}
              type="text"
              className="search"
              placeholder="Search something..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              onClick={() => {
                setSearch("");
              }}
              style={{
                background: dark && "#030712",
                color: dark && "#b9b9b9ff",
                borderColor: dark && "#243044ff",
              }}
            >
              <i className="bi bi-backspace"></i>
            </span>
          </div>
          <Select
            onValueChange={(e) => {
              setFilter(e);
            }}
            value={filter}
          >
            <SelectTrigger
              style={{
                outline: "none",
                borderColor: dark && "#243044ff",
                color: dark && "white",
              }}
              className="w-[180px]"
            >
              <SelectValue
                style={{ outline: "none", color: dark && "white" }}
                defaultValue={filter}
              />
            </SelectTrigger>
            <SelectContent style={{ outline: "none" }}>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="web">Web</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div id="featuredSection">
          <div className="projects">
            {filtered.map((i: any, index: number) => {
              return <ProjectItem i={i} key={index} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
