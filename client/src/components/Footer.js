//Import packages
import React from "react";

//Import components
import HomePanel from "./HomePanel";

//Import assets
import logo from "../assets/images/AA.png";
import { GoMail } from "react-icons/go";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";

export default function Footer() {
  return (
    <HomePanel>
      <img src={logo}></img>
      <RiGithubFill className="footer-icon" />
      <RiLinkedinFill className="footer-icon" />
      <GoMail className="footer-icon" />
      <RiTwitterFill className="footer-icon" />
    </HomePanel>
  );
}
