import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white ">
      <SingleInfo text="Sowemimoakorede7@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+234-701-912-7932" Image={FiPhone} />
      <SingleInfo text="Lagos,Nigeria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
