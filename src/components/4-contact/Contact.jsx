import { ValidationError, useForm } from "@formspree/react";
import "./contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/done.json";
import contactAnimation from "../../../src/animation/contact.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xeqbvbev");

  if (state.succeeded) {
    // return <p>Thanks for joining!</p>;
  }
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus pariatur
        aperiam dignissimos culpa quae est, harum accusamus ratione rem veniam
        officiis doloremque quam iusto blanditiis, vel nulla dolore illo!
        Similique?
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} action="">
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="btn" style={{marginTop: "30px"}} type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />{" "}
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="contact-animation">
          <Lottie
            
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
