import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSocial = () => {
  return <div className="flex gap-4">
    <SingleContactSocial Link='#' Icon={FiGithub}/>
    <SingleContactSocial Link='#' Icon={FaLinkedinIn}/>
    <SingleContactSocial Link='#' Icon={FaXTwitter}/>
  </div>;
};

export default ContactSocial;
