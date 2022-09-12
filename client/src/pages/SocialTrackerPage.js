// Import packages
import React, { useEffect } from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

// Import assets
import STLogo from "../assets/images/portfolioItems/SocialTracker/SocialTracker_Logo_Transparent.png";
import STChange from "../assets/images/portfolioItems/SocialTracker/STChange.png";
import STDB from "../assets/images/portfolioItems/SocialTracker/STDB.png";
import STOverall from "../assets/images/portfolioItems/SocialTracker/STOverall.png";

export default function SocialTrackerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* Overview panel */}
      <PortPagePanel mode="off-white">
        <h3 style={{ marginTop: "25px" }} className="port-page-section-title">
          Social Tracker
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "25px",
          }}
          className="port-page-section-content-offset"
        >
          <p>
            Discord bot that records and store's a user's daily growth on
            various social media platforms.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="overview-details-title">Role</p>
              <p className="overview-details-content">Creator</p>
            </div>
            <div>
              <p className="overview-details-title">Purpose</p>
              <p className="overview-details-content">Personal Project</p>
            </div>
            <div>
              <p className="overview-details-title">Date</p>
              <p className="overview-details-content">May 2020</p>
            </div>
            <div>
              <p className="overview-details-title">Link</p>
              <a href="https://github.com/arcasoy/SocialTracker">
                <img
                  src="https://raw.githubusercontent.com/arcasoy/Portfolio/main/client/src/assets/images/githubLogo.svg"
                  alt="GitHub Logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </PortPagePanel>
      {/* Image panel */}
      <PortPagePanel>
        <img
          style={{ maxHeight: "350px", margin: "auto" }}
          src={STLogo}
          alt="Social Tracker Logo"
        ></img>
      </PortPagePanel>
      {/* Problem panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Problem</h3>
        <div className="port-page-section-content-offset">
          <p>
            Many organizations and individuals that use social media tend to use
            follower count as a metric to determine their reach to potential
            customers or fans. Many social media platforms have their own tools
            to visualize growth metrics, but there are few tools to analyze
            growth on a wide range of platforms.
          </p>
        </div>
      </PortPagePanel>
      {/* Requirements panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Requirements</h3>
        <div className="port-page-section-content-offset">
          <ul>
            <li>
              Include many popular social media platforms such as YouTube,
              Twitter, Instagram, and Twitch
            </li>
            <li>Automatically collect follower count data each day</li>
            <li>Return graphed growth metrics to drive content selection</li>
          </ul>
        </div>
      </PortPagePanel>
      {/* Product to Date */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Product to Date</h3>
        <div className="port-page-section-content-offset">
          <p>
            SocialTracker has been developed as a Discord bot written in
            JavaScript and runs by utilizing a Google Cloud Platform (GCP)
            Virtual Machine (VM) and a SQL Database. Each server SocialTracker
            is in may add 1 account per social media platform. Each day, the VM
            calls the YouTube and Twitch APIs to populate the database with each
            user's corresponding social platform follower count.
          </p>
        </div>
        <div className="port-page-section-content-center">
          <img
            src={STDB}
            alt="Google Cloud Platform terminal displaying database structure"
            style={{ objectFit: "contain", width: "85%" }}
          ></img>
          <figcaption>GCP SQL Database</figcaption>
          <p>
            In response to user commands, SocialTracker plots this data using
            Plotly and responds with follower graphs. Currently, two commands,
            Overall & Change, yield responses of overall growth and change in
            followers per day.
          </p>
          <img
            src={STOverall}
            alt="Social Tracker bot output displaying a line charge of overall follower growth"
          ></img>
          <figcaption>Overall Follower Growth</figcaption>
          <img
            src={STChange}
            alt="Social Tracker bot output displaying daily follower change"
          ></img>
          <figcaption>Overall Follower Change</figcaption>
        </div>
      </PortPagePanel>
      {/* Future Work */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Future Work</h3>
        <div className="port-page-section-content-offset">
          <p>
            Developing SocialTracker was the first time I successfully deployed
            a standalone project using GCP and Plotly, calling APIs, and working
            with SQL databases. This project, although not complete, gave me the
            opportunity to learn all of these topics and expand my knowledge
            base.
          </p>
          <br />
          <p>
            Although I have taken down the GCP server SocialTracker was running
            to move onto other projects, the code persists on GitHub. Please
            visit the repository if you have any interest in viewing my code,
            linked in the overview section above.
          </p>
          <br />
          <p>
            If I were to return to this project, I would implement trending to
            predict future social media growth, ROI tools to input investments
            into particular growth methods and output the effective growth in
            followers, and access level configuration to ensure only desired
            users can adjust settings and view results.
          </p>
        </div>
      </PortPagePanel>
    </>
  );
}
