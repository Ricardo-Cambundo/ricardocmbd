import { useState } from "react";
import "../css/posts.css";
import { format } from 'date-fns'

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      title: 'Hello World!',
      description: "This is my first post on my blog as I get everything set up and see how it all looks in Markdown. I’m using this as a little test to see how the formatting turns out. Overtime, I'll share more about my projects, insights on technology, helpful tips, and maybe even some personal stories along the way.",
      read: 1,
      date: '2025-03-03',
      tags: ['Introduction', "Blog", "About me", "First post"]
    }
  ])
  return (
    <div className="skillsContainer" id="postsSection">
      <div className="sectionTitle">
        recent posts{" "}
        <span>
          view more <i className="bi bi-arrow-right-short"></i>
        </span>
      </div>

      <div className="posts">
        {posts.slice(0, 4).map((i: any, index: number) => {
          return (
            <div className="post" key={index} onClick={() => {

            }}>
              <div className="left">
                <div className="postTitle">{i?.title}</div>
                <div className="postDescription">{i?.description}{i?.description}{i?.description}{i?.description}</div>
                <div className="postTags">
                  {[...i?.tags||[]].slice(0, 3).map((tag: any, ind: number) => {
                    return (
                      <div key={ind} className="tag">{tag}</div>
                    )
                  })}
                  {
                    [...i?.tags||[]]?.length > 3 && <div className="tag2">+{[...i?.tags||[]]?.length - 3}</div>
                  }

                </div>
              </div>
              <div className="right">
                <div className="date"><i className="bi bi-calendar-event"></i> {format(new Date(i?.date), 'MMMM d, yyyy')}</div>

                <div className="date"><i className="bi bi-hourglass-split"></i> {i?.read} min read</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Posts