// Import packages
import React, { useEffect } from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

// Import assets
import SampleAutomation from "../assets/images/portfolioItems/BVE/Assembly-Machine.png";
import PackMLStates from "../assets/images/portfolioItems/BVE/PACKML Chart Updated 2019.png";
import Jira from "../assets/images/portfolioItems/BVE/Screen-kanban board.png";

export default function BVEPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* Overview panel */}
      <PortPagePanel mode="off-white">
        <h3 style={{ marginTop: "25px" }} className="port-page-section-title">
          Controls <br />
          Engineering <br />
          Consulting
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
            Developed software for three industrial automation machines
            including manufacturing and testing equipment. Disclaimer: Details
            of projects under NDA.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="overview-details-title">Role</p>
              <p className="overview-details-content">Controls Engineer</p>
            </div>
            <div>
              <p className="overview-details-title">Team</p>
              <p className="overview-details-content">
                Multidisciplinary <br />
                team of <br />
                engineers
              </p>
            </div>
            <div>
              <p className="overview-details-title">Company</p>
              <p className="overview-details-content">
                Blackstone <br />
                Valley <br />
                Engineering
              </p>
            </div>
            <div>
              <p className="overview-details-title">Date</p>
              <p className="overview-details-content">2021</p>
            </div>
          </div>
        </div>
      </PortPagePanel>
      {/* Image panel */}
      <PortPagePanel>
        <img
          className="image-panel-img"
          src={SampleAutomation}
          alt="Sample automation cell"
        ></img>
        <figcaption style={{ display: "none" }}>
          Source: <a href="https://www.rndautomation.com/">RND Automation</a>
        </figcaption>
      </PortPagePanel>
      {/* Background panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Background</h3>
        <div className="port-page-section-content-offset">
          <p>
            I began at Blackstone Valley Engineering (BVE) as a Controls Co-Op,
            transitioning to a consultant after my Co-Op term had ended. While
            there, I lead the controls (software) devlopment for two healthcare
            based industrial automated test stands, and built scripts for two
            interacting 6-axis FANUC robots for an automated manufacturing
            process. This role invovled many software development concepts that
            I learned while on the job to deliver high quality machines.
          </p>
        </div>
      </PortPagePanel>
      {/* State Machine panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">State Machine</h3>
        <div className="port-page-section-content-offset">
          <p>
            Machine states (finite state machines) are very important in
            industrial automation, acting as the main determiner of what
            individual components can and can’t do while the machine is in a
            certain state. For example, this is vital when an operator hits the
            emergency stop button. The system needs to respond accordingly such
            as disabling all motion, stop all tests, etc. to prevent injury.{" "}
          </p>
          <br />
        </div>
        <div className="port-page-section-content-center">
          <img src={PackMLStates} alt="PackML Standard State Diagram"></img>
          <figcaption>PackML Standard State Diagram</figcaption>
          <figcaption style={{ display: "none" }}>
            Source:
            <a href="https://www.dmcinfo.com/latest-thinking/blog/id/9463/beginners-guide-to-omac-packml">
              DMCInfo
            </a>
          </figcaption>
          <br />
          <p>
            The machines I programmed contained iterations of the International
            Society of Automation’s (ISA) Package Machine Language (PackML)
            standard, based on customer requirements. Once implemented, this
            state machine greatly improved the programming experience in the
            multithreaded environment, progressing the machine through a process
            without running into race conditions.
          </p>
        </div>
      </PortPagePanel>
      {/* Object Oriented Programming panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">
          Object Oriented <br />
          Programming
        </h3>
        <div className="port-page-section-content-offset">
          <p>
            I used psudo-objects to represent the physical units being testing
            or manufactured within the automation cells. Although different than
            traditional OOP due to the lack of support for methods in ladder
            logic, the pseudo-objects I created were used to track state on
            parts.
          </p>
          <br />
          <p>
            For example, these objects would contain local and global variables
            for varied information such as integers tracking the step number of
            the process a certain part has reached and mapping to lookup tables,
            bits for complete/incomplete states, strings for IDs, reals (floats)
            for sensor data, etc. The object would be instatiated for each part
            added to the process.
          </p>
        </div>
      </PortPagePanel>
      {/* System Design panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">System Design</h3>
        <div className="port-page-section-content-offset">
          <p>
            Developing code for multi-threaded systems such as industrial
            automation equipment requires careful planning of the way software
            is built. Interacting components on machines were grouped according
            to the PackML standard into control modules, equipment modules, etc.
          </p>
          <br />
          <p>
            The respective logic for these groupings were developed as
            microservices running on separate threads, ensuring separation of
            logic between groupings of components. This logic housed local and
            global variables, similar to private and public variables in Java
            classes, to ensure certain data was only mutable by the equipment
            module itself.
          </p>
        </div>
      </PortPagePanel>
      {/* Project Management panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Project Management</h3>
        <div className="port-page-section-content-offset">
          <p>
            As the only full time dedicated controls engineer assigned to each
            project, a lot of organization had to fall to me. I was fortunate to
            have guidance from my boss who had experience with programming other
            machines when time allowed for it, but had lots of aspects that I
            had to figure out myself. These included, but were not limited to,
            code architecture, tuning PID loops, creating UI elements etc. To
            manage all of this, I tracked required features and bug fixes in
            Jira issues. Assigning dependencies between issues helped determine
            critical path tasks and where priorities laid.
          </p>
          <br />
        </div>
        <div className="port-page-section-content-center">
          <img
            src={Jira}
            alt="Sample Jira kanban board populated with issues"
          ></img>
          <figcaption>Sample Jira Kanban board</figcaption>
          <figcaption style={{ display: "none" }}>
            Source:{" "}
            <a href="https://www.atlassian.com/software/jira/features/kanban-boards">
              Atlassian
            </a>
          </figcaption>
          <br />
          <p>
            Additionally, to meet timelines, the Blackstone Valley Engineering
            hired a seasoned controls engineer consultant to give additional
            hands to the project. As the sole full time controls engineer on the
            projects, I managed the workload of said consultants by assigning
            tasks and deadlines along with checking in to ensure tasks were
            coming along. Additionally, I was directly interacting with the
            customer to present machine behaviors, receiving feedback, and
            adjusting as needed.
          </p>
        </div>
      </PortPagePanel>
    </>
  );
}
