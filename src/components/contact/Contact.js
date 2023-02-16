import React from "react";
import "./Contact.css";
import Cup from "../cup/Cup";
import ContactForm from "../contactForm/ContactForm";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <div id="contact">
      <div className="chat-section">
        <Card>
          <div className="chat-container">
            <h1 style={{ color: "#121e27" }}>Let's have a chat</h1>
            <div className="info-section">
              <ContactForm />
            </div>

            {/* <div>
            <Cup />
          </div> */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
