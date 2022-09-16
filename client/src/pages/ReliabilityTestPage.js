// Import packages
import React, { useEffect } from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

// Import assets
import FresArrow from "../assets/images/portfolioItems/Fresenius/IMG_20190628_114051-1.png";
import FresFixture from "../assets/images/portfolioItems/Fresenius/IMG_20190628_114051.png";
import FresVid from "../assets/images/portfolioItems/Fresenius/04 - VID_20190607_105522.mp4";

export default function ReliabilityTestPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* Overview panel */}
      <PortPagePanel mode="off-white">
        <h3 style={{ marginTop: "25px" }} className="port-page-section-title">
          Reliability <br /> Test Design
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
            Design a reliability test and corresponding test fixtures for a
            peristaltic pump subassembly in a dialysis cycler.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="overview-details-title">Role</p>
              <p className="overview-details-content">
                Systems Engineering Co-Op
              </p>
            </div>
            <div>
              <p className="overview-details-title">Team</p>
              <p className="overview-details-content">
                Test & Systems Engineering
              </p>
            </div>
            <div>
              <p className="overview-details-title">Company</p>
              <p className="overview-details-content">Fresenius Medical Care</p>
            </div>
            <div>
              <p className="overview-details-title">Date</p>
              <p className="overview-details-content">March 2019</p>
            </div>
          </div>
        </div>
      </PortPagePanel>
      {/* Image panel */}
      <PortPagePanel>
        <img
          className="image-panel-img"
          src={FresFixture}
          alt="Social Tracker Logo"
        ></img>
      </PortPagePanel>
      {/* Reliability Test Requirements panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">
          Reliability Test
          <br /> Requirements
        </h3>
        <div className="port-page-section-content-offset">
          <ul>
            <li>
              Test must simulate wear on subassembly equivalent to 7-year
              product life
            </li>
            <li>
              Test must account for all mechanical and electrical failure modes
              outlined in DFMEA document
            </li>
            <li>
              Test design must account for wear on replaceable pump tubing
            </li>
            <li>Test must log test data in the case of a failure</li>
            <li>Test fixture must be relatively compact</li>
          </ul>
        </div>
      </PortPagePanel>
      {/* System Constraints panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">
          System <br /> Constraints
        </h3>
        <div className="port-page-section-content-offset">
          <ul>
            <li>
              Fluid delivery from 7 years of pumping at the maximum treatments
              per day corresponds to 584 days of continuous pumping at maximum
              pump speed
            </li>
            <li>Pump tubing wears out after about 72 hours of pumping</li>
            <li>
              Cyler software not tuned to determine if the pump stalls or stops
            </li>
            <li>
              Pump rotation resulted in a 1mm linear actuation on another part
            </li>
          </ul>
        </div>
        <div className="port-page-section-content-center">
          <img
            src={FresArrow}
            alt="Reliability fixture with red arrow showing axis of motion"
          ></img>
          <figcaption>
            Arrow denoting axis of 1mm actuation to be logged
          </figcaption>
        </div>
      </PortPagePanel>
      {/* Fixture & Script panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Fixture & Script</h3>
        <div className="port-page-section-content-offset"></div>
        <div className="port-page-section-content-center">
          <p>
            The peristaltic pump subassembly could stall during testing due to a
            multitude of factors, resulting in 0 mL/min fluid delivery. If not
            stopped immediately, running the pump under these failure cases
            could lead to wear unrealistic to normal use.
          </p>
          <p>
            To ensure that the reliability test would proceed without any
            unrealistic damage to the subassembly, the 1mm linear actuation that
            corresponded to proper pump operation was tracked.
          </p>
          <video autoPlay={true} loop={true} style={{ maxWidth: "500px" }}>
            <source src={FresVid} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <p>
            To track this motion, I created a fixture that amplified the motion
            of the shaft by a factor of 2.5. This fixture was tracked with two
            photo-interrupt optical sensors and compared to the most recent pump
            command using onboard cycler test software that I created using
            JavaScript.
          </p>
          <p>
            If the optical sensors did not register motion once the test had
            begun, the test knew the pump subassembly was in a failure state.
            The caught error would command the pump to stop, log all remaining
            data, and terminate the test script. In addition to error detection,
            the script stepped operators through the test procedure and
            monitored leak detection and data logging.
          </p>
        </div>
      </PortPagePanel>
    </>
  );
}
