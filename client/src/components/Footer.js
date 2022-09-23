//Import packages
import React from "react";
import { IconContext } from "react-icons";

//Import components
import HomePanel from "./HomePanel";

//Import assets
import logo from "../assets/images/AA.png";
import { RiLinkedinFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

export default function Footer() {
  return (
    <HomePanel>
      <img
        src={logo}
        alt="Alex's logo, two A's turned sideways similar to HTML tags"
        style={{
          background: "white",
          borderRadius: "100%",
          height: "3em",
          padding: "none",
          margin: "1em",
        }}
      ></img>
      <IconContext.Provider
        value={{
          color: "white",
          size: "1.5em",
          className: "footer-icon",
        }}
      >
        <div
          id="footer-icons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <a href="https://github.com/arcasoy" aria-label="GitHub profile link">
            <RiGithubFill className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-arcasoy/"
            aria-label="LinkedIn profile link"
          >
            <RiLinkedinFill className="footer-icon" />
          </a>
          <a
            href="https://twitter.com/arcasoi"
            aria-label="Twitter profile link"
          >
            <RiTwitterFill className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/arcasoi/"
            aria-label="Instagram profile link"
          >
            <RiInstagramLine className="footer-icon" />
          </a>
        </div>
      </IconContext.Provider>
      <p>© 2019-2022 by Alexander Arcasoy. All rights reserved.</p>
    </HomePanel>
  );
}
