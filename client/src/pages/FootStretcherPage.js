// Import packages
import React, { useEffect } from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

// Import assets
import FootStretcherImg from "../assets/images/portfolioItems/HydrowFootStretcher/Footstretcher.png";
import HydrowWithArrows from "../assets/images/portfolioItems/HydrowFootStretcher/Hydrow-Busy-Body-Arrows.png";
import FEAFinalIso from "../assets/images/portfolioItems/HydrowFootStretcher/Final FEA_edited.jpg";
import FEAOrigIso from "../assets/images/portfolioItems/HydrowFootStretcher/original FEA.png";
import suspendedWeight from "../assets/images/portfolioItems/HydrowFootStretcher/suspendedweight_edited.jpg";
import suspendWeightTop from "../assets/images/portfolioItems/HydrowFootStretcher/suspend weight top down.png";
import pressModSketch from "../assets/images/portfolioItems/HydrowFootStretcher/hydraulic press.png";
import pressMore from "../assets/images/portfolioItems/HydrowFootStretcher/press more.jpg";
import FEAFinalBottom from "../assets/images/portfolioItems/HydrowFootStretcher/bottom final fea_edited.jpg";

export default function FootStretcherPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* Overview panel */}
      <PortPagePanel mode="off-white">
        <h3 style={{ marginTop: "25px" }} className="port-page-section-title">
          Foot Stretcher <br />
          Finite Element <br />
          Analysis
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
            Evaluate and strengthen foot stretcher subassembly, a key structural
            component, to reduce maximum stress and improve fatigue life.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="overview-details-title">Role</p>
              <p className="overview-details-content">
                Mechanical <br />
                Engineering <br />
                Co-Op
              </p>
            </div>
            <div>
              <p className="overview-details-title">Team</p>
              <p className="overview-details-content">
                Hydrow <br />
                Hardware <br />
                Engineering
              </p>
            </div>
            <div>
              <p className="overview-details-title">Company</p>
              <p className="overview-details-content">Hydrow, Inc.</p>
            </div>
            <div>
              <p className="overview-details-title">Date</p>
              <p className="overview-details-content">May 2020</p>
            </div>
          </div>
        </div>
      </PortPagePanel>
      {/* Image panel */}
      <PortPagePanel>
        <img
          style={{ maxHeight: "350px", margin: "auto" }}
          src={FootStretcherImg}
          alt="Original Foot Stretcher Subassembly CAD"
        ></img>
      </PortPagePanel>
      {/* Requirements panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Requirements</h3>
        <div className="port-page-section-content-offset">
          <ul>
            <li>
              Must interface with existing components such as injection molds
            </li>
            <li>
              Must be able to be installed during service visits if necessary
            </li>
            <li>
              Must withstand worst-case scenario loading conditions over the
              lifecycle of a Hydrow
            </li>
          </ul>
        </div>
      </PortPagePanel>
      {/* Calling out image panel */}
      <PortPagePanel>
        <div className="port-page-section-content-center">
          <img
            src={HydrowWithArrows}
            alt="Reliability fixture with red arrow showing axis of motion"
            style={{ maxWidth: "50%" }}
          ></img>
          <figcaption>Hydrow with foot stretchers called out</figcaption>
        </div>
      </PortPagePanel>
      {/* Simulations panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Simulations</h3>
        <div className="port-page-section-content-offset">
          <p>
            Static FEA simulations were utilized to compare maximum stresses
            applied to each design iteration including the original design.
            Design changes to reduce stress concentrations were increasing bend
            radii, incorporating a supporting part to direct load paths, and
            increasing material thickness especially in locations that
            interfaced with fasteners. The maximum stress endured by the foot
            stretcher, under the same load conditions, reduced by a factor of
            2.74 by the final design.
          </p>
        </div>
        <div className="port-page-section-content-center">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 1 0",
              }}
            >
              <img
                src={FEAOrigIso}
                alt="Isometric view of original design FEA simulation"
              ></img>
              <figcaption style={{ textAlign: "center", maxWidth: "75%" }}>
                Original Design: Stress concentrations at bracket bend
              </figcaption>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 1 0",
              }}
            >
              <img
                src={FEAFinalIso}
                alt="Isometric view of final design FEA simulation"
              ></img>
              <figcaption style={{ textAlign: "center", maxWidth: "75%" }}>
                Final Design: Stress concentrations distributed within
                subassembly
              </figcaption>
            </div>
          </div>
        </div>
      </PortPagePanel>
      {/* Testing panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Testing</h3>
        <div className="port-page-section-content-offset">
          <p>
            Due to the use of static FEA analysis, my team and I devised static
            test fixtures to confirm analysis results. The following images are
            brainstorms for this fixture which were eventually narrowed down to
            a modified hydraulic press.
          </p>
        </div>
        <div className="port-page-section-content-center">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 1 0",
              }}
            >
              <img
                src={suspendedWeight}
                alt="Whiteboard sketch of suspended weight fixture for loading"
              ></img>
              <figcaption style={{ textAlign: "center", maxWidth: "75%" }}>
                Suspended Weight Fixture
              </figcaption>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 1 0",
              }}
            >
              <img
                src={suspendWeightTop}
                alt="Digital sketch of smith machine modification for loading"
              ></img>
              <figcaption style={{ textAlign: "center", maxWidth: "75%" }}>
                Smith Machine Repurposing
              </figcaption>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 1 0",
              }}
            >
              <img
                src={pressModSketch}
                alt="Hand sketch of hydraulic press modification"
              ></img>
              <figcaption style={{ textAlign: "center", maxWidth: "75%" }}>
                Hydraulic Press Modification
              </figcaption>
            </div>
          </div>
          <p>
            The hydraulic press was outfitted with a cross plate mounted on
            square tubing. This mounting plate interfaced with the foot
            stretcher samples to simulate the interface between a foot stretcher
            and a Hydrow.
          </p>
          <img
            src={pressMore}
            alt="Modified hydraulic press fixture with laptops for data collection"
          ></img>
          <figcaption>
            Hydraulic Press Fixture with Arduino Driven Load Cell
          </figcaption>
          <p>
            From these tests, it was determined that the stress concentrations
            would not cause a static failure but a fatigue failure. The testing
            was thereon outsourced to a cyclic testing laboratory where the
            final design was proven to endure worst-case scenario loading
            conditions over the equivalent cycles to the Hydrow lifecycle.
          </p>
        </div>
      </PortPagePanel>
      {/* Final Design */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Final Design</h3>
        <div className="port-page-section-content-offset">
          <p>
            Through design iterations and self-taught SolidWorks FEA, I reduced
            the maximum stresses applied to the foot stretcher assembly by a
            factor of 2.74. I worked with Hydrow's manufacturer to produce the
            new foot stretcher design documentation. This design is now in
            production.
          </p>
        </div>
        <div className="port-page-section-content-center">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 1 0",
              }}
            >
              <img src={FEAFinalIso} alt="Isometric view of final design"></img>
              <figcaption>
                <h6>Final Design Isometric View</h6>
              </figcaption>
              <p>Larger bend radii, bracket support part & thicker material</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1 1 0",
              }}
            >
              <img src={FEAFinalBottom} alt="Bottom view of final design"></img>
              <figcaption>
                <h6>Final Design Bottom View</h6>
              </figcaption>
              <p>Larger bend radii, bracket support part & thicker material</p>
            </div>
          </div>
        </div>
      </PortPagePanel>
    </>
  );
}
