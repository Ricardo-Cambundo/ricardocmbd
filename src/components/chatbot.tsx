import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { pipeline } from "@huggingface/transformers";

// const chatPipeline = await pipeline("conversational", "microsoft/DialoGPT-medium");


// fix the thinkiniggg logic to automatically scroll down after sending and while thinking
const Chatbot = ({
  chatText,
  setChatText,
  chatExpand,
  setChatExpand,
  history,
  setHistory,
}: {
  chatText: string;
  setChatText: any;
  chatExpand: any;
  setChatExpand: any;
  history: Array<{}>;
  setHistory: any;
}) => {

  const [thinking, setThinking] = useState(false);
  const HF_API_KEY = "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"

  const portfolioData = {
    experience: [
      {
        company: "Level Soft - Angola",
        position: "Mobile/Web Application Developer",
        duration: "May 2024 - Present · 1 yr 5 mos",
        location: "Luanda Province, Angola · On-site",
        type: "Full-time",
        descriptions: [
          "Designing and developing innovative mobile applications for iOS and Android platforms",
          "Creating responsive web applications that meet client-specific needs",
          "Collaborating with clients to understand their requirements and deliver tailored solutions",
          "Implementing modern UI/UX designs for enhanced user experience",
          "Working with technologies like React.js, React Native, and JavaScript/TypeScript"
        ]
      },
      {
        company: "ISPAJ Instituto Superior Politécnico Alvorecer da Juventude",
        position: "Software Developer",
        duration: "May 2024 - Present · 1 yr 5 mos",
        location: "Hybrid",
        type: "Full-time",
        descriptions: [
          "Designing, developing and maintaining innovative web-based management systems",
          "Creating solutions for one of Angola's biggest private academic institutions",
          "Working with AngularJS for frontend development and system design"
        ]
      },
      {
        company: "Freelance",
        position: "Mobile Application Developer",
        duration: "Nov 2022 - Present · 2 yrs 11 mos",
        location: "Remote",
        type: "Freelance",
        descriptions: [
          "Developing mobile applications for various clients across different industries",
          "Creating cross-platform solutions using React Native",
          "Managing project timelines and client communications"
        ]
      },
      {
        company: "Freelance",
        position: "Web Developer",
        duration: "Feb 2022 - Present · 3 yrs 8 mos",
        location: "Remote",
        type: "Freelance",
        descriptions: [
          "Creating websites and web applications for diverse clients and projects",
          "Developing responsive designs that work across different devices",
          "Using React.js and modern web technologies"
        ]
      }
    ],
    
    skills: {
      languages: ["TypeScript", "JavaScript", "Python", "PHP"],
      frameworks: ["React", "React Native", "Angular", "Django", "Laravel"],
      tools: ["Git", "Docker", "PostgreSQL", "Postman"],
      concepts: ["Version Control", "Containerization", "API Development", "Full-Stack Development"]
    },
    
    education: {
      institution: "Lone Star College-CyFair",
      degree: "AS of Science in Computer Science",
      duration: "May 2024 - Present · 1 yr 4 mos",
      location: "Montgomery, Texas · Hybrid",
      status: "Currently pursuing - Full-time student",
      highlights: "Currently building foundation in computer science principles and programming fundamentals"
    },
    
    currentFocus: [
      "Full-stack web and mobile development",
      "Advanced TypeScript and React ecosystems",
      "Database design with PostgreSQL",
      "Containerization with Docker",
      "API development and integration"
    ]
  };
  const getFallbackResponse = (question: any) => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('hi') || lowerQ.includes('hello') || lowerQ.includes('hey')) {
      return "Hello! I'm Ricardo's portfolio assistant. I can tell you about his skills in TypeScript, React, Angular, mobile development, and more! What would you like to know?";
    } 
    else if (lowerQ.includes('experience') || lowerQ.includes('work') || lowerQ.includes('job')) {
      return "Ricardo has experience as a Mobile/Web Developer at Level Soft Angola, Software Developer at ISPAJ, and freelance development since 2022. He works with TypeScript, React, React Native, Angular, and full-stack technologies.";
    } 
    else if (lowerQ.includes('skill') || lowerQ.includes('tech') || lowerQ.includes('framework') || lowerQ.includes('technology')) {
      return `Ricardo's current tech stack includes:
• Languages: ${portfolioData.skills.languages.join(', ')}
• Frameworks: ${portfolioData.skills.frameworks.join(', ')}
• Tools: ${portfolioData.skills.tools.join(', ')}
He specializes in full-stack and mobile development.`;
    } 
    else if (lowerQ.includes('typescript') || lowerQ.includes('javascript')) {
      return "Ricardo is proficient in TypeScript and JavaScript, using them for React, React Native, and Angular development. He prefers TypeScript for its type safety and better developer experience.";
    }
    else if (lowerQ.includes('react') && lowerQ.includes('native')) {
      return "Ricardo has extensive experience with React Native for cross-platform mobile app development. He's built mobile applications for both iOS and Android platforms.";
    }
    else if (lowerQ.includes('react')) {
      return "Ricardo is skilled in React for building modern web applications. He uses React with TypeScript for type-safe component development and state management.";
    }
    else if (lowerQ.includes('angular')) {
      return "Ricardo works with Angular for enterprise-level web applications, particularly in his role at ISPAJ where he develops management systems for the academic institution.";
    }
    else if (lowerQ.includes('python') || lowerQ.includes('django')) {
      return "Ricardo uses Python and Django for backend development, creating robust server-side applications and APIs.";
    }
    else if (lowerQ.includes('php') || lowerQ.includes('laravel')) {
      return "Ricardo has experience with PHP and Laravel for server-side scripting and web application development.";
    }
    else if (lowerQ.includes('docker') || lowerQ.includes('container')) {
      return "Ricardo uses Docker for containerization, making applications more portable and deployment processes more efficient.";
    }
    else if (lowerQ.includes('database') || lowerQ.includes('postgres') || lowerQ.includes('sql')) {
      return "Ricardo works with PostgreSQL for database management, designing and implementing efficient database systems for his applications.";
    }
    else if (lowerQ.includes('education') || lowerQ.includes('school') || lowerQ.includes('college') || lowerQ.includes('degree')) {
      return `Ricardo is currently pursuing an AS in Computer Science at Lone Star College-CyFair (May 2024 - Present). He's building a strong foundation in computer science principles while gaining practical development experience through his work.`;
    }
    else if (lowerQ.includes('level soft') || lowerQ.includes('current company')) {
      return "At Level Soft Angola, Ricardo designs and develops mobile and web applications using modern technologies like TypeScript, React, React Native, and various web frameworks.";
    } 
    else if (lowerQ.includes('ispa') || lowerQ.includes('academic')) {
      return "At ISPAJ, Ricardo develops web-based management systems using Angular and other technologies for one of Angola's largest private academic institutions.";
    }
    else if (lowerQ.includes('freelance') || lowerQ.includes('side project')) {
      return "Ricardo has been doing freelance development since 2022, working on mobile apps with React Native and web applications with React and modern frameworks for various clients.";
    }
    else if (lowerQ.includes('contact') || lowerQ.includes('email') || lowerQ.includes('linkedin')) {
      return "You can contact Ricardo through his LinkedIn profile or email. Check the contact section of this website for details!";
    }
    else if (lowerQ.includes('project') || lowerQ.includes('portfolio')) {
      return "Ricardo has worked on various mobile and web projects using his full-stack skills. You can check out his projects section to see detailed examples of his work with React, React Native, Angular, and other technologies.";
    }
    else if (lowerQ.includes('what can you do') || lowerQ.includes('help')) {
      return "I can tell you about Ricardo's: technical skills (TypeScript, React, Angular, etc.), work experience, education, projects, and how to contact him. What would you like to know?";
    }
    else {
      return "I'd be happy to tell you about Ricardo's experience and skills! He works with TypeScript, React, React Native, Angular, Python, and full-stack technologies. What specific area interests you?";
    }
  };
  const callHuggingFaceAPI = async (question: any) => {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
        {
          inputs: `You are Ricardo Cambundo's portfolio assistant. Ricardo is a software developer from Angola currently studying Computer Science in Texas. Answer questions about his professional background professionally.

Ricardo's Technical Profile:
- CURRENT TECHNOLOGIES: TypeScript, JavaScript, React, Angular, React Native, Python, Django, PHP, Laravel, Git, Docker, PostgreSQL, Postman
- CURRENT EDUCATION: Pursuing AS in Computer Science at Lone Star College-CyFair (May 2024-Present)
- EXPERIENCE: Mobile/Web Developer at Level Soft Angola, Software Developer at ISPAJ, Freelance developer since 2022
- SPECIALTIES: Full-stack web development, mobile app development, cross-platform solutions

Important: Keep responses professional, concise, and focused on Ricardo's technical skills and experience. If unsure, suggest asking about his specific technologies or projects.

User Question: ${question}

Assistant Response:`
        },
        {
          headers: {
            'Authorization': `Bearer ${HF_API_KEY}`,
            'Content-Type': 'application/json',
          },
          timeout: 10000
        }
      );
      
      
      return response.data.generated_text;
    } catch (error) {
      console.error('Hugging Face API error:', error);
      return null;
    }
  };

  
  const chatScrollRef = useRef<any>(null);
  const scrollToBottom = () => {
    if (chatScrollRef?.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  };

  const send = async () => {
    
    setHistory([
      ...history,
      {
        bot: false,
        message: chatText,
      },
    ]);
    setChatText("");

    setThinking(true);
    scrollToBottom();
    let botResponse = await callHuggingFaceAPI(chatText);
    if (!botResponse || botResponse.trim() === '') {
      botResponse = getFallbackResponse(chatText);
    }
    setTimeout(() => {
      setThinking(false);
       setHistory((prevHistory: any) => [
      ...prevHistory,
      {
        bot: true,
        message: botResponse,
      },
    ]);
      scrollToBottom();

    }, 500);
  };
  useEffect(() => {
    scrollToBottom();
  }, [thinking])

  return (
    <div className="chatbox">
      <div
        className="chatHeader"
        onClick={() => {
          setChatExpand(!chatExpand);
        }}
      >
        <div className="left">
          <span>Chat with</span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                clipPath: "circle()",
                background: "#3CC698",
              }}
            >
              ·
            </div>
            CMBD Support
          </div>
        </div>
        {chatExpand ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </div>
      {chatExpand && <hr></hr>}
      <div className="chatContainer" style={{ height: chatExpand ? 350 : 0 }}>
        <div className="chatDialog">
          {history?.length == 0 ? (
            <div
              style={{
                padding: 20,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-robot"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
              <div style={{ fontSize: 14, fontWeight: "600" }}>
                Send a message to start the chat!
              </div>
              <div style={{ fontSize: 12.5, color: "grey" }}>
                You can ask the bot anything about me and it will help to find
                the relevant information!
              </div>
            </div>
          ) : (
            <div className="messages" ref={chatScrollRef}>
              {history.map((item: any, index: number) => {
                if (!item?.bot) {
                  return (
                    <div className="meMessage" key={index}>
                      {item?.message}
                    </div>
                  );
                } else {
                  return (
                    <div className="botMessage" key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="bi bi-robot"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                      </svg>
                      <div>{item?.message}</div>
                    </div>
                  );
                }
              })}
              {thinking && (
                <div className="botMessage">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="bi bi-robot"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
                  <div style={{border: 'none'}}>
                    <div className="loader">
                      <div className="inner one"></div>
                      <div className="inner two"></div>
                      <div className="inner three"></div>
                    </div>
                  </div>
                
                </div>
              )}
            </div>
          )}
        </div>

        <div className="chatFooter">
          <svg
            onClick={() => {}}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>

          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                send();
              }
            }}
            type="text"
            value={chatText}
            onChange={(e) => {
              setChatText(e.target.value);
            }}
            placeholder="Ask something..."
          />

          <svg
            style={{
              cursor: "pointer",
              background: chatText.length > 0 ? "black" : "white",
              color: chatText.length > 0 ? "white" : "black",
            }}
            onClick={() => {
              send();
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Chatbot;
