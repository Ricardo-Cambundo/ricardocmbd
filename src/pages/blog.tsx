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
  const navigate = useNavigate();
  //@ts-ignore
  const { dark } = useContext(ScrollContext);
  //@ts-ignore

  const [posts, setPosts] = useState([
    {
      id: 3,
      title:
        "Retrocausality in Computing: When Algorithms Run Backward in Time",
      preDescription:
        "Exploring how time-symmetric physics could revolutionize computation, from quantum algorithms to error correction.",
      description:
        "Exploring how time-symmetric physics could revolutionize computation, from quantum algorithms to error correction. We explored how retrocausality suggests the future can influence the past at the quantum level in certain interpretive frameworks. This offers a third explanation for quantum entanglement that preserves both locality",
      read: 9,
      date: "2026-01-20",
        tags: ["Quantum Computing", "Algorithms", "Information Theory", "Retrocausality", "Computer Science"],

    },{
      id: 2,
      title:
        "The Future Affecting the Past: A Beginner's Guide to Retrocausality",
      preDescription:
        "Exploring the mind-bending concept where effects might precede causes in the quantum realm.",
      description:
        "Retrocausality challenges everything we know about time and causality. This first part explores the basic concepts, quantum puzzles, and why physicists are seriously considering that the future might influence the past.",
      read: 7,
      date: "2025-12-29",
      tags: [
        "Quantum Physics",
        "Retrocausality",
        "Time",
        "Quantum Mechanics",
        "Science",
      ],
    },
    {
      id: 1,
      title: "Hello World!",
      description:
        "This is my first post on my blog as I get everything set up and see how it all looks in Markdown. I’m using this as a little test to see how the formatting turns out. Overtime, I'll share more about my projects, insights on technology, helpful tips, and maybe even some personal stories along the way.",
      read: 2,
      date: "2025-11-03",
      tags: ["Introduction", "Blog", "About me", "First post"],
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
      posts
        .sort((a: any, b: any) => {
          if (filter == "newest") {
            //@ts-ignore

            return new Date(b?.date) - new Date(a?.date);
          } else if (filter == "mobile") {
            //@ts-ignore

            return new Date(a?.date) - new Date(b?.date);
          } else {
            return a?.title
              ?.toLowerCase()
              .localeCompare(b?.title?.toLowerCase());
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
        <div className="greetings" style={{ color: dark && "white" }}>
          my blog
        </div>
        <div className="searchContainer">
          <div
            className={dark ? "inputContainer1" : "inputContainer"}
            style={{
              borderColor: dark && "#243044ff",
              backgroundColor: dark ? "#030712" : "white",
            }}
          >
            <input
              key={dark ? "dark" : "light"}
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
              style={{
                background: dark && "#030712",
                color: dark && "#b9b9b9ff",
                borderColor: dark && "#243044ff",
              }}
            >
              <i className="bi bi-backspace"></i>
            </span>
          </div>
          <Select
            onValueChange={(e) => {
              setFilter(e);
            }}
            value={filter}
          >
            <SelectTrigger
              style={{
                outline: "none",
                borderColor: dark && "#243044ff",
                color: dark && "white",
                backgroundColor: dark ? "#030712" : "white",
              }}
              className="w-[180px]"
            >
              <SelectValue
                style={{ outline: "none", color: dark && "white" }}
                defaultValue={filter}
              />
            </SelectTrigger>
            <SelectContent style={{ outline: "none" }}>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="Oldest">Oldest</SelectItem>
              <SelectItem value="A-Z">A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div id="postsSection">
          <div className="posts" style={{ borderColor: dark && "#243044ff" }}>
            {filtered.map((i: any, index: number) => {
              return (
                <div
                  className="post"
                  key={index}
                  onClick={() => {
                    navigate(`/blog/${i?.id}`);
                  }}
                  style={{
                    borderColor: dark && "#243044ff",
                    backgroundColor: dark ? "#030712" : "white",
                  }}
                >
                  <div className="left">
                    <div
                      className="postTitle"
                      style={{ color: dark && "white" }}
                    >
                      {i?.title}
                    </div>
                    <div
                      className="postDescription"
                      style={{ color: dark && "#c9c9c9ff" }}
                    >
                      {i?.description}
                      {i?.description}
                      {i?.description}
                      {i?.description}
                    </div>
                    <div className="postTags">
                      {[...(i?.tags || [])]
                        .slice(0, 3)
                        .map((tag: any, ind: number) => {
                          return (
                            <div
                              key={ind}
                              className="tag"
                              style={{
                                background: dark && "#243044ff",
                                color: dark && "white",
                              }}
                            >
                              {tag}
                            </div>
                          );
                        })}
                      {[...(i?.tags || [])]?.length > 3 && (
                        <div
                          className="tag2"
                          style={{
                            background: dark && "#243044ff",
                            color: dark && "white",
                          }}
                        >
                          +{[...(i?.tags || [])]?.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="right" style={{ color: dark && "#c9c9c9ff" }}>
                    <div className="date">
                      <i className="bi bi-calendar-event"></i>{" "}
                      {format(new Date(i?.date), "MMMM d, yyyy")}
                    </div>

                    <div className="date">
                      <i className="bi bi-hourglass-split"></i> {i?.read} min
                      read
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
