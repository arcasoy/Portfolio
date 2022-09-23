// Import packages
import React, { useEffect } from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

// Import assets
import TDSLogo from "../assets/images/portfolioItems/TDS/TDS Drip Purple.png";
import TDSStreamers from "../assets/images/portfolioItems/TDS/TDS LiveStreamers.png";
import TDSTeam from "../assets/images/portfolioItems/TDS/tdsTeam.png";

export default function TDSPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* Overview panel */}
      <PortPagePanel mode="off-white">
        <h3 style={{ marginTop: "25px" }} className="port-page-section-title">
          TDS Website
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
            Web design and content management for "Team Damaged Souls" esports
            team with dynamic elements determined by API calls and content
            management systems.
          </p>
          <div className="overview-details">
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
              <p className="overview-details-content">Dec. 2019</p>
            </div>
            <div>
              <p className="overview-details-title">Link</p>
              <a
                className="overview-details-content"
                href="https://github.com/arcasoy/TDSWebDev"
              >
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
          className="image-panel-img"
          src={TDSLogo}
          alt="Social Tracker Logo"
        ></img>
      </PortPagePanel>
      {/* Problem panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Problem</h3>
        <div className="port-page-section-content-offset">
          <p>
            An esports team I was involved with required a website to promote
            themselves and generate merchandise sales. As the only individual
            with technical experience, I took on the task of developing the
            website.
          </p>
        </div>
      </PortPagePanel>
      {/* Requirements panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Requirements</h3>
        <div className="port-page-section-content-offset">
          <ul>
            <li>Engage visitors with the team content and culture</li>
            <li>Generate revenue by managing merchandise sales</li>
            <li>
              Redirect visitors to team members personal social media accounts
            </li>
            <li>
              Utilize a CMS to allow for site editing by individuals without
              programming experience
            </li>
          </ul>
        </div>
      </PortPagePanel>
      {/* Developed Features panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Developed {<br />} Features</h3>
        <div className="port-page-section-content-offset">
          <p>
            I utilized Wix to decrease development time while still allowing for
            custom elements. The following elements were created using Wix's
            built-in IDE.
          </p>
        </div>
        <div className="port-page-section-content-center">
          <h5 style={{ textAlign: "center" }}>Dynamic Twitch Streamers Page</h5>
          <p>
            As with any team, the promotion of the team and the care for each
            member are of the utmost importance. To highlight our content
            creators, I created a dynamic page that lists all team members that
            are currently live streaming, shown below.{" "}
          </p>
          <img
            src={TDSStreamers}
            alt="Screenshot of webpage with panels for each currently live streamer, their name, stream description, viewer count, and a link to their Twitch page"
            style={{ objectFit: "contain", width: "85%" }}
          ></img>
          <figcaption>TDS Live Streams Page</figcaption>
          <p>
            I accessed the Twitch Teams API by going through the OAuth
            Authentication flow, then calling the 'users' property to get an
            array of users on the team, which is constantly changing. I
            concatenated each username to one URL that was fetched and returned
            with the data of all live members, such as thumbnail, current
            viewers, and description. This data was then inserted to a
            relational database and called on the front-end to populate a
            repeating element.
          </p>
          <br />
          <h5 style={{ textAlign: "center" }}>Members Pages</h5>
          <p>
            Visitors can also find a static page with the current team members.
            The "Members" pages filter a database for the particular division of
            each page, then populated a repeating element with the data such as
            an image, title, social media links, and a description.
          </p>
          <img
            src={TDSTeam}
            alt="List of members with social media links and bios for each member"
          ></img>
          <figcaption>TDS Leadership Page</figcaption>
        </div>
      </PortPagePanel>
      {/* Result Work */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Result</h3>
        <div className="port-page-section-content-offset">
          <p>
            The development of this site, although built using Wix, gave me the
            opportunity to use OAuth2, build in relational databases that drive
            front-end elements, and balance the needs of a business while
            creating impressive features. I'm proud to say that the TDS website
            holds up against the sites of large esports teams such as Team Solo
            Mid and Rouge, drives upwards of 300 viewers a month, and has
            generated over $750 in revenue.
          </p>
          <br />
          <p>
            The development of these features has greatly reduced the time
            required to onboard, reorganize, and add descriptors for new
            members. Since development, others on leadership have been taught
            how use the content management database to manage the team roster.
          </p>
          <br />
          <p>
            Please visit my GitHub repository if you have any interest in
            viewing the code snippets that drive the previous two examples,
            linked in the overview section above.
          </p>
        </div>
      </PortPagePanel>
    </>
  );
}
