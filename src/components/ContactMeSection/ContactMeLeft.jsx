import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-brownishWhite text-3xl mb-4">Get In Touch</h2>
        <p className="text-white">
          Feel free to reach out if you'd like to collaborate <br /> you are jus
          a few clicks away
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
