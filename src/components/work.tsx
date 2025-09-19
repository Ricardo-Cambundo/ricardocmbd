import { useState } from "react";
import logo from "../assets/images/logo-short-black.png";

import "../css/work.css";

const Work = () => {
  const [tab, setTab] = useState("work");
  function getDuration(startDate: any, endDate: any = null) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let totalMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Format  and months
    const yearStr = Math.abs(years) === 1 ? "1 yr": Math.abs(years) === 0 ? '' : `${Math.abs(years)} yrs`;
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
  const [work, setWork] = useState([
    {
      company: "Level Soft - Angola",
      position: "Mobile/Web Application Developer",
      duration: getDuration('2024-05-01'),
      logo: "https://levelsoft.ao/images/logo-black.png",
      expanded: true,
      nest: [
        {
          company: "Level Soft - Angola",
          position: "Mobile/Web Application Developer",
          duration: getDuration('2024-05-01'),
          location: "Hybrid",
          type: "Full-time",
          descriptions: [
            "Designing and developing innovative mobile applications (for IOS and Android platforms) and web applications",
          ],
        },
        {
          company: "Level Soft - Angola",
          position: "Network Technician and Web Developer Intern",
          duration: getDuration('2024-01-01', '2024-05-01'),
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
      duration: getDuration('2024-06-01'),
      location: "Hybrid",
      type: "Full-time",
      logo: "https://ispaj.co.ao/images/logotrans.png",
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
      company: "CMBD",
      position: "Mobile Application Developer",
      duration: getDuration('2022-11-01'),
      logo: logo,
      expanded: false,
      nest: [
        {
          company: "CMBD",
          position: "Mobile Application Developer",
          duration: getDuration('2022-11-01'),
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
          duration: getDuration('2022-02-01'),
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

  return (
    <div className="skillsContainer" id="workSection">
      <div className="tabHeaders">
        <div
          className={tab == "work" ? "tab1" : "tab"}
          onClick={() => {
            tab != "work" && setTab("work");
          }}
        >
          Work
        </div>
        <div
          className={tab == "education" ? "tab1" : "tab"}
          onClick={() => {
            tab != "education" && setTab("education");
          }}
        >
          Education
        </div>
      </div>
      {tab == "work" && (
        <div className="workList">
          {work.map((item: any, index: number) => {
            return (
              <div className="work" key={index}>
                <div className="workLeft">
                  <div className="imageContainer">
                    <img src={item?.logo} />
                  </div>
                </div>
                <div className="workInfo">
                  <div className="workHeader">
                    <div style={{ flex: 1 }}>
                      <div className="workDate">{item?.duration}</div>
                      <div className="workTitle">{item?.company}</div>
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
                      {!item?.nest && `(${item?.type}, ${item?.location})`}
                    </div>
                  )}

                  {item?.nest && item?.expanded ? (
                    <div className="workList1">
                      <div className="verticalLine"></div>
                      {[...(item?.nest || [])].map((i: any, ind: number) => {
                        return (
                          <div className="work1" key={ind}>
                            <div className="workTitle1">{i?.position}</div>
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
                        <div className="tag2">
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
    </div>
  );
};
export default Work;
