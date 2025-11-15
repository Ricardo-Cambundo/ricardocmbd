import { lazy } from 'react';

import "./App.css";
import './css/blogPost.css'
import './css/contact.css'
import './css/featured.css'
import './css/footer.css'
import './css/header.css'
import './css/hero.css'
import './css/loadingScreen.css'
import './css/posts.css'
import './css/privacy.css'
import './css/projects.css'
import './css/skills.css'
import './css/work.css'

const Header = lazy(() => import('./components/header'));
const Hero = lazy(() => import('./components/hero'));
const Skills = lazy(() => import('./components/skills'));
const Featured = lazy(() => import('./components/featured'));
const Posts = lazy(() => import('./components/posts'));
const Footer = lazy(() => import('./components/footer'));
const Work = lazy(() => import('./components/work'));
import { Route, Routes } from "react-router-dom";
import "./index.css";
import { ScrollProvider } from "./store/context";
import Projects from './pages/projects';
const Privacy = lazy(() => import('./pages/privacy'));
const Blog = lazy(() => import('./pages/blog'));
const Contact = lazy(() => import('./pages/contact'));
const Blog1 = lazy(() => import('./pages/blog/blog1'));
const NotFound = lazy(() => import('./pages/404'));
const Project1 = lazy(() => import('./pages/projects/project1(LevelRH)'));
const Project2 = lazy(() => import('./pages/projects/project2(LevelInvoice)'));
const Project4 = lazy(() => import('./pages/projects/project4(GoingPlaces)'));
const Project7 = lazy(() => import('./pages/projects/project7(SGE)'));
const Project8 = lazy(() => import('./pages/projects/project8(AnimesCMBD)'));
const Project9 = lazy(() => import('./pages/projects/project9(AngoTransExpress)'));
const Project3 = lazy(() => import('./pages/projects/project3(NaVia)'));
const Project6 = lazy(() => import('./pages/projects/project6(AngoTransWeb)'));

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
