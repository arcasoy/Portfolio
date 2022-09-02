// Import packages
import React from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

export default function SocialTrackerPage() {
  return (
    <>
      {/* Overview panel */}
      <PortPagePanel mode="off-white">
        <h3 style={{ marginTop: "75px" }} className="port-page-section-title">
          Social Tracker
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "75px",
            marginBottom: "2rem",
          }}
          className="port-page-section-content"
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
          src="https://raw.githubusercontent.com/arcasoy/SocialTracker/master/SocialTracker%20Logo%20Transparent.png"
          alt="Social Tracker Logo"
        ></img>
      </PortPagePanel>
      {/* Problem panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Problem</h3>
        <p className="port-page-section-content">
          Many organizations and individuals that use social media tend to use
          follower count as a metric to determine their reach to potential
          customers or fans. Many social media platforms have their own tools to
          visualize growth metrics, but there are few tools to analyze growth on
          a wide range of platforms.
        </p>
      </PortPagePanel>
      {/* Requirements panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Requirements</h3>
        <div className="port-page-section-content">
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
      {/*  */}
    </>
  );
}
