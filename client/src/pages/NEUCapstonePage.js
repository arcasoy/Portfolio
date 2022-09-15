// Import packages
import React, { useEffect } from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

// Import assets (old assets)
import FootStretcherImg from "../assets/images/portfolioItems/HydrowFootStretcher/Footstretcher.png";
import HydrowWithArrows from "../assets/images/portfolioItems/HydrowFootStretcher/Hydrow-Busy-Body-Arrows.png";
import FEAFinalIso from "../assets/images/portfolioItems/HydrowFootStretcher/Final FEA_edited.jpg";
import FEAOrigIso from "../assets/images/portfolioItems/HydrowFootStretcher/original FEA.png";
import suspendedWeight from "../assets/images/portfolioItems/HydrowFootStretcher/suspendedweight_edited.jpg";
import suspendWeightTop from "../assets/images/portfolioItems/HydrowFootStretcher/suspend weight top down.png";
import pressModSketch from "../assets/images/portfolioItems/HydrowFootStretcher/hydraulic press.png";
import pressMore from "../assets/images/portfolioItems/HydrowFootStretcher/press more.jpg";
import FEAFinalBottom from "../assets/images/portfolioItems/HydrowFootStretcher/bottom final fea_edited.jpg";

// Import assets
import MaskTransparent from "../assets/images/portfolioItems/NEUCapstone/Cannula  Transp.png";
import BrainstormBarbed from "../assets/images/portfolioItems/NEUCapstone/barbed.png";
import BrainstormOxo from "../assets/images/portfolioItems/NEUCapstone/oxopop.png";
import BrainstormCompliant from "../assets/images/portfolioItems/NEUCapstone/compliant circle.png";
import BrainstormIris from "../assets/images/portfolioItems/NEUCapstone/iris.png";
import BrainstormLever from "../assets/images/portfolioItems/NEUCapstone/lever mask.png";
import BrainstormOrings from "../assets/images/portfolioItems/NEUCapstone/orings.png";
import BrainstormOpening from "../assets/images/portfolioItems/NEUCapstone/openablemask.png";
import EnvoMask from "../assets/images/portfolioItems/NEUCapstone/envo.jpg";
import AirProMask from "../assets/images/portfolioItems/NEUCapstone/HEPAMask.png";
import N95OxygenMask from "../assets/images/portfolioItems/NEUCapstone/o2n95combo.jpg";
import MaskFeatures from "../assets/images/portfolioItems/NEUCapstone/features.png";
import MaskAlone from "../assets/images/portfolioItems/NEUCapstone/mask alone.png";
import MaskMold from "../assets/images/portfolioItems/NEUCapstone/MaskMold.jpg";
import AssembledMaskMold from "../assets/images/portfolioItems/NEUCapstone/AssembledMaskMoldEdited.jpg";
import FinalReportPDF from "../assets/images/portfolioItems/NEUCapstone/N95 Nasal Cannula Capstone 2 Final Report.pdf";

