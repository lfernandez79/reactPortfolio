/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const style = {
  text: {
    textAlign: "center",
  },
};

function NetlifyForm() {
  return (
    <form name="contact" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p style={style.text}>
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
      </p>
      <p style={style.text}>
        <label>
          Your Email:
          <input type="email" name="email" />
        </label>
      </p>
      <p style={style.text}>
        <label>
          Message:
          <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      <div data-netlify-recaptcha="true" />
    </form>
  );
}

export default NetlifyForm;
