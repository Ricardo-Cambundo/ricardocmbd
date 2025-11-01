import { useContext, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../css/contact.css";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "@/store/context";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [load, setLoad] = useState(false);
  const [done, setDone] = useState(false);
  //@ts-ignore
  const {dark} = useContext(ScrollContext)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [errors, setErrors] = useState<Array<any>>([]);

  const submit = () => {
    const r = /^[^\s]*@[a-z0-9.-]*\.[a-z]{2,6}$/;
    setErrors([]);

    if (name.length == 0 || email.length == 0 || body.length == 0) {
      setErrors(["Please fill out all the fields"]);
    } else if (!r.test(email)) {
      setErrors([...errors, "Invalid email entered!"]);
    } else {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        setDone(true);
      }, 3000);
    }
  };

  return (
    <div className="homeBodyContainer">
      <Header />
      <div className="page">
        <div className="greetings" style={{color: dark && 'white'}}>contact me</div>

        <div id="featuredSection" className="contactSection" style={{color: dark && 'white'}}>
          <form>
            <div className="row">
              <div className="col">
                <label>Name</label>
                <input
                    key={dark ? 'dark' : 'light'} 

                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name..."
                />
              </div>
              <div className="col">
                <label>Email</label>
                <input
                  key={dark ? 'dark' : 'light'}

                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email..."
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>What's up</label>
                <textarea
                    key={dark ? 'dark' : 'light'}

                  rows={5}
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                  placeholder="Leave feedback about the site, career opportunities or just to say hello etc..."
                ></textarea>
              </div>
            </div>
            <div className="row">
              <ul className="errors">
                
                {errors.map((i: any, index: number) => {
                  return <li key={index}>{i}</li>;
                })}
              </ul>
              {load && (
                <div className="loader">
                  <div className="inner one"></div>
                  <div className="inner two"></div>
                  <div className="inner three"></div>
                </div>
              )}
              {done && (
                <div
                  style={{
                    color: "green",
                    textAlign: "center",
                    display: "inline-block",
                    margin: "auto",
                    fontSize: 15,
                    marginTop: 20,
                    fontWeight: "600",
                  }}
                >
                  Email sent successfuly. Thank you for your input!!
                </div>
              )}
            </div>

            <div className="row">
              <div
                className="submitButton"
                style={{
                  opacity: load || done ? 0.5 : 1,
                  background: dark && "#eeeeee",
                  color: dark && "black"
                }}
                onClick={() => {
                  setErrors([]);
                  !load && !done
                    ? submit()
                    : alert(
                        "You've just submitted a message just now. Reload the page to submit another message"
                      );
                }}
              >
                Send Message <i className="bi bi-send"></i>
              </div>
              
            </div>
            <div style={{marginTop: 15, fontSize: 14, color: dark ? "#c9c9c9ff" : 'grey'}}>
                By submitting this form, I agree to the{" "}
                <strong style={{color: dark ? "white": 'black', cursor: 'pointer'}}
                  onClick={() => {
                    location.pathname != "/privacy" && navigate("/privacy");
                  }}
                >
                  privacy policy.
                </strong>
              </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
