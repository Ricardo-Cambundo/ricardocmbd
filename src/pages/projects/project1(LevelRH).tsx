import { useContext, useEffect } from 'react'
import '../../css/blogPost.css'
import Footer from '@/components/footer'
import { androidstudio, CopyBlock } from 'react-code-blocks'
import Header from '@/components/header'
import { useNavigate } from 'react-router-dom'
import { ScrollContext } from '@/store/context'
import { format } from 'date-fns'
import levelrh from "../../assets/images/levelrh.webp";
import levelrh1 from "../../assets/images/levelrh/levelrh2.webp";
import levelrh2 from "../../assets/images/levelrh/levelrh1.webp";
import levelrh3 from "../../assets/images/levelrh/levelrh3.png";
import levelrh4 from "../../assets/images/levelrh/levelrh4.png";
import levelrh5 from "../../assets/images/levelrh/levelrh5.png";


const Project1 = () => {
    const navigate = useNavigate()
    const { dark } = useContext(ScrollContext)
     const info = {
    title: "Level RH",
    preDescription:
      "Highly tested and used complete human resource management system for employee tracking, payroll and much more",
    description:
      "Designed and developed an intuitive and user-friendly interface that allows HR teams to easily access and analyze HR data. Dynamic dashboards and visual charts help visualize employee statistics, attendance, and payroll summaries. Integrated Google SMTP to send automated email notifications for payroll slips, alerts, and other HR communications. Utilized Twilio SMS API for real-time notifications and reminders directly to employees' mobile devices.",
    read: 4,
    warning: "The application is accessible only within organization's internal network, with no public-facing URL. Currently working on a live demo environment for demonstration purposes.",
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
        window.scroll(0, 0)
    }, [])
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
             style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0}}>
              {" "}
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelrh}/>
            </div>
          </div>
          <div className="greetings">{info?.title}</div>
          <div className="preDescription">{info?.preDescription}</div>
          <div className="dateInfo">
            {/* <div
              className="date"
              style={{
                borderRight: "1px solid #eeeeee",
                paddingRight: 20,
                marginRight: 8,
              }}
            >
              <i className="bi bi-calendar-event"></i>{" "}
              {format(new Date(), "MMMM d, yyyy")}
            </div> */}

            <div className="date">
              <i className="bi bi-hourglass-split"></i> {info?.read} min read
            </div>
          </div>
          <div className="postTags">
            {[...(info?.tags || [])].map((tag: any, ind: number) => {
              return (
                <div key={ind} className="tag">
                  {tag}
                </div>
              );
            })}
          </div>

          {info?.warning && <div className={dark ? 'warning1' : 'warning'}>{info?.warning}</div>}

          <div className="content" style={{ color: dark && "white" }}>
            <hr />
            <p>{info?.description}</p>
            <h1>Core Functionalities</h1>
            <ul>
              <li>Management of employee personal details, employment contracts, and employment history</li>
              <li>Handling salary advances, vacation scheduling, and generating customizable payroll slips for employees</li>
              <li>Tax mapping and compliance automation to help organizations adhere to local regulations seamlessly</li>
              <li>Attendance tracking with statistical reporting features, enabling quick insights into workforce presence</li>
              <li>Automated work hour summarization and payroll processing to ensure accuracy and efficiency</li>
            </ul>
            <p>
              Let's see how some of these functionalities look like below.
            </p>
            <h1>
              1. Management of employee personal details, employment contracts, and employment history
            </h1>
            <p>
              Management of employee personal details, including contact information, identification documents; administration of employment contracts, such as onboarding, renewals, and amendments; and maintenance of comprehensive employment history records, covering previous roles, performance evaluations, training, and career progression for accurate employee management and reporting:
            </p>
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
             style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0}}>
              {" "}
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelrh1} className='2pc'/>
            </div>
            <h1>2. Supporting automated and customizable payroll slips</h1>
            <p>
               Users can select parameters such as department, subsidies, awards, employment type, and hub. The system creates formatted payroll PDFs and Excel reports with automated calculations, deductions, and benefits for accurate, compliant payrolls:
            </p>
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
             style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0}}>
              {" "}
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelrh3} className='2pc'/>
            </div>
            
            <h1>3. Automated work hour summarization and statistical reports</h1>
            <p>
              The system logs employee working hours accurately and provides statistical reports, facilitating quick analysis of workforce presence and attendance patterns for better operational insights:
            </p>

            {/* <h1>Upcoming Topics</h1> */}
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
             style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0}}>
              {" "}
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelrh4} className='2pc'/>
            </div>

            <h1>4. Handling salary advances, vacation scheduling</h1>
            <p>
              The system manages salary advances and vacation scheduling by automating request processing, tracking balances, and maintaining accurate records to streamline payroll and leave management processes.
            </p>
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
             style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0}}>
              {" "}
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={levelrh5} className='2pc'/>
            </div>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                
                This is a highly tested and proven software solution that is already in use. It includes many more screens and features to streamline HR management. Notably, several private, top-tier academic institutions in Angola are leveraging it to handle their HR needs. 

                If you're interested in seeing more or would like a quick demo, feel free to email me, and I’ll be happy to walk you through it.
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
    )
}
export default Project1