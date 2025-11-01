import { useContext, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../css/blog.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";

const Blog = () => {
  const navigate = useNavigate()
  const { dark } = useContext(ScrollContext)
    //@ts-ignore

  const [posts, setPosts] = useState([
  {
    id: 1,
    title: "Hello World!",
    description:
      "This is my first post on my blog as I get everything set up and see how it all looks in Markdown. I’m using this as a little test to see how the formatting turns out. Overtime, I'll share more about my projects, insights on technology, helpful tips, and maybe even some personal stories along the way.",
    read: 1,
    date: "2025-03-03",
    tags: ["Introduction", "Blog", "About me", "First post"],
  },
  {
    title: "Exploring React Hooks",
    description: "An in-depth look at React Hooks, how they work, and best practices for using them in your projects.",
    read: 2,
    date: "2024-11-15",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    title: "CSS Grid Layout",
    description: "Learn how to create flexible and responsive layouts with CSS Grid.",
    read: 3,
    date: "2024-10-22",
    tags: ["CSS", "Design", "Layout"],
  },
  {
    title: "Understanding Async/Await",
    description: "A guide to handling asynchronous operations in JavaScript with async/await syntax.",
    read: 4,
    date: "2024-09-30",
    tags: ["JavaScript", "Async"],
  },
  {
    title: "Getting Started with TypeScript",
    description: "An introduction to TypeScript and how it enhances JavaScript development.",
    read: 2,
    date: "2024-08-12",
    tags: ["TypeScript", "JavaScript"],
  },
  {
    title: "Building a REST API",
    description: "Step-by-step guide to building a RESTful API with Node.js and Express.",
    read: 5,
    date: "2024-07-05",
    tags: ["Node.js", "API", "Backend"],
  },
  {
    title: "Design Patterns in JavaScript",
    description: "An overview of common design patterns and how to implement them.",
    read: 3,
    date: "2024-06-18",
    tags: ["Design", "Patterns", "JavaScript"],
  },
  {
    title: "State Management with Redux",
    description: "Learn how to manage complex state in React applications using Redux.",
    read: 4,
    date: "2024-05-25",
    tags: ["React", "Redux", "State Management"],
  },
  {
    title: "Responsive Web Design",
    description: "Tips and techniques for making your websites look great on all devices.",
    read: 2,
    date: "2024-04-10",
    tags: ["Design", "Responsive", "CSS"],
  },
  {
    title: "Introduction to Web Accessibility",
    description: "Making your websites accessible to everyone, including people with disabilities.",
    read: 1,
    date: "2024-03-20",
    tags: ["Accessibility", "Web", "Design"],
  },
]);
  const [filtered, setFiltered] = useState(posts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState<any>("newest");
  const [search, setSearch] = useState("");
  useEffect(() => {
    setFiltered(
      posts.slice(0, 1)
        .sort((a: any, b: any) => {
          if (filter == "newest") {
              //@ts-ignore

            return (new Date(b?.date) - new Date(a?.date));
          } else if (filter == "mobile") {
              //@ts-ignore

            return (new Date(a?.date) - new Date(b?.date));
          } else {
            return a?.title?.toLowerCase().localeCompare(b?.title?.toLowerCase());
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
        <div className="greetings" style={{color: dark && 'white' }}>my blog</div>
        <div className="searchContainer">
          <div className={dark ? "inputContainer1" : "inputContainer"} style={{borderColor: dark && '#243044ff' }}>
            <input
                key={dark ? 'dark' : 'light'}
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
            style={{background: dark && '#030712', color: dark && '#b9b9b9ff', borderColor: dark && '#243044ff'  }}>
              <i className="bi bi-backspace"></i>
            </span>
          </div>
          <Select
          
            onValueChange={(e) => {
              setFilter(e);
            }}
            value={filter}
          >
            <SelectTrigger style={{ outline: "none",borderColor: dark && '#243044ff', color: dark && 'white'  }} className="w-[180px]">
              <SelectValue style={{ outline: "none", color: dark && 'white' }} defaultValue={filter} />
            </SelectTrigger>
            <SelectContent style={{ outline: "none" }}>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="Oldest">Oldest</SelectItem>
              <SelectItem value="A-Z">A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div id="postsSection">
          <div className="posts" style={{borderColor: dark && '#243044ff'}}>
        {filtered.map((i: any, index: number) => {
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
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
