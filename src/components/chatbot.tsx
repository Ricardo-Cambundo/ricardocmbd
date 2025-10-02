import axios from "axios";
import { useEffect, useRef, useState } from "react";

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
  const chave = "XfS78cJC6kbFUb4ow26RXT6EIk5yk6loDf8bHcXF";

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
          "Working with technologies like React.js, React Native, and JavaScript/TypeScript",
        ],
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
          "Working with AngularJS for frontend development and system design",
        ],
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
          "Managing project timelines and client communications",
        ],
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
          "Using React.js and modern web technologies",
        ],
      },
    ],

    skills: {
      languages: ["TypeScript", "JavaScript", "Python", "PHP"],
      frameworks: ["React", "React Native", "Angular", "Django", "Laravel"],
      tools: ["Git", "Docker", "PostgreSQL", "Postman"],
      concepts: [
        "Version Control",
        "Containerization",
        "API Development",
        "Full-Stack Development",
      ],
    },

    education: {
      institution: "Lone Star College-CyFair",
      degree: "AS of Science in Computer Science",
      duration: "May 2024 - Present · 1 yr 4 mos",
      location: "Montgomery, Texas · Hybrid",
      status: "Currently pursuing - Full-time student",
      highlights:
        "Currently building foundation in computer science principles and programming fundamentals",
    },

    currentFocus: [
      "Full-stack web and mobile development",
      "Advanced TypeScript and React ecosystems",
      "Database design with PostgreSQL",
      "Containerization with Docker",
      "API development and integration",
    ],
  };
  const getFallbackResponse = (question: any) => {
    const lowerQ = question.toLowerCase();

    if (
      lowerQ.includes("hi") ||
      lowerQ.includes("hello") ||
      lowerQ.includes("hey")
    ) {
      return "Hello! I'm Ricardo's portfolio assistant. I can tell you about his skills in TypeScript, React, Angular, mobile development, and more! What would you like to know?";
    } else if (
      lowerQ.includes("experience") ||
      lowerQ.includes("work") ||
      lowerQ.includes("job")
    ) {
      return "Ricardo has experience as a Mobile/Web Developer at Level Soft Angola, Software Developer at ISPAJ, and freelance development since 2022. He works with TypeScript, React, React Native, Angular, and full-stack technologies.";
    } else if (
      lowerQ.includes("skill") ||
      lowerQ.includes("tech") ||
      lowerQ.includes("framework") ||
      lowerQ.includes("technology")
    ) {
      return `Ricardo's current tech stack includes:
• Languages: ${portfolioData.skills.languages.join(", ")}
• Frameworks: ${portfolioData.skills.frameworks.join(", ")}
• Tools: ${portfolioData.skills.tools.join(", ")}
He specializes in full-stack and mobile development.`;
    } else if (lowerQ.includes("typescript") || lowerQ.includes("javascript")) {
      return "Ricardo is proficient in TypeScript and JavaScript, using them for React, React Native, and Angular development. He prefers TypeScript for its type safety and better developer experience.";
    } else if (lowerQ.includes("react") && lowerQ.includes("native")) {
      return "Ricardo has extensive experience with React Native for cross-platform mobile app development. He's built mobile applications for both iOS and Android platforms.";
    } else if (lowerQ.includes("react")) {
      return "Ricardo is skilled in React for building modern web applications. He uses React with TypeScript for type-safe component development and state management.";
    } else if (lowerQ.includes("angular")) {
      return "Ricardo works with Angular for enterprise-level web applications, particularly in his role at ISPAJ where he develops management systems for the academic institution.";
    } else if (lowerQ.includes("python") || lowerQ.includes("django")) {
      return "Ricardo uses Python and Django for backend development, creating robust server-side applications and APIs.";
    } else if (lowerQ.includes("php") || lowerQ.includes("laravel")) {
      return "Ricardo has experience with PHP and Laravel for server-side scripting and web application development.";
    } else if (lowerQ.includes("docker") || lowerQ.includes("container")) {
      return "Ricardo uses Docker for containerization, making applications more portable and deployment processes more efficient.";
    } else if (
      lowerQ.includes("database") ||
      lowerQ.includes("postgres") ||
      lowerQ.includes("sql")
    ) {
      return "Ricardo works with PostgreSQL for database management, designing and implementing efficient database systems for his applications.";
    } else if (
      lowerQ.includes("education") ||
      lowerQ.includes("school") ||
      lowerQ.includes("college") ||
      lowerQ.includes("degree")
    ) {
      return `Ricardo is currently pursuing an AS in Computer Science at Lone Star College-CyFair (May 2024 - Present). He's building a strong foundation in computer science principles while gaining practical development experience through his work.`;
    } else if (
      lowerQ.includes("level soft") ||
      lowerQ.includes("current company")
    ) {
      return "At Level Soft Angola, Ricardo designs and develops mobile and web applications using modern technologies like TypeScript, React, React Native, and various web frameworks.";
    } else if (lowerQ.includes("ispa") || lowerQ.includes("academic")) {
      return "At ISPAJ, Ricardo develops web-based management systems using Angular and other technologies for one of Angola's largest private academic institutions.";
    } else if (
      lowerQ.includes("freelance") ||
      lowerQ.includes("side project")
    ) {
      return "Ricardo has been doing freelance development since 2022, working on mobile apps with React Native and web applications with React and modern frameworks for various clients.";
    } else if (
      lowerQ.includes("contact") ||
      lowerQ.includes("email") ||
      lowerQ.includes("linkedin")
    ) {
      return "You can contact Ricardo through his LinkedIn profile or email. Check the contact section of this website for details!";
    } else if (lowerQ.includes("project") || lowerQ.includes("portfolio")) {
      return "Ricardo has worked on various mobile and web projects using his full-stack skills. You can check out his projects section to see detailed examples of his work with React, React Native, Angular, and other technologies.";
    } else if (lowerQ.includes("what can you do") || lowerQ.includes("help")) {
      return "I can tell you about Ricardo's: technical skills (TypeScript, React, Angular, etc.), work experience, education, projects, and how to contact him. What would you like to know?";
    } else {
      return "I'd be happy to tell you about Ricardo's experience and skills! He works with TypeScript, React, React Native, Angular, Python, and full-stack technologies. What specific area interests you?";
    }
  };
  const callHuggingFaceAPI = async (question: any) => {
    const messages = [
    {
      role: 'system',
      content: `You are Ricardo Cambundo's portfolio assistant. 
      Ricardo was born in March 3rd 2004, so do calculations if they ask for age or something. This is my linkedin about section: 'What does it take to truly get acquainted with someone? I could share my passion for delving deeply into the intricacies of software engineering and the complexities of computer science problems, subjects, and ventures. I'm so enamored with these topics, in fact, that I've decided to fashion a career out of it.

Or perhaps I could outline my history to demonstrate my genuine enthusiasm for this stuff. For instance, my fascination with programming dates back to as far as my memory can reach. As a little boy i would study game dev concepts out of curiosity about how my favorite games were made.

Is that all there is to it? What about how I translate those insights into action? I'm actively engaged in creating software and putting it to use, not just studying it. So, what's my underlying motive?

In essence, it's my modest attempt to contribute to the digital realm step by step, serving as a guide for those who follow in my footsteps. 
I also enjoy drawing/painting, playing basketball, reading/writing, boxing and lifting some weights.

One of my most notable aptitudes is the capacity to rapidly and effectively learn and acquire new skills, without abandoning them when faced with challenges.

That's me in a nutshell :).
Also I’m currently in Huntsville, Tx, but I'm working as Mobile App Developer at Level Soft - an Angolan software house, that in short creates and implements technological solutions, whether that’s creating websites or mobile apps, responding to the specific needs of each client.'. Ricardo is fluent in English and Portuguese. Although I'm currently working, I am looking for better opportunities as of now. Ricardo is currently in Huntsville, Texas, United States. My email is ricardocmbd@gmail.com and my number is +1 (713) 962-6214. Social media links: linkedin (https://www.linkedin.com/in/ricardo-cambundo-bab2a0210/), instagram (https://www.instagram.com/ricardocmbd/), github (https://github.com/Ricardo-Cambundo). Ricardo was born in Angola. Ricardo is a software developer from Angola currently studying Computer Science in Texas. Answer questions about his professional background professionally. Some of my projects are 
Level RH
Highly tested and used complete human resource management system for employee tracking, payroll and much more
AngularJS
JavaScript
Laravel/PHP
PostgreSQL
Google SMTP
Twilio SMS
Docker
JWT
Source
Read more

Level Invoice
Highly tested and used web-based platform for generating, tracking, and automating invoices
AngularJS
JavaScript
Laravel/PHP
PostgreSQL
Google SMTP
Twilio SMS
Docker
JWT
Source
Read more

NaVia
Cross-platform m-commerce app with courier logistics (IOS/Android)
React Native
TypeScript
JWT
PostgreSQL
Laravel/PHP
Firebase
Websockets
IOS
Android
Source
Read more

GoingPlaces
Car rental/sharing mobile application for IOS and Android
React Native
JavaScript
Django
Python
JWT
PostgreSQL
Firebase
Websockets
IOS
Android
Source
Read more

ISPAJ
Official website for one of Angola's biggest Higher Polytechnic Institute with 10k+ monthly visitors
React
JavaScript
Laravel/PHP
PostgreSQL
Google SMTP
RestAPIs
JWT
10k+ visitors/month
Website
Source
Read more

AngoTrans Express website
Corporate website for a company specialized in road transport and cargo transportation solutions
React
JavaScript
Laravel/PHP
PostgreSQL
Google SMTP
Twilio SMS
Docker
JWT
Website
Source
Read more

AngoTrans Express
Real-time bus tracking mobile app for IOS and Android
React Native
JavaScript
JWT
PostgreSQL
Laravel/PHP
Firebase
Websockets
IOS
Android
Source
Read more

AnimesCMBD
Anime cataloging mobile app for IOS and Android
React Native
JavaScript
Django
Python
JWT
PostgreSQL
Firebase
Websockets
IOS
Android
Source
Read more

Internship Management System
Already in use, this is an enterprise platform for academic/medical internship coordination
React
JavaScript
Laravel/PHP
PostgreSQL
Google SMTP
Docker
JWT
Source
Read more. To see more, one could just visite the projects section of this website.

Ricardo's Technical Profile:
- CURRENT TECHNOLOGIES: TypeScript, JavaScript, React, Angular, React Native, Python, Django, PHP, Laravel, Git, Docker, PostgreSQL, Postman
- CURRENT EDUCATION: Pursuing AS in Computer Science at Lone Star College-CyFair (May 2024-Present)
- EXPERIENCE: Mobile/Web Developer at Level Soft Angola, Software Developer at ISPAJ, Freelance developer since 2022
- SPECIALTIES: Full-stack web development, mobile app development, cross-platform solutions

Important: The current date is ${new Date().toISOString()}. Keep responses professional, concise, and focused on Ricardo's skills and experience. If unsure, suggest asking about his projects or tech stack. And try to be concise and short if possible, unless the user asks for you to expand. And give me an html reponse so i can then set inside dangerouslySetInnerHTML and don't have any uncessary texts so the user can't tell what's going on in the back like ${'```html and ```'}. It's important to not say things like 'Here is the HTML response:'`,
    },
    {
      role: 'user',
      content: question,
    },
  ];

  console.log('Sending messages:', messages); // debug

  try {
    const response = await fetch("https://api.cohere.com/v2/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${chave}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "stream": false,

        model: "command-a-03-2025", // or your model
        messages: messages,
        // max_tokens: 200,
        // temperature: 0.7,
        // other params
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Cohere API error:", errText);
      return '';
    }
    const data = await response.json();
    console.trace('response', data)
    return data.message?.content?.[0]?.text || '';
  } catch (error) {
    console.error("Error calling Cohere:", error);
    return '';
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
    console.trace('bot response', botResponse)
    if (!botResponse || `${botResponse}`.trim() === "") {
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
  }, [thinking]);

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
                      <div dangerouslySetInnerHTML={{ __html: item?.message}}></div>
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
                  <div style={{ border: "none" }}>
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
            onClick={() => {
              setHistory([])
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
            style={{cursor: 'pointer'}}
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
