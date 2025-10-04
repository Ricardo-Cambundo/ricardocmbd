import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../css/projects.css";
import levelrh from "../assets/images/levelrh.webp";
import levelinvoice from "../assets/images/levelinvoice.webp";
import navia from "../assets/images/navia.webp";
import going from "../assets/images/going_places.webp";
import angotrans from "../assets/images/angotrans.webp";
import animescmbd from "../assets/images/animescmbd.webp";
import ispaj from "../assets/images/ispaj.webp";
import angotrans_site from "../assets/images/angotrans_site.webp";
import sge from "../assets/images/sge.webp";
import { Blurhash } from "react-blurhash";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const OptimizedImage = React.memo(({ src, alt }: { src: any; alt?: any }) => {
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

const Projects = () => {
  const [posts, setPosts] = useState([
    {
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
      source: true,
      highlight: "Extensively tested and reliable for large-scale deployments",
    },
    {
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
      source: true,
    },
    {
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
      source: true,
    },
    {
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
      source: true,
    },
    {
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
      source: true,
      website: "https://ispaj.co.ao/",
    },
    {
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
      source: true,
      website: "https://angotransexpress.ao/",
    },
    {
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
      source: true,
    },
    {
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
        "Websockets",
        "IOS",
        "Android",
      ],
      source: true,
    },
    {
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
      source: true,
    },
  ]);
  const [filtered, setFiltered] = useState(posts);

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
        <div className="greetings">my projects</div>
        <div className="searchContainer">
          <div className="inputContainer">
            <input
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
            <SelectTrigger style={{ outline: "none" }} className="w-[180px]">
              <SelectValue style={{ outline: "none" }} defaultValue={filter} />
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
              return (
                <div className="project" key={index}>
                  <div className="imageContainer">
                    <OptimizedImage src={i?.image} alt={i?.title} />
                  </div>
                  <div className="projectInfo">
                    <div className="projectTitle">{i?.title}</div>
                    <div className="projectDescription">{i?.description}</div>
                    <div className="projectTags">
                      {[...(i?.tags || [])].map((tag: any, ind: number) => {
                        return (
                          <div className="projectTag" key={ind}>
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
                        >
                          <i className="bi bi-globe"></i>
                          Website
                        </div>
                      )}
                      {i?.source && (
                        <div className="projectLink">
                          <i className="bi bi-github"></i> Source
                        </div>
                      )}
                      <div className="projectLink">
                        <i className="bi bi-info-circle-fill"></i>Read more
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
