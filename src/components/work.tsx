import { useContext, useState } from "react";
import logo from "../assets/images/logo-short-black.png";
import lsc from "../assets/images/lsc.png";
import levelsoft from "../assets/images/levelsoft.png";
import ispajLogo from "../assets/images/ispajLogo.png";
import pitruca from "../assets/images/pitruca.png";

import "../css/work.css";
import { ScrollContext } from "@/store/context";

const Work = () => {
  const [tab, setTab] = useState("work");
  //@ts-ignore
  const { dark, setDark } = useContext(ScrollContext);

  function getDuration(startDate: any, endDate: any = null) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let totalMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Format  and months
    const yearStr =
      Math.abs(years) === 1
        ? "1 yr"
        : Math.abs(years) === 0
        ? ""
        : `${Math.abs(years)} yrs`;
    const monthStr =
      Math.abs(months) === 1 ? "1 mo" : `${Math.abs(months)} mos`;

    if (years === 0 && months === 0) {
      return "Less than a month";
    }

    const isOngoing = end >= start;

    const startStr = start.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!isOngoing) {
      return "Invalid date range";
    }

    return `${startStr} - ${
      !endDate
        ? "Present"
        : end.toLocaleString("default", { month: "short", year: "numeric" })
    } · ${yearStr}${months > 0 ? " " + monthStr : ""}`;
  }
  //@ts-ignore

  function getDuration1(startDate: any, endDate: any = null) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let totalMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Format  and months
    //@ts-ignore

    const yearStr =
      Math.abs(years) === 1
        ? "1 yr"
        : Math.abs(years) === 0
        ? ""
        : `${Math.abs(years)} yrs`;
    //@ts-ignore

    const monthStr =
      Math.abs(months) === 1 ? "1 mo" : `${Math.abs(months)} mos`;

    if (years === 0 && months === 0) {
      return "Less than a month";
    }

    const isOngoing = end >= start;

    const startStr = start.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!isOngoing) {
      return "Invalid date range";
    }

    return `${startStr} - ${
      !endDate
        ? "Present"
        : end.toLocaleString("default", { month: "short", year: "numeric" })
    }`;
  }

  const [work, setWork] = useState([
    {
      company: "Level Soft - Angola",
      position: "Mobile/Web Application Developer",
      duration: getDuration("2024-05-01"),
      logo: levelsoft,
      expanded: true,
      nest: [
        {
          company: "Level Soft - Angola",
          position: "Mobile/Web Application Developer",
          duration: getDuration("2024-05-01"),
          location: "Hybrid",
          type: "Full-time",
          descriptions: [
            "Designing and developing innovative mobile applications (for IOS and Android platforms) and web applications (some in the projects page)",
          ],
        },
        {
          company: "Level Soft - Angola",
          position: "Network Technician and Web Developer Intern",
          duration: getDuration("2024-01-01", "2024-05-01"),
          location: "On-site",
          type: "Internship",
          descriptions: [
            "Responsible for setting up, maintaining, and troubleshooting computer networks within the organization",
          ],
        },
      ],
    },
    {
      company: "ISPAJ Instituto Superior Politécnico Alvorecer da Juventude",
      position: "Software Developer",
      duration: getDuration("2024-06-01"),
      location: "Hybrid",
      type: "Full-time",
      logo: ispajLogo,
      link: "https://ispaj.co.ao/",
      descriptions: [
        "Designing, developing and maintaining innovative web-based management systems",
        "Creating solutions that respond to the specific needs of one of Angola's biggest private academic institutions",
        "Working with AngularJS for frontend development",
        "Managing databases and ensuring system reliability",
        "Collaborating with academic staff to understand institutional requirements",
      ],
      skills: [
        "AngularJS",
        "Web Development",
        "System Design",
        "Database Management",
        "API Development",
        "Maintenance",
        "Problem Solving",
      ],
    },
    {
      company: "CMBD (My personal freelancing brand)",
      position: "Mobile Application Developer",
      duration: getDuration("2022-11-01"),
      logo: logo,
      expanded: false,
      nest: [
        {
          company: "CMBD",
          position: "Mobile Application Developer",
          duration: getDuration("2022-11-01"),
          location: "Remote",
          type: "Freelance",
          descriptions: [
            "Developing mobile applications for various clients across different industries",
            "Implementing UI/UX designs and ensuring app performance",
          ],
        },
        {
          company: "CMBD",
          position: "Web Developer",
          duration: getDuration("2022-02-01"),
          location: "Remote",
          type: "Freelance",
          descriptions: [
            "Creating websites and web applications for diverse clients and projects",
            "Ensuring web security and optimal performance",
          ],
        },
      ],
    },
  ]);

  //@ts-ignore

  const [education, setEducation] = useState([
    {
      company: "Lone Star College-CyFair",
      position: "AS of science in Computer Science",
      duration: getDuration("2025-06-01"),
      type: "Full-time",
      logo: lsc,
      link: "https://www.lonestar.edu/",
      descriptions: ["Currently pursuing it so no highlights just yet haha."],
      skills: [
        "AngularJS",
        "Web Development",
        "System Design",
        "Database Management",
        "API Development",
        "Maintenance",
        "Problem Solving",
      ],
    },
    {
      company: "Colégio Pitruca",
      position: "Mid-level Computer Technician",
      duration: getDuration("2020-02-02", "2024-08-28"),
      location: "Hybrid",
      type: "High School",
      logo: pitruca,
      finalProject:
        "https://drive.google.com/file/d/1t28_skw_09m2cW2bbH0ur4d4TPrtlZNk/view?usp=sharing",
      descriptions: ["Graduated with a 4.0 GPA"],
      skills: [
        "AngularJS",
        "Web Development",
        "System Design",
        "Database Management",
        "API Development",
        "Maintenance",
        "Problem Solving",
      ],
    },
  ]);

  return (
    <div className="skillsContainer" id="workSection">
      <div className={dark ? "tabHeadersDark" : "tabHeaders"}>
        <div
          className={tab == "work" ? (dark ? "darkTab1" : "tab1") : (dark ? "darkTab" : "tab")}
          onClick={() => {
            tab != "work" && setTab("work");
          }}
        >
          Work
        </div>
        <div
          className={tab == "education" ? (dark ? "darkTab1" : "tab1") : (dark ? "darkTab" : "tab")}
          onClick={() => {
            tab != "education" && setTab("education");
          }}
        >
          Education
        </div>
      </div>
      {tab == "work" && (
        <div className="workList" style={{color: dark && '#e3e3e3', borderColor: dark && '#243044ff' }} >
          {work.map((item: any, index: number) => {
            return (
              <div className="work" key={index}>
                <div className="workLeft">
                  <div
                    style={{ cursor: item?.link ? "pointer" : "unset" }}
                    className="imageContainer"
                    onClick={() => {
                      item?.link && window.open(item?.link);
                    }}
                  >
                    <img src={item?.logo} />
                  </div>
                </div>
                <div className="workInfo">
                  <div className="workHeader">
                    <div style={{ flex: 1 }}>
                      <div className="workDate">{item?.duration}</div>
                      <div
                        style={{ cursor: item?.link ? "pointer" : "unset" }}
                        className={dark ? "workTitleDark" : "workTitle"}
                        onClick={() => {
                          item?.link && window.open(item?.link);
                        }}
                      >
                        {item?.company}
                      </div>
                    </div>
                    {item?.nest && (
                      <div
                        className={
                          item?.expanded ? "workButton1" : "workButton"
                        }
                        onClick={() => {
                          setWork(
                            work.map((i: any, ind: number) => {
                              if (ind == index) {
                                return {
                                  ...i,
                                  expanded: !i?.expanded,
                                };
                              }
                              return {
                                ...i,
                              };
                            })
                          );
                        }}
                      >
                        {item?.expanded ? (
                          <i className="bi bi-arrows-collapse"></i>
                        ) : (
                          <i className="bi bi-arrows-expand"></i>
                        )}
                      </div>
                    )}
                  </div>
                  {!item?.nest && (
                    <div className="workPosition">
                      {item?.position}{" "}
                      {!item?.nest && `(${item?.type} - ${item?.location})`}
                    </div>
                  )}

                  {item?.nest && item?.expanded ? (
                    <div className="workList1">
                      <div className="verticalLine"></div>
                      {[...(item?.nest || [])].map((i: any, ind: number) => {
                        return (
                          <div className="work1" key={ind}>
                            <div className={dark ? "workTitleDark1" : "workTitle1"}>{i?.position}</div>
                            <div className="workDate">
                              {i?.type} - {i?.location}
                            </div>
                            <div className="workDate">{i?.duration}</div>

                            <div>
                              <ul>
                                {[...(i?.descriptions || [])]
                                  .slice(0, 2)
                                  .map((desc: any, indi: number) => (
                                    <li key={indi}>{desc}</li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div>
                      {[...(item?.nest || [])]?.length > 1 && item?.nest && (
                        <div className="tag2" style={{background: dark && '#243044ff' , color: dark && 'white'}}>
                          +{[...(item?.nest || [])]?.length}
                        </div>
                      )}
                    </div>
                  )}
                  <div>
                    <ul>
                      {[...(item?.descriptions || [])]
                        .slice(0, 2)
                        .map((desc: any, indi: number) => (
                          <li key={indi}>{desc}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab == "education" && (
        <div className="workList" style={{color: dark && '#e3e3e3', borderColor: dark && '#243044ff' }}>
          {education.map((item: any, index: number) => {
            return (
              <div className="work" key={index}>
                <div className="workLeft">
                  <div
                    style={{ cursor: item?.link ? "pointer" : "unset" }}
                    className="imageContainer"
                    onClick={() => {
                      item?.link && window.open(item?.link);
                    }}
                  >
                    <img src={item?.logo} />
                  </div>
                </div>
                <div className="workInfo">
                  <div className="workHeader">
                    <div style={{ flex: 1 }}>
                      <div className="workDate">{item?.duration}</div>
                      <div
                        style={{ cursor: item?.link ? "pointer" : "unset" }}
                        className={dark ? "workTitleDark" : "workTitle"}
                        onClick={() => {
                          item?.link && window.open(item?.link);
                        }}
                      >
                        {item?.company}
                      </div>
                    </div>
                    {item?.nest && (
                      <div
                      
                        className={
                          item?.expanded ? "workButton1" : "workButton"
                        }
                        onClick={() => {
                          setWork(
                            work.map((i: any, ind: number) => {
                              if (ind == index) {
                                return {
                                  ...i,
                                  expanded: !i?.expanded,
                                };
                              }
                              return {
                                ...i,
                              };
                            })
                          );
                        }}
                       style={{background: dark && '#243044ff', color: dark && 'white'}}>
                        {item?.expanded ? (
                          <i className="bi bi-arrows-collapse"></i>
                        ) : (
                          <i className="bi bi-arrows-expand"></i>
                        )}
                      </div>
                    )}
                  </div>
                  {!item?.nest && (
                    <div className="workPosition">
                      {item?.position} {!item?.nest && `(${item?.type})`}
                    </div>
                  )}

                  {item?.nest && item?.expanded ? (
                    <div className="workList1">
                      <div className="verticalLine"></div>
                      {[...(item?.nest || [])].map((i: any, ind: number) => {
                        return (
                          <div className="work1" key={ind}>
                            <div className={dark ? "workTitleDark1" : "workTitle1"}>{i?.position}</div>
                            <div className="workDate">
                              {i?.type} - {i?.location}
                            </div>
                            <div className="workDate">{i?.duration}</div>

                            <div>
                              <ul>
                                {[...(i?.descriptions || [])]
                                  .slice(0, 2)
                                  .map((desc: any, indi: number) => (
                                    <li key={indi}>{desc}</li>
                                  ))}
                              </ul>
                            </div>
                            
                            
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div>
                      {[...(item?.nest || [])]?.length > 1 && item?.nest && (
                        <div className="tag2" style={{background: dark && '#243044ff' , color: dark && 'white'}}>
                          +{[...(item?.nest || [])]?.length}
                        </div>
                      )}
                    </div>
                  )}
                  <div>
                    <ul>
                      {[...(item?.descriptions || [])]
                        .slice(0, 2)
                        .map((desc: any, indi: number) => (
                          <li key={indi}>{desc}</li>
                        ))}
                    </ul>
                  </div>
                  {item?.finalProject && <div
                              className="projectLink"
                              
                              style={{display: 'inline-flex', marginTop: 5,  paddingInline: 15, fontSize: 12.5, background: dark && '#eeeeee', color: dark && 'black' }}
                              onClick={() => {
                                window.open(item?.finalProject);
                              }}
                            >
                              <i className="bi bi-globe"></i>
                              Final Year Project (Portuguese)
                            </div>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Work;