export default function NEUCapstonePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* Overview panel */}
      <PortPagePanel mode="off-white">
        <h3 style={{ marginTop: "25px" }} className="port-page-section-title">
          N95 Mask With <br />
          Integrated <br />
          Nasal Cannula
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
            In the midst of the COVID-19 pandemic, individuals who require a
            nasal cannula full time are at a much higher risk of extreme illness
            from everyday pathogens, and cannot use the standard N95 masks that
            exist since the cannula tubing breaks the seal of the mask,
            rendering it useless.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="overview-details-title">Role</p>
              <p className="overview-details-content">
                Mechanical <br />
                Engineering <br />
                Student
              </p>
            </div>
            <div>
              <p className="overview-details-title">Team</p>
              <p className="overview-details-content">
                5 Mechanical <br />
                Engineering <br />
                Students
              </p>
            </div>
            <div>
              <p className="overview-details-title">Course</p>
              <p className="overview-details-content">
                Capstone <br /> Design
              </p>
            </div>
            <div>
              <p className="overview-details-title">Date</p>
              <p className="overview-details-content">Nov. 2020</p>
            </div>
          </div>
        </div>
      </PortPagePanel>
      {/* Image panel */}
      <PortPagePanel>
        <img
          style={{ maxHeight: "350px", margin: "auto" }}
          src={MaskTransparent}
          alt="Mask final product"
        ></img>
      </PortPagePanel>
      {/* Scope panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Scope</h3>
        <div className="port-page-section-content-offset">
          <p>
            To design an N95 rated mask that interfaces with nasal cannulas to
            provide at-risk individuals the highest level of protection against
            viruses while accomodating their medical needs.
          </p>
        </div>
      </PortPagePanel>
      {/* Individual Contributions panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">
          Individual <br /> Contributions
        </h3>
        <div className="port-page-section-content-offset">
          <ul>
            <li>Design brainstorming</li>
            <li>Prior art research</li>
            <li>Design criteria development</li>
            <li>Filter cage mechanism CAD</li>
            <li>Main body CAD</li>
            <li>Face seal CAD</li>
            <li>Face seal material selection</li>
            <li>Manufacturing research</li>
            <li>Silicone injection molding</li>
            <li>Final mask build & testing</li>
          </ul>
        </div>
      </PortPagePanel>
      {/* Design Brainstorming panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">
          Design <br /> Brainstorming
        </h3>
        <div className="port-page-section-content-offset">
          <p>
            Prior to performing any research, the team decided to brainstorm
            every potential solution that came to mind. This led to many kinds
            of designs, from feasible to complex to ridiculous. Shown below are
            some of the most noteworthy design ideas, as well as some that
            eventually contributed to the final design.
          </p>
          <br />
        </div>
        <div className="port-page-section-content-center">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: "20px",
            }}
          >
            <img
              src={BrainstormCompliant}
              alt="Brainstormed design based on an internal compliant mechanism with a lock"
            ></img>
            <img
              src={BrainstormOxo}
              alt="Brainstormed design based on Oxo Pop compliant mechanisms"
            ></img>
            <img
              src={BrainstormLever}
              alt="Brainstormed design with a hinge"
            ></img>
            <img
              src={BrainstormOrings}
              alt="Brainstormed design with locking rings"
            ></img>
            <img
              src={BrainstormOpening}
              alt="Brainstormed design based on a separating and resealable mask material"
            ></img>
            <img
              src={BrainstormIris}
              alt="Brainstormed design based on Iris compliant mechanism"
            ></img>
            <img
              src={BrainstormBarbed}
              alt="Brainstormed design based on barbed tube fittings"
            ></img>
          </div>
        </div>
      </PortPagePanel>
      {/* Prior Art & Design Criteria panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">
          Prior Art & <br /> Design Criteria
        </h3>
        <div className="port-page-section-content-offset">
          <p>
            To begin defining design requirements, prior art and related
            technologies searches were performed to discover where the market
            fails to solve our problem statement and what technologies we could
            build off of. Our team also created questions for potential users of
            this product and distributed a Google Form to support groups of
            individuals in the target market.
          </p>
          <br />
          <p>
            This research provided guidelines to begin defining design criteria
            beyond the initial scope of the project, such as creating a reusable
            mask over a disposable one and including an exhale flap to improve
            the users' ability to exhale.
          </p>
          <br />
          <p>
            Prior art we looked to for inspiration included the Envo mask, the
            AirPro HEPA filter mask, and a study integrating an oxygen mask and
            N95 mask.
          </p>
          <br />
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
              <img src={EnvoMask} alt="Envo Mask"></img>
              <figcaption style={{ textAlign: "center", maxWidth: "75%" }}>
                Envo Mask
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
              <img src={AirProMask} alt="AirPro Mask"></img>
              <figcaption style={{ textAlign: "center", maxWidth: "75%" }}>
                AirPro Mask
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
              <img src={N95OxygenMask} alt="Combination N95 Oxygen Mask"></img>
              <figcaption style={{ textAlign: "center", maxWidth: "75%" }}>
                N95 Oxygen Mask
              </figcaption>
            </div>
          </div>

          <p>
            Many brainstormed ideas were eliminated at this phase due to the
            timeline of the project. The team was concerned with ideas that
            included embedding mechanisms in the N95 material, as the filter
            material and the cannula were to be replaced at different intervals.
            This meant either overly frequent replacement of the cannula,
            wasting the consumer's money, or too infrequent replacement of the
            N95 material, rendering the mask dangerous to the user after 8 hours
            of use.
          </p>
          <br />
          <p>
            Due to this, it was determined that the N95 material and cannula had
            to be independently integrated with the final mask assembly. We
            decided to repurpose a readily available N95 mask material, the Envo
            mask filter, and design the remainder of our subassemblies around
            that filter geometry.
          </p>
        </div>
      </PortPagePanel>
      {/* Design panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Design</h3>
        <div className="port-page-section-content-offset">
          <p>
            I was the primary designer on the main body, filter cage, and face
            seal, while I integrated the work of my teammates into the overall
            assembly.{" "}
          </p>
          <br />
          <p>
            Designing the main body required understanding the design
            constraints of all subassemblies and accomodating them in the
            design. Due to this, I designed the mask referencing key dimensions,
            such as the thickness of the material used as a mask gasket and the
            Envo filter material dimensions. This allowed for fast iteration
            when certain design changes were made.{" "}
          </p>
          <br />
          <p>
            The face seal design was based on those found in standard
            respirators. This geometry is intended to be flexible enough to
            conform to various shaped faces while still sealing properly. To
            design such curves, I took it on myself to learn surfacing in
            SolidWorks.
          </p>
          <br />
        </div>
        <div className="port-page-section-content-center">
          <img src={MaskFeatures} alt="Mask Features highlighted"></img>
          <figcaption>Mask Features</figcaption>
        </div>
      </PortPagePanel>
      {/* Manufacturing panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Manufacturing</h3>
        <div className="port-page-section-content-offset">
          <p>
            The N95 mask build was an iterative process, with small-scale tests
            on subassembly functionality informing assembly implementation.
            Though these tests, feature dimensions and placement in the final
            assembly were determined.
          </p>
          <br />
          <p>
            To avoid a potential pitfall of FDM 3D printing, layer gaps, the
            mask was 3D printed using an SLA printer. Layer gaps would render
            the filtering properties of the mask ineffective. Clear resin was
            used to allow for observation of interactions between parts in the
            product, providing feedback for future iterations.
          </p>
          <br />
        </div>
        <div className="port-page-section-content-center">
          <img src={MaskAlone} alt="SLA printed mask body"></img>
          <figcaption>SLA printed mask body</figcaption>
          <p>
            To create the face seal, I surfaced a negative of the SolidWorks
            model and split the negative to create a core and cavity for
            injection molding. Then, I 3D printed the mold and manually injected
            Smooth-On Dragon Skin Silicone Shore 30A to create the face seal.
          </p>
          <br />
          <img src={MaskMold} alt="Core and cavity of face seal mold"></img>
          <figcaption>Core and cavity of face seal mold</figcaption>

          <br />

          <img src={AssembledMaskMold} alt="Assembled face seal mold"></img>
          <figcaption>Assembled face seal mold</figcaption>

          <p>
            Finally, all components were attached to the mask body, using either
            silicone glue or posts and pins.
          </p>
        </div>
      </PortPagePanel>
      {/* Demonstration panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Demonstration</h3>
        <div className="port-page-section-content-offset"></div>
        <div className="port-page-section-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GEslssA7jFs?rel=0"
            title="Demonstration of final build"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </PortPagePanel>
      {/* Capstone Panel Presentation panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">
          Capstone Panel <br />
          Presentation
        </h3>
        <div className="port-page-section-content-offset"></div>
        <div className="port-page-section-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TX9_Wk3PM6g?rel=0"
            title="Capstone presentation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </PortPagePanel>
      {/* Final Report panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Final Report</h3>
        <div className="port-page-section-content-offset"></div>
        <div className="port-page-section-content-center">
          <iframe
            width="560"
            height="725"
            src={FinalReportPDF}
            title="Capstone final report"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </PortPagePanel>
    </>
  );
}
