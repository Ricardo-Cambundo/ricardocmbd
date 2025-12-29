import Footer from "@/components/footer";
import "../../css/blogPost.css";
import Header from "@/components/header";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { format } from "date-fns";
//@ts-ignore
import {
  CopyBlock,
  androidstudio,
} from "react-code-blocks";
import { useContext, useEffect } from "react";
import { ScrollContext } from "@/store/context";
import retrocausality from "../../assets/images/blog/retrocausality.svg";


const Blog2 = () => {
  const navigate = useNavigate();
  //@ts-ignore
  const { dark, setDark } = useContext(ScrollContext);

  const info = {
    title: "The Future Affecting the Past: A Beginner's Guide to Retrocausality",
    preDescription: "Exploring the mind-bending concept where effects might precede causes in the quantum realm.",
    description: "Retrocausality challenges everything we know about time and causality. This first part explores the basic concepts, quantum puzzles, and why physicists are seriously considering that the future might influence the past.",
    read: 7,
    date: "2025-12-29",
    tags: ["Quantum Physics", "Retrocausality", "Time", "Quantum Mechanics", "Science"],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homeBodyContainer">
      <Header />
      <div className="page" style={{ paddingTop: 40 }}>
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
              style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0,}}
            >
              {/* Placeholder for retrocausality visualization image */}
              <div
              className={`${dark ? "imageContainer-light" : "imageContainer"}`}
             style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0, objectFit: 'cover'}}>
              {/* <img loading="lazy" src={levelinvoice} /> */}
              <img src={retrocausality} style={{objectFit: 'cover', padding: 0, }}/>
            </div>
            </div>
          </div>
          
          <div className="greetings" style={{color: dark && 'white'}}>
            The Future Affecting the Past: A Beginner's Guide to Retrocausality
          </div>
          
          <div className="preDescription" style={{color: dark && '#c9c9c9ff'}}>
            {info?.preDescription}
          </div>
          
          <div className="dateInfo" style={{color: dark && '#c9c9c9ff'}}>
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
                <div key={ind} className="tag" style={{background: dark && '#243044ff', color: dark && 'white'}}>
                  {tag}
                </div>
              );
            })}
          </div>

          <div className="content" style={{ color: dark && "white" }}>
            <hr />
            <p>{info?.description}</p>
            
            <h1>1. An Unintuitive Story: The Burning Tree</h1>
            <p>
              Imagine you come across a burning tree in a forest. As you watch, the fire begins to die down, 
              and you see the charred trunk return to a pristine tree. Just as the flame is at its smallest, 
              you hear a roar of thunder roll across the sky. Then, a lightning bolt strikes the tree, 
              extinguishing the fire completely.
            </p>
            <p>
              This story feels deeply wrong because the events are backward: the effect came before the cause. 
              This is the core principle of retrocausality: the idea that the future can affect the past.
              While this story is pure fantasy, our own perception of time is governed by a much stricter, 
              more familiar sequence of events.
            </p>

            <h1>2. The Arrow of Time: Our Everyday Experience</h1>
            <p>
              On a human scale, we perceive time as flowing in only one direction, like an arrow shot from a bow. 
              A cause always comes before its effect: you flip a switch, then the light turns on; you drop a glass, 
              then it shatters. This one-way flow is known as the arrow of time, and it's how we experience the universe—unless, 
              of course, you're stuck on a customer service line, which can feel like a never-ending game where the only prize 
              is your sanity slowly slipping away.
            </p>
            <p>
              The problem with this familiar, everyday perspective is that it can obscure the stranger phenomena 
              that occur when you peel back the chaos and get down to the universe's most fundamental parts. 
              It's at this quantum level where physicists are forced to question the absolute nature of our arrow of time.
            </p>

            <h1>3. The Quantum Puzzle: Why Physicists Question Time</h1>
            
            <h2>3.1. The Universe's Building Blocks</h2>
            <p>
              When we look at the universe's smallest building blocks—atoms and particles—we find that it operates 
              in deeply counterintuitive ways. The rules of this quantum realm have led to questions that make 
              physicists uncomfortable. One of the biggest, central to the 2022 Nobel Prize in Physics, is this: 
              Is the universe "locally real"?
            </p>

            <h2>3.2. Defining the Key Terms: Locality vs. Realism</h2>
            <p>
              To understand the puzzle, we first need to define those two crucial terms. "Locally real" is a combination 
              of two ideas we normally take for granted.
            </p>
            
            <div style={{overflowX: 'auto', margin: '20px 0'}}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: `1px solid ${dark ? '#444' : '#ddd'}`
              }}>
                <thead>
                  <tr style={{background: dark ? '#2a2a3a' : '#f5f5f5'}}>
                    <th style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>Term</th>
                    <th style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>Simple Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}><strong>Locality</strong></td>
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>
                      A cause can only have an effect on things nearby. Information travels at a maximum speed 
                      (the speed of light), so you can't press a button here and have something instantaneously 
                      happen in another galaxy.
                    </td>
                  </tr>
                  <tr style={{background: dark ? '#1e1e2e' : '#fafafa'}}>
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}><strong>Realism</strong></td>
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>
                      Objects have definite, fixed properties even when we aren't looking. A packet of crisps 
                      in the cupboard is salty both when you reach for it and for all the time prior to that point.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Both of these ideas seem completely reasonable, but physicists have proven that at the quantum level, 
              at least one of them must be wrong.
            </p>

            <h2>3.3. The Entangled Photon Experiment</h2>
            <p>
              The proof comes from a mind-bending experiment involving entangled particles. Here's how it works:
            </p>
            
            <CopyBlock
              theme={androidstudio}
              language="python"
              text={`# Simplified representation of photon entanglement
def create_entangled_photons():
    original_photon = Photon(spin=0)
    # Crystal splits photon into two entangled photons
    photon_a, photon_b = split_photon(original_photon)
    
    # Conservation of spin: spin_a + spin_b = 0
    return photon_a, photon_b  # Entangled pair`}
              showLineNumbers={true}
              wrapLongLines={true}
              codeBlock
            />
            
            <ol style={{paddingLeft: '20px', margin: '15px 0'}}>
              <li>
                A special crystal, called a spontaneous parametric down-conversion crystal, 
                splits a single photon with zero spin into two new "entangled" photons.
              </li>
              <li>
                Because of the law of conservation of spin (angular momentum), the spins of these two new photons 
                must be equal and opposite to cancel each other out and equal the original's zero spin. However, 
                their specific state (e.g., "up" or "down") is unknown until one is measured.
              </li>
              <li>
                The moment you measure one photon, you instantly know the state of the other, no matter how far apart they are.
              </li>
            </ol>
            
            <p>
              The most counterintuitive part is this: how you decide to measure the first photon determines the 
              correlated property of the second one. If you set up your detector to measure for "up" or "down" spin, 
              the other photon will also be correlated in an up/down state. If you instead measure for "left" or "right" spin, 
              the other photon will be correlated in a left/right state.
            </p>

            <h2>3.4. Two Uncomfortable Explanations</h2>
            <p>
              This result leaves us with two standard, but frustrating, explanations for how the second photon "knows" 
              what to do. This question was at the heart of a long-running debate between some of science's greatest minds.
            </p>
            
            <div style={{
              background: dark ? '#1a1a2e' : '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              margin: '20px 0',
              borderLeft: `4px solid ${dark ? '#4a6fa5' : '#007bff'}`
            }}>
              <h3>Explanation 1: The Universe is Locally Real</h3>
              <p>
                This was the view championed by figures like Albert Einstein. It suggests that the photons had their 
                properties decided from the very start. This information, called "hidden variables," was encoded in 
                them at the moment of their creation. This idea has found modern life in theories like superdeterminism, 
                explored by physicists like Sabine Hossenfelder, but it remains experimentally challenged.
              </p>
            </div>
            
            <div style={{
              background: dark ? '#1a1a2e' : '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              margin: '20px 0',
              borderLeft: `4px solid ${dark ? '#ff6b6b' : '#dc3545'}`
            }}>
              <h3>Explanation 2 (The Accepted View): The Universe is Not Locally Real</h3>
              <p>
                This is the current consensus, aligned with the views of physicists like Niels Bohr. It states that 
                the photons do not have definite states until the moment of measurement. When one is measured, they 
                communicate their new state to each other instantaneously, violating the principle of locality. 
                This is often seen as a "doubly frustrating" explanation because it requires both a lack of realism 
                and faster-than-light communication.
              </p>
            </div>
            
            <p>
              This uncomfortable choice has led some physicists to explore a third, radical alternative.
            </p>

            <h1>4. A Third Option: The Retrocausal Explanation</h1>
            <p>
              Retrocausality offers a way out of the dilemma by reinterpreting the sequence of events. 
              In this model, the measurement made on the first particle sends that information back through time 
              to the moment of creation. This backward-in-time correlation allows the information to be embedded 
              in both photons from the very beginning. This way, they are always "in agreement" on their spin direction 
              when they are eventually measured, without needing hidden variables or instantaneous communication.
            </p>
            <p>
              This might sound like just another strange idea, but what's the payoff? Why would physicists even 
              consider such a radical departure from our normal view of time?
            </p>

            <h1>5. Weighing the Idea: Pros and Cons of Retrocausality</h1>
            <p>
              The retrocausal model is a trade-off. It solves some profound problems in quantum mechanics, 
              but it introduces new ones that are just as challenging.
            </p>

            <h2>5.1. What Retrocausality Fixes</h2>
            <ul>
              <li>
                <strong>It makes the universe "real" again.</strong> Particles can have definite properties 
                from the moment they are created. We just don't know what they are until we measure them.
              </li>
              <li>
                <strong>It removes faster-than-light communication.</strong> There is no need for "spooky action 
                at a distance," as the correlation was established in their shared past.
              </li>
              <li>
                <strong>It simplifies the wave function.</strong> The mysterious quantum wave function (which 
                describes a particle as being in all possible states at once) is no longer a physically real object. 
                Instead, it becomes a mathematical tool reflecting our incomplete knowledge. This makes the universe 
                feel much more classical, potentially offering a more compatible way of integrating the quantum world 
                with theories like general relativity.
              </li>
            </ul>

            <h2>5.2. The New Problems It Creates</h2>
            <p>
              Ultimately, this feels a bit like a bait and switch. Yes, we get rid of two uncomfortable ideas, 
              but we replace them with what feels like "one idea that's almost twice as uncomfortable." 
              Retrocausality introduces its own profound challenges:
            </p>
            <ul>
              <li>
                <strong>It requires a new mechanism.</strong> We would need a way to explain how information 
                can correlate backward through time.
              </li>
              <li>
                <strong>It contradicts our understanding of time's arrow.</strong> Retrocausality relies on the 
                universe being "time symmetric"—meaning the laws of physics work the same forward and backward. 
                This appears to clash with the second law of thermodynamics, which states that entropy (disorder) 
                always increases, giving time its forward direction.
              </li>
            </ul>

            <h1>6. Conclusion: A Puzzle for the Future</h1>
            <p>
              Retrocausality is a profound and unproven idea that attempts to solve some of the deepest mysteries 
              in quantum mechanics by suggesting that, at the most fundamental level, the future can influence the past.
            </p>
            <p>
              But ultimately, this mind-bending concept feels like a roundabout way of getting back to a theory like 
              superdeterminism, where everything is connected and predetermined from the start. It suggests that the 
              measurement you were going to make was always correlated to the photon's starting conditions, and the 
              universe is just naturally playing out in a deterministic fashion.
            </p>
            <p>
              This raises a final, philosophical question. If I asked you to hit the like button on a video, was it 
              always predetermined on a quantum level whether you would or not? The debate around retrocausality 
              shows just how deeply we must question reality—and perhaps even our own free will—to make sense of 
              the universe.
            </p>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <p>
                <strong>Next in Part 2:</strong> We'll explore how retrocausality connects to computer science, 
                quantum computing, and what this means for information processing in a time-symmetric universe. 
                How might future quantum computers leverage these principles? And what would retrocausal algorithms look like?
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

export default Blog2;