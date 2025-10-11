import { useContext, useEffect } from 'react'
import '../../css/blogPost.css'
import Footer from '@/components/footer'
import { androidstudio, CopyBlock } from 'react-code-blocks'
import Header from '@/components/header'
import { useNavigate } from 'react-router-dom'
import { ScrollContext } from '@/store/context'
import Earth from '@/components/globe'
import { format } from 'date-fns'
import levelrh from "../../assets/images/levelrh.webp";
const Project1 = () => {
    const navigate = useNavigate()
    const { dark } = useContext(ScrollContext)
     const info = {
    title: "Hello World!",
    preDescription:
      "Highly tested and used complete human resource management system for employee tracking, payroll and much more",
    description:
      "This is my first post on my blog as I get everything set up and see how it all looks in Markdown. I’m using this as a little test to see how the formatting turns out. Overtime, I'll share more about my projects, insights on technology, helpful tips, and maybe even some personal stories along the way.",
    read: 1,
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
          <div className="greetings">Level RH!</div>
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

          <div className="content" style={{ color: dark && "white" }}>
            <hr />
            <p>{info?.description}</p>
            <h1>What's this about?</h1>
            <p>
              This blog will serve as a way for me to share my experiences,
              projects, and random thoughts with the world. For now, I'm testing
              the waters and making sure everything looks good. Stay tuned for
              more meaningful content soon...
            </p>
            <p>
              I'm passionate about learning and exploring new ideas, and this
              space will be my personal journal of growth and discovery. Some of
              the topics I plan to cover include:
            </p>
            <ul>
              <li>Tech insights and tutorials</li>
              <li>Creative projects and design ideas</li>
              <li>Personal development and productivity tips</li>
              <li>Book and resource recommendations</li>
              <li>Random musings and reflections</li>
            </ul>
            <p>
              Feel free to leave comments or suggestions—I'd love to hear your
              feedback! Thanks for stopping by, and I look forward to embarking
              on this blogging journey with you. Keep an eye out for upcoming
              posts that dive deeper into my projects and thoughts!
            </p>

            {/* New Section */}
            <h1>Upcoming Topics</h1>
            <p>
              In the coming weeks, I plan to explore a variety of interesting
              topics, from new technology trends to personal growth strategies.
              This section will keep you updated on what to expect and how you
              can get involved in the conversation.
            </p>
            <h1>Code snippet</h1>
            <CopyBlock
              theme={androidstudio}
              language="python"
              text={`print("hello,world")
print("stay tuned for more meaningful content soon...")`}
              showLineNumbers={true}
              wrapLongLines={true}
              codeBlock
            />

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                That's it for this test post! Check back soon for more updates,
                and thanks for stopping by!
              </p>
            </footer>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/blog");
          }}
          className={`${dark ? "backHome-light" : "backHome"}`}
          style={{
            marginTop: 20,
            display: "block",
            cursor: "pointer",
            textAlign: "right",
            alignSelf: "flex-end",
            marginLeft: "auto",
            width: "100px",
          }}
        >
          more posts <i className="bi bi-arrow-right"></i>
        </div>
        <Footer />
      </div>
    </div>
    )
}
export default Project1