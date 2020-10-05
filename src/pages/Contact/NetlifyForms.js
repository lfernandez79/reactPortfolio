/* eslint-disable jsx-a11y/label-has-associated-control */
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
    <div className="container my-5">
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p style={style.text}>
          <label>
            <input style={style.boxShadow} type="text" name="name" size="20" placeholder="Your Name" />
          </label>
        </p>
        <p style={style.text}>
          <label>
            <input style={style.boxShadow} type="email" name="email" size="20" placeholder="your@email.com" />
          </label>
        </p>
        <p style={style.text}>
          <label>
            <textarea style={style.boxShadow} name="message" rows="4" cols="40" placeholder="Your message" />
          </label>
        </p>
        <p className="d-flex justify-content-center">
          <button id="btn" className="btn btn-outline-dark" type="submit">Send</button>
        </p>
        <div data-netlify-recaptcha="true" />
      </form>
    </div>
  );
}

export default NetlifyForm;
