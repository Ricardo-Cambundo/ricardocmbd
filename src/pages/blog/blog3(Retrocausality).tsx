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

const Blog2Part2 = () => {
  const navigate = useNavigate();
  //@ts-ignore
  const { dark, setDark } = useContext(ScrollContext);

  const info = {
    title: "Retrocausality in Computing: When Algorithms Run Backward in Time",
    preDescription: "Exploring how time-symmetric physics could revolutionize computation, from quantum algorithms to error correction.",
    description: "In Part 2, we dive into the practical implications of retrocausality for computer science. How might future quantum computers leverage backward-in-time information flow? What would retrocausal algorithms look like? And could this solve some of quantum computing's biggest challenges?",
    read: 9,
    date: "2025-12-31",
    tags: ["Quantum Computing", "Algorithms", "Information Theory", "Retrocausality", "Computer Science"],
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
            navigate("/blog/retrocausality-part1"); // Link back to Part 1
          }}
          className={`${dark ? "backHome-light" : "backHome"}`}
          style={{
            marginTop: 0,
            display: "inline",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-arrow-left"></i> Read Part 1 First
        </div>
        
        <div id="featuredSection" className="blogPage">
          <div className="image">
            <span
              style={{
                color: dark && "black",
                borderColor: dark && "#eeeeee",
              }}
            >
              <i style={{ marginRight: 10 }} className="bi bi-image-fill"></i>
              {1} image
            </span>
            <div
              style={{overflow: 'hidden', maxHeight: 500, position: 'relative', padding: 0, aspectRatio: '4/2', borderRadius: 10}}
            >
              <img src={retrocausality} style={{objectFit: 'cover', padding: 0}}/>
            </div>
          </div>
          
          <div className="greetings" style={{color: dark && 'white'}}>
            Retrocausality in Computing: When Algorithms Run Backward in Time
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
            
            <div style={{
              background: dark ? '#2a1e2e' : '#f3e5f5',
              padding: '20px',
              borderRadius: '8px',
              margin: '20px 0',
              border: `1px solid ${dark ? '#6a1b9a' : '#ba68c8'}`
            }}>
              <h3>🔙 Quick Recap from Part 1</h3>
              <p>
                We explored how retrocausality suggests the future can influence the past at the quantum level. 
                This offers a third explanation for quantum entanglement that preserves both locality and realism, 
                but requires accepting backward-in-time information flow. Now, let's explore what this means for 
                the world of computation.
              </p>
            </div>

            <h1>1. Quantum algorithms</h1>
            <p>
              Similar to classical algorithms, quantum algorithms are step-by-step procedures for solving a problem, that leverage quantum properties such as superposition and entanglement. If these algorithms were to incorporate retrocausal elements, they could potentially enhance their performance. We'll explore how later on.
              But before we continue, it's important to note that everything in this post is largely theoretical and requires rigorous development with the frameworks of quantum mechanics and computer science. The following table would aso be pertinent for the sake of clarity.
            </p>

            <h2>1.1. Classical algorithms vs. Quantum Algorithms</h2>
            
            <div style={{overflowX: 'auto', margin: '20px 0'}}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: `1px solid ${dark ? '#444' : '#ddd'}`
              }}>
                <thead>
                  <tr style={{background: dark ? '#2a2a3a' : '#f5f5f5'}}>
                    <th style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>Type</th>
                    <th style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>How it Works</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}><strong>Classical Algorithms</strong></td>
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>
                      Operates on bits (0s and 1s). Based on classical physics with a clear cause-effect relationship.
                    </td>
                    
                  </tr>
                  <tr style={{background: dark ? '#1e1e2e' : '#fafafa'}}>
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}><strong>Quantum Algorithms</strong></td>
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>
                      Utilizes qubits that can exist in superpositions of states, enabling parallelism and entanglement (and potentially retrocausality haha).
                    </td>
                    
                  </tr>
                </tbody>
              </table>
            </div>

            <h1>2. Quantum Algorithms with Retrocausal Elements</h1>
            <p>
              Several quantum algorithms already exhibit retrocausal-like features.
            </p>

            <h2>2.1. Grover's Search Algorithm: A Retrocausal Interpretation</h2>
            <p>
              Grover's algorithm searches an unsorted database of N items in O(√N) time, quadratically faster 
              than classical algorithms. 
              The process involves initializing a quantum system. Here's how it might be interpreted retrocausally:
            </p>

            <CopyBlock
              theme={androidstudio}
              language="python"
              text={`# Simplified Grover's Algorithm with retrocausal interpretation
def grovers_algorithm(database, target):
    # 1. Initialization: Equal superposition of all states
    qubits = create_superposition(len(database))
    
    # 2. Oracle application: "Marks" the solution
    # This step seems to "know" what we're looking for
    qubits = apply_oracle(qubits, target)
    
    # 3. Amplitude amplification: Boosts the marked state
    # Retrocausal view: The future measurement "pulls" 
    # the correct state toward higher probability
    qubits = amplify_solution(qubits)
    
    # 4. Measurement: Collapses to the solution
    # The measurement at the end influences the 
    # amplitude distribution earlier in time
    result = measure(qubits)
    return result

# Retrocausal interpretation:
# The final measurement choice (what we consider a "solution")
# influences how the oracle function operates
# The "marking" is correlated with the eventual outcome`}
              showLineNumbers={true}
              wrapLongLines={true}
              codeBlock
            />

            <div style={{overflowX: 'auto', margin: '20px 0'}}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: `1px solid ${dark ? '#444' : '#ddd'}`
              }}>
                <thead>
                  <tr style={{background: dark ? '#2a2a3a' : '#f5f5f5'}}>
                    
                    <th style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>How it Works</th>
                    
                  </tr>
                </thead>
                <tbody>
                 
                  <tr style={{background: dark ? '#1e1e2e' : '#fafafa'}}>
                    
                    <td style={{padding: '12px', border: `1px solid ${dark ? '#444' : '#ddd'}`}}>
                      Grover's search algorithm involves initializing a quantum system into an equal superposition of all possible states, applying an oracle (a special function that "marks" the target state by flipping its phase, meaning it inverts the sign of its amplitude), and then amplifying the marked state's amplitude through a series of operations known as amplitude amplification. Repeating this process iteratively (roughly √N times) increases the probability of measuring the correct target, which is then obtained through a measurement that collapses the quantum state to a specific outcome.
                      This doesn't violate causality operationally, but rather reframes how computation unfolds
                    </td>
                    
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>2.2. Quantum Error Correction: Correcting Errors Before They Happen</h2>
            <p>
              This is where retrocausality gets truly practical. Quantum systems are incredibly fragile, 
              and error correction is their biggest challenge. Currently, QEC (quantum error correction) codes are all strictly causal and time-directed processes. However, here's one proposal that explores how retrocausality might be applied in a hypothetical "retrocausal quantum computing" paradigm:  
            </p>
            {/* <p>
              Imagine a quantum system as a road trip. In a classical view, you drive along the road and if you hit a pothole (error), you fix it afterward. In a retrocausal view, seeing the 
            </p> */}

            <ol style={{paddingLeft: '20px', margin: '15px 0'}}>
              <li>
                <strong>Preemptive/Predictive Error Correction via future-state feedback:</strong> In a retrocausal framework, information from a future state (e.g., after a potential decoherence event or after a full computation) could influence the past to adjust qubit states preemptively. This could allow "self-correcting" mechanisms where impending errors (detected in a future measurement or post-selected outcome) retrocausally suppress noise or decoherence before it fully manifests.
                This idea is better explored by Dr. Youvan on his 2024 publication on "<a href="https://www.researchgate.net/publication/386553046_Retrocausal_Quantum_Computing_Shaping_Knowledge_Across_Time" target="_blank">retrocausal quantum computing</a>". It's imperative to note that these are speculative (highly conceptual), non-peer reviewed works that propose a redesign for quantum computing paradigms.
              </li>
              
            </ol>

            {/* <div style={{
              background: dark ? '#1a2e1a' : '#e8f5e9',
              padding: '20px',
              borderRadius: '8px',
              margin: '20px 0',
              borderLeft: `4px solid ${dark ? '#4caf50' : '#2e7d32'}`
            }}>
              <h3>💡 Practical Implication</h3>
              <p>
                Retrocausal error correction could dramatically reduce the overhead needed for fault-tolerant 
                quantum computing. Instead of needing thousands of physical qubits per logical qubit, we might 
                need orders of magnitude fewer, because errors could be "pre-corrected" through temporal correlations.
              </p>
            </div> */}

            <h1>3. Retrocausal Algorithms: Theoretical Possibilities</h1>
            <p>
              If retrocausality is physically real, what new algorithmic paradigms might emerge?
            </p>

            <h2>3.1. Causality-Violating Communication Protocols</h2>
            <p>Special relativity forbids faster-than-light communication (no sending texts to yesterday's you to fix bad decisions). Yet retrocausal interpretations of quantum mechanics (time-symmetric frameworks, transactional handshakes, two-state vectors) allow future events or choices to subtly shape past states, as long as no usable information travels backward (no-signaling preserved). This creates eerie, non-paradoxical effects that <em>look</em> like causality is being bent. Speculative protocols could include:</p>

            <ul>

              <li><strong>Bidirectional quantum network protocols:</strong> Communication channels that leverage temporal entanglement or future-state feedback for adaptive routing and intrusion detection (e.g., if future analysis spots tampering, the system retrocausally adjusts current configurations to block interference before it fully manifests).</li>
              
              <li><strong>Temporal cryptography:</strong> Encryption schemes where the decryption key (or its verification) emerges or is retrocausally influenced by future measurement outcomes, potentially enabling "future-proof" security through delayed-choice or weak-value amplification (conceptually akin to post-selected ensembles or retrocausal quantum key distribution ideas).
              </li>
            </ul>
              

            <h1>4. The Grand Challenge: Experimental Verification</h1>
            <p>
              The biggest hurdle for retrocausal computing is experimental proof. To move from interpretation 
              to implementation, we need:
            </p>

            <ol style={{paddingLeft: '20px', margin: '15px 0'}}>
              <li><strong>A clear experimental signature</strong> that distinguishes retrocausality from other interpretations</li>
              <li><strong>A working retrocausal algorithm</strong> that outperforms conventional approaches</li>
              <li><strong>A theoretical framework</strong> that makes testable predictions</li>
            </ol>

            <h1>5. Conclusion: Computing in a Time-Symmetric Universe</h1>
            <p>
              Retrocausality offers a radical rethinking of both quantum mechanics and computation. 
              While still speculative, it suggests that:
            </p>

            <ul>
              <li>Computation might not need to follow a strict causal arrow</li>
              <li>Quantum advantages could be explained through temporal correlations</li>
              <li>Error correction and algorithm design could leverage backward-in-time influences</li>
            </ul>

            <p>
              Whether retrocausality becomes a practical tool for computation or remains a fascinating 
              theoretical curiosity depends on both experimental results and theoretical developments. 
              What's clear is that exploring these ideas pushes the boundaries of what we think is 
              computationally possible.
            </p>

            <p>
              The intersection of retrocausality and computer science represents one of the most 
              exciting frontiers in both fields; a place where the nature of time, information, 
              and computation meet in profound and potentially revolutionary ways.
            </p>
            <div style={{
              background: dark ? '#1a2e1a' : '#e8f5e9',
              padding: '20px',
              borderRadius: '8px',
              margin: '20px 0',
              borderLeft: `4px solid ${dark ? '#4caf50' : '#2e7d32'}`
            }}>
              <h3>💡 My final take</h3>
              <p>
                Retrocausal algorithms should not be understood as permitting information to propagate backward in time or as violating causal constraints. Instead, they suggest a shift from strictly sequential, time-forward computation toward models governed by global consistency conditions across the computational timeline. This interpretation aligns naturally with quantum algorithms such as Grover's search (which resembles retrocausal reasoning and embodies a step away from sequential classical search). This standpoint seems to provide great practical feasibility today within current theoretical and experimental paradigms.
              </p>
            </div>

            <footer>
              <hr style={{ marginBottom: 20 }} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px'
              }}>
                <div>
                  <h4>📚 Further Reading</h4>
                  <ul style={{margin: 0, paddingLeft: '20px'}}>
                      <li>Youvan, D. C. (2024). "Quantum Computing with Retrocausality: Redefining Algorithms and Architecture Through Bidirectional Time". ResearchGate preprint.  
      (Proposes retrocausal principles to enhance quantum algorithms like Grover's search via bidirectional temporal feedback, with implications for efficiency, error correction, and adaptive computation.)</li>
                    
    
    <li>Evans, P. W. (various works, e.g., 2015–2023 updates in retrocausality surveys). See also Stanford Encyclopedia of Philosophy entry on "Retrocausality in Quantum Mechanics" (revised 2023).  
      (Provides foundational arguments for retrocausality resolving nonlocality and Bell violations locally, with ongoing relevance to modern time-symmetric models.)</li>
    
    <li>Aravind, P. et al. (2023). "Nonclassical Advantage in Metrology Established via Quantum Simulations of Hypothetical Closed Timelike Curves". Physical Review Letters 131, 150202.  
      (Demonstrates quantum circuits simulating retrocausal effects/CTCs for metrological advantages, linking to practical quantum information processing.)</li>
    
    
  </ul>
                </div>
                
              </div>
            </footer>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '40px',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <div
            onClick={() => {
              navigate("/blog/2");
            }}
            className={`${dark ? "backHome-light" : "backHome"}`}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <i className="bi bi-arrow-left"></i> 
            <div>
              <div style={{fontSize: '0.9em', opacity: 0.8}}>Previous</div>
              <div>Part 1: The Future Affecting the Past</div>
            </div>
          </div>
          
          <div
            onClick={() => {
              navigate("/blog");
            }}
            className={`${dark ? "backHome-light" : "backHome"}`}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <div>
              <div style={{fontSize: '0.9em', opacity: 0.8}}>More Posts</div>
              <div>Browse All Articles</div>
            </div>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Blog2Part2;