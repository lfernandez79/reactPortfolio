import React from "react";
import "./Contact.css";

const style = {
  text: {
    textAlign: "center",
    fontSize: "1.5rem",
  },
  boxShadow: {
    boxShadow: "7px 7px 5px #404040",
    borderTopLeftRadius: "10px 10px",
    borderBottomRightRadius: "10px 10px",
  },
};

function NetlifyForm() {
  return (
    <div className="contact-form">
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p style={style.text}>
          <label>
            <input style={style.boxShadow} type="text" name="name" placeholder="Your Name" />
          </label>
        </p>
        <p style={style.text}>
          <label>
            <input style={style.boxShadow} type="email" name="email" placeholder="your@email.com" />
          </label>
        </p>
        <p style={style.text}>
          <label>
            <textarea style={style.boxShadow} name="message" rows="4" placeholder="Your message" />
          </label>
        </p>
        <p className="contact-form-actions">
          <button className="contact-form-btn" type="submit">Send</button>
        </p>
        <div data-netlify-recaptcha="true" />
      </form>
    </div>
  );
}

export default NetlifyForm;
