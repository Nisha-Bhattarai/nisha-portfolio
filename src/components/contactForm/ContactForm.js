import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const notify = () => toast("Message sent");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jwkdawi",
        "template_oeepnvl",
        form.current,
        "244M6N2KCfgJoKd6x"
      )
      .then(
        (result) => {
          console.log(result.text);

          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactForm">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button
          type="submit"
          value="Send"
          className="--btn --btn-primary --text-center"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
