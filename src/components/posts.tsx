import { useContext, useState } from "react";
import "../css/posts.css";
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";

const Posts = () => {
  const navigate = useNavigate()
  //@ts-ignore
  const {dark} = useContext(ScrollContext)
    //@ts-ignore

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Hello World!',
      description: "This is my first post on my blog as I get everything set up and see how it all looks in Markdown. I’m using this as a little test to see how the formatting turns out. Overtime, I'll share more about my projects, insights on technology, helpful tips, and maybe even some personal stories along the way.",
      read: 2,
    date: "2025-11-03",
      tags: ['Introduction', "Blog", "About me", "First post"]
    },
  ])
  return (
    <div className="skillsContainer" id="postsSection">
      <div className="sectionTitle" style={{color: dark && 'white' }}>
        recent posts{" "}
        <span onClick={() => {
          navigate('/blog')
        }}style={{color: dark && '#e3e3e3' }} >
          view more <i className="bi bi-arrow-right-short"></i>
        </span>
      </div>

      <div className="posts" style={{borderColor: dark && '#243044ff'}}>
        {posts.slice(0, 4).map((i: any, index: number) => {
          return (
            <div className="post" key={index} onClick={() => {
              navigate(`/blog/${i?.id}`)
            }} style={{borderColor: dark && '#243044ff'}}>
              <div className="left">
                <div className="postTitle" style={{color: dark && 'white'}}>{i?.title}</div>
                <div className="postDescription" style={{color: dark && '#c9c9c9ff'}}>{i?.description}{i?.description}{i?.description}{i?.description}</div>
                <div className="postTags">
                  {[...i?.tags||[]].slice(0, 3).map((tag: any, ind: number) => {
                    return (
                      <div key={ind} className="tag" style={{background: dark && '#243044ff', color: dark && 'white'}}>{tag}</div>
                    )
                  })}
                  {
                    [...i?.tags||[]]?.length > 3 && <div className="tag2" style={{background: dark && '#243044ff' , color: dark && 'white'}}>+{[...i?.tags||[]]?.length - 3}</div>
                  }

                </div>
              </div>
              <div className="right" style={{color: dark && '#c9c9c9ff' }}>
                <div className="date" ><i className="bi bi-calendar-event"></i> {format(new Date(i?.date), 'MMMM d, yyyy')}</div>

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