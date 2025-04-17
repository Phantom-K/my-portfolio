import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-green px-2"
        />
        <input
          type="email"
          placeholder="Your email"
          required
          className="h-12 rounded-lg bg-green px-2"
        />
        <textarea
          type="text"
          placeholder="Message"
          rows={9}
          cols={50}
          required
          className=" rounded-lg bg-green p-2"
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
