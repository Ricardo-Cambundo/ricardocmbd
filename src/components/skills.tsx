import { useContext, useState } from "react";
import "../css/skills.css";
import { ScrollContext } from "@/store/context";

const Skills = () => {
    //@ts-ignore
    const {dark} = useContext(ScrollContext)

    //@ts-ignore
  const [skills, setSkills] = useState([
    {
      title: "TypeScript",
      description: "JavaScript but better",
      icon: "devicon-typescript-plain colored",
      color: "#badaffaf",
    },
    {
      title: "React",
      description: "JavaScript Library",
      icon: "devicon-react-original colored",
      color: "#2b849aff",
    },
    {
      title: "Angular",
      description: "Web framework",
      icon: "devicon-angularjs-plain colored",
      color: '#ab11002e'
    },
    {
      title: "React Native",
      description: "Mobile framework",
      icon: "devicon-reactnative-original colored",
      color: "#074352ff",
    },
    {
      title: "Python",
      description: "Programming lang.",
      icon: "devicon-python-plain colored",
      color: "#0060a4ff",
    },
    {
      title: "Django",
      description: "Python framework",
      icon: "devicon-django-plain colored",
      color: '#3a4b3970'
    },
    {
      title: "PHP",
      description: "Server-side scripting",
      icon: "devicon-php-plain colored",
      color: '#9a9cb75a'
    },
    {
      title: "Laravel",
      description: "PHP framework",
      icon: "devicon-laravel-original colored",
      color: '#f0513f2e'
    },
    {
      title: "GIT",
      description: "Version control",
      icon: "devicon-git-plain colored",
      color: "#ac20002f",
    },
    {
      title: "Docker",
      description: "Containerization",
      icon: "devicon-docker-plain colored",
      color: "#102c3fef",
    },
    {
      title: "PostgreSQL",
      description: "OR DB system",
      icon: "devicon-postgresql-plain colored",
      color: "#28333b38",
    },
    {
      title: "Postman",
      description: "API testing tool",
      icon: "devicon-postman-plain colored",
      color: "#c03a0037",
    },
  ]);
  return (
    <div className="skillsContainer">
      <div className="sectionTitle" style={{color: dark && 'white' }}>current technologies</div>
      <div className="sectionDescription" style={{color: dark && '#e3e3e3' }}>
        I'm proficient in a range of modern technologies. Here are the ones I'm
        currently using.
      </div>

      <div className="skillsGrid">
        {skills.map((i: any, index: number) => {
          return (
            <div className="skill" key={index} style={{backgroundColor: dark ? '#111a27ff': '#F5F5F5', borderColor: dark ? '#283346ff': '#eeeeeec4', borderWidth: 2 }}>
              <div className="skillIconContainer" style={{backgroundColor: i?.color}}>
                <i className={i?.icon} />
              </div>
              <div className="skillInfo" >
                <div className="skillTitle" style={{color: dark && '#e3e3e3' }}>{i?.title}</div>
                <div className="skillDescription" style={{color: dark && '#e3e3e3' }}>{i?.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
