import Footer from "@/components/footer";
import "../../css/blogPost.css";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
import levelinvoice from "../../assets/images/levelinvoice.png";
import { format } from "date-fns";
import {
  CopyBlock,
  a11yLight,
  androidstudio,
  paraisoLight,
  solarizedLight,
} from "react-code-blocks";
import { useContext, useEffect } from "react";
import { ScrollContext } from "@/store/context";
import Earth from "@/components/globe";

const Blog1 = () => {
  const navigate = useNavigate();
  const { dark, setDark } = useContext(ScrollContext);

  const info = {
    title: "Hello World!",
    preDescription:
      "This is my first post on my blog to test out how things look in markdown.",
    description:
      "This is my first post on my blog as I get everything set up and see how it all looks in Markdown. I’m using this as a little test to see how the formatting turns out. Overtime, I'll share more about my projects, insights on technology, helpful tips, and maybe even some personal stories along the way.",
    read: 1,
    date: "2025-03-03",
    tags: ["Introduction", "Blog", "About me", "First post"],
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homeBodyContainer">
      <Header />
      <div className="page" style={{ paddingTop: 20 }}>
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
            <span
              style={{
                background: dark && "#c4c4c4ff",
                color: dark && "black",
                borderColor: dark && "#eeeeee",
              }}
            >
              <i style={{ marginRight: 10 }} className="bi bi-image-fill"></i>
              {1} image
            </span>
            <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
             style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0}}>
              {" "}
              {/* <img loading="eager" src={levelinvoice} /> */}
              <Earth
              
                baseColor={[1, 1, 1]}
                markerColor={[0, 0, 0]}
                glowColor={[0.97, 0.97, 0.97]}
                dark={0}
                theta={0.8}
                scale={1}
              />
            </div>
          </div>
          <div className="greetings">Hello World!</div>
          <div className="preDescription">{info?.preDescription}</div>
          <div className="dateInfo">
            <div
              className="date"
              style={{
                borderRight: "1px solid #eeeeee",
                paddingRight: 20,
                marginRight: 8,
              }}
            >
              <i className="bi bi-calendar-event"></i>{" "}
              {format(new Date(info?.date), "MMMM d, yyyy")}
            </div>

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
  );
};

export default Blog1;
