import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../css/projects.css";
import levelrh from "../assets/images/levelrh.png";
import levelinvoice from "../assets/images/levelinvoice.png";
import navia from "../assets/images/navia.png";
import going from "../assets/images/going_places.png";
import angotrans from "../assets/images/angotrans.png";
import animescmbd from "../assets/images/animescmbd.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Projects = () => {
  const [posts, setPosts] = useState([
    {
      title: "Level RH",
      description:
        "Complete human resource management system for employee tracking, payroll and much more...",
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
    },
    {
      title: "Level Invoice",
      description:
        "Web-based platform for generating, tracking, and automating invoices...",
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
        "IOS",
        "Android",
      ],
      source: true,
    },
    {
      title: "GoingPlaces",
      description:
        "Car rental/sharing mobile application for IOS and Android...",
      image: going,
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
      title: "AngoTrans Express",
      description: "Real-time bus tracking mobile app for IOS and Android...",
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
      description: "Anime cataloging mobile app for IOS and Android...",
      image: animescmbd,
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
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState<any>(null);
  const [search, setSearch] = useState("");
  return (
    <div className="homeBodyContainer page">
      <Header />

      <div className="greetings">my projects</div>
      <div className="searchContainer">
        <input
          type="text"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div id="featuredSection">
        <div className="projects">
          {posts.map((i: any, index: number) => {
            return (
              <div className="project" key={index}>
                <div className="imageContainer">
                  <img src={i?.image} style={{}} />
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
  );
};

export default Projects;
