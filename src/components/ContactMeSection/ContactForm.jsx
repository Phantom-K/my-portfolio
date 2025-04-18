import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";

const ContactForm = () => {

const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [message,setMessage] = useState('');
const [success,setSuccess] = useState('');

const handleName = (e) =>{
  setName(e.target.value)
}
const handleEmail = (e) =>{
  setEmail(e.target.value)
}
const handleMessage = (e) =>{
  setMessage(e.target.value)
}

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4gv4bef', 'template_ppnh858', form.current, {
        publicKey: '6A0dMei-eNZaZ224Y',
      })
      .then(
        () => {
         setName('');
         setEmail('');
         setMessage('');
         setSuccess('Message sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <p className="text-brownishWhite">{success}</p>
      <form action="" className="flex flex-col gap-4 text-white " ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-green px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your email"
          required
          className="h-12 rounded-lg bg-green px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows={9}
          cols={50}
          required
          className=" rounded-lg bg-green p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="Submit"
          className="W-full rounded-lg border border-brownishWhite text-white h-12 font-bold text-xl hover:bg-darkgold bg-brownishWhite transition-all duration-500 "
        >
          {" "}
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
