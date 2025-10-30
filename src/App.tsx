
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Featured from "./components/featured";
import Posts from "./components/posts";
import Footer from "./components/footer";
import Work from "./components/work";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/projects";
import Privacy from "./pages/privacy";
import "./index.css";
import { ScrollProvider } from "./store/context";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Blog1 from "./pages/blog/blog1";
import NotFound from "./pages/404";
import Project1 from "./pages/projects/project1(LevelRH)";
import Project2 from "./pages/projects/project2(LevelInvoice)";
import Project4 from "./pages/projects/project4(GoingPlaces)";
import Project7 from "./pages/projects/project7(SGE)";
import Project8 from "./pages/projects/project8(AnimesCMBD)";
import Project9 from "./pages/projects/project9(AngoTransExpress)";
import Project3 from "./pages/projects/project3(NaVia)";
import Project6 from "./pages/projects/project6(AngoTransWeb)";

function App() {
  return (
    <ScrollProvider>
      <Routes>
        <Route
          path="/"
          element={
            <div className="homeBodyContainer">
              <Header />
              <div className="page">
                <Hero />
                <Work />
                <Skills />
                <Featured />
                <Posts />
                <Footer />
              </div>
            </div>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/projects/1" element={<Project1 />} />
        <Route path="/projects/2" element={<Project2 />} />
        <Route path="/projects/4" element={<Project4 />} />
        <Route path="/projects/7" element={<Project7 />} />
        <Route path="/projects/8" element={<Project8 />} />
        <Route path="/projects/9" element={<Project9 />} />
        <Route path="/projects/3" element={<Project3 />} />
        <Route path="/projects/6" element={<Project6 />} />
        <Route path="/contact" element={<Contact />} />

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </ScrollProvider>
  );
}

export default App;
