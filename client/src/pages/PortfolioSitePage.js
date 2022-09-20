// Import packages
import React, { useEffect } from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

// Import assets (old)
import SampleAutomation from "../assets/images/portfolioItems/BVE/Assembly-Machine.png";
import PackMLStates from "../assets/images/portfolioItems/BVE/PACKML Chart Updated 2019.png";
import Jira from "../assets/images/portfolioItems/BVE/Screen-kanban board.png";

// Import assets
import AALogo from "../assets/images/portfolioItems/PortfolioSite/AA.png";

export default function BVEPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* Overview panel */}
      <PortPagePanel mode="off-white">
        <h3 style={{ marginTop: "25px" }} className="port-page-section-title">
          Portfolio <br />
          Website
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
            Website developed to display samples of work and collect
            communications.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="overview-details-title">Role</p>
              <p className="overview-details-content">Full-Stack Developer</p>
            </div>
            <div>
              <p className="overview-details-title">Purpose</p>
              <p className="overview-details-content">Personal Project</p>
            </div>
            <div>
              <p className="overview-details-title">Date</p>
              <p className="overview-details-content">Summer 2022</p>
            </div>
            <div>
              <p className="overview-details-title">Link</p>
              <a href="https://github.com/arcasoy/Portfolio">
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
        <img className="image-panel-img" src={AALogo} alt="Alex's Logo"></img>
      </PortPagePanel>
      {/* Front End panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Front End</h3>
        <div className="port-page-section-content-offset">
          <p>Coming soon...</p>
        </div>
      </PortPagePanel>
      {/* Back End panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Back End</h3>
        <div className="port-page-section-content-offset">
          <p>Coming soon...</p>
        </div>
      </PortPagePanel>
      {/* Hosting panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Hosting</h3>
        <div className="port-page-section-content-offset">
          <p>Coming soon...</p>
        </div>
      </PortPagePanel>
    </>
  );
}
