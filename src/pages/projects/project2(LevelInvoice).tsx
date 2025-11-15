import { useContext, useEffect } from "react";
import "../../css/blogPost.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";
import levelinvoice from "../../assets/images/levelinvoice 1.svg";
import levelinvoice1 from "../../assets/images/levelinvoice/levelinvoice1.svg";
import levelinvoice2 from "../../assets/images/levelinvoice/levelinvoice2.svg";
import levelinvoice3 from "../../assets/images/levelinvoice/levelinvoice3.svg";



const Project2 = () => {
  const navigate = useNavigate();
    //@ts-ignore

  const { dark } = useContext(ScrollContext);
  const info = {
    title: "Level Invoice",
    preDescription:
      "Highly tested and used web-based platform for generating, tracking, and automating invoices",
    description:
      "Designed and developed a reliable and user-friendly web-based platform for generating, tracking, and automating invoices. The system features intuitive dashboards and visual analytics to monitor invoice status, payments, and outstanding balances. It integrates with email services to send automated invoice notifications and reminders, ensuring timely communication with clients. Additionally, it supports real-time alerts via SMS using Twilio API, helping businesses streamline their invoicing process and improve cash flow management.",
    read: 4,
    highlight: 'This invoice program was validated by Angola’s Administração Geral Tributária (General Tax Administration) under validation number ---, ensuring compliance with official standards and legal acceptance.',
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
              
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelinvoice} />
            </div>
          </div>
          <div className="greetings" style={{color: dark && 'white'}}>{info?.title}</div>
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
              <i className="bi bi-calendar-event"></i>
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

          {info?.highlight && (
            <div className={dark ? "highlight1" : "highlight"}>{info?.highlight}</div>
          )}
          {info?.warning && (
            <div className={dark ? "warning1" : "warning"}>{info?.warning}</div>
          )}

          <div className="content" style={{ color: dark && "white" }}>
            <hr />
            <p>{info?.description}</p>
            <h1>Core Functionalities</h1>
            <ul>
              <li>
                Support for multiple invoice types and Credit Notes for
                Cancellation and Correction
              </li>
              <li>
                SAF-T (Standard Audit File for Tax) file generation to ensure compliance with tax authorities
              </li>
              <li>
                Flexible export options, including A4, A5, and thermal paper
                formats for printing and digital distribution
              </li>
              <li>
                Tracking and management of invoice statuses, payments, and
                adjustments
              </li>
              <li>
                Automated notifications via email and SMS for invoice issuance,
                reminders, and updates
              </li>
              <li>
                Verification of invoice authenticity (through included QR codes)
              </li>
              <li>
                Analytics on invoicing activity, revenue, and
                outstanding balances
              </li>
            </ul>
            <p>Let's see how some of these functionalities look like below.</p>
            <h1>
              1. Support for multiple invoice types
            </h1>
            <p>Support for multiple invoice types, including Standard Invoice, Receipt Invoice, Pro Forma Invoice, and Credit Notes for Cancellation and Correction, allowing businesses to handle various billing scenarios accurately and efficiently:
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
              
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelinvoice} />
            </div>
            <h1>2. Analytics on invoicing activity, revenue, and outstanding balances</h1>
            <p>
              Comprehensive analytics on invoicing activity, including detailed insights into revenue generated, outstanding balances, payment trends, and overdue accounts, to help businesses make informed financial decisions and optimize cash flow management.
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
              
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelinvoice1} />
            </div>

            <h1>
              3. SAF-T (Standard Audit File for Tax) file generation 
            </h1>
            <p>
              Generation of SAF-T (Standard Audit File for Tax) files to enable precise and secure reporting of financial and tax information, ensuring full compliance with local tax authority regulations, supporting audit procedures, and simplifying the tax filing process for businesses:
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
              
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelinvoice2} />
            </div>

            <h1>
              4. Verification of invoice authenticity
            </h1>
            <p>
             The system's invoice verification feature allows you to quickly assess the authenticity of invoices by simply scanning a QR code. This streamlined process ensures invoices are legitimate and compliant, helping to prevent fraud, reduce errors, and accelerate approval workflows with minimal effort:
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
              
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelinvoice3} />
            </div>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                This is a highly tested and proven software solution that is
                already in use. It includes many more screens and features to
                streamline invoice management. Notably, several private, top-tier
                academic institutions in Angola are leveraging it to handle
                their invoice needs. If you're interested in seeing more or would
                like a quick demo, feel free to email me, and I’ll be happy to
                walk you through it.
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
export default Project2;
