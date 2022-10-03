// Import packages
import React, { useEffect } from "react";

// Import components
import PortPagePanel from "../components/PortPagePanel";

// Import assets
import AALogo from "../assets/images/portfolioItems/PortfolioSite/AA.png";
import PortProjectsJSON from "../assets/images/portfolioItems/PortfolioSite/PortProjectsJSON.PNG";
import ContactFormAWS from "../assets/images/portfolioItems/PortfolioSite/ContactFormAWS.PNG";
import StayUpdatedAWS from "../assets/images/portfolioItems/PortfolioSite/StayUpdatedAWS.PNG";

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
          <div className="overview-details">
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
              <a
                className="overview-details-content"
                href="https://github.com/arcasoy/Portfolio"
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
        <img className="image-panel-img" src={AALogo} alt="Alex's Logo"></img>
      </PortPagePanel>
      {/* Purpose panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Purpose</h3>
        <div className="port-page-section-content-offset">
          <p>
            My portfolio, the website you're perusing now, was made with the
            intention of sharing my work, projects, and interests with anyone
            interested. Prior to building this site myself, I paid (more than
            I'd like to admit) for a Wix subscription annually.
            <br /> <br />
            To reduce design time, I challenged myself to mimic the design I
            created for my{" "}
            <a href="https://arcasoy1.wixsite.com/portfolio">Wix site</a>, which
            is still hosted (for free) for comparison.
            <br /> <br />
            Building this site was an opportunity to show off my web development
            skills, build features to my liking rather than Wix's templates, and
            reduce the annual cost of this website tenfold.
          </p>
        </div>
      </PortPagePanel>
      {/* Front End panel */}
      <PortPagePanel>
        <h3 className="port-page-section-title">Front End</h3>
        <div className="port-page-section-content-offset">
          <p>
            The frontend was build with React. I began with create-react-app,
            then added my own folder structure after researching optimal React
            folder structure for medium-sized projects, including folders for
            assets, components, context, hooks, and pages.
            <br /> <br />
            Below are some of the highlights that may not be noticable from a
            glance at the site. I'm always looking to impove, so if you see any
            pitfalls on the site please feel free to reach out using the contact
            form on the home page to get in touch!
          </p>
        </div>
        <div className="port-page-section-content-center">
          <h5>Portfolio Cards</h5>
          <p>
            The portfolio cards from the home page, like many other parts of the
            website, were created as components. These were slightly different
            though as I wanted to showcase displaying content dynamically based
            on data. Rather than calling an API on each render for the portfolio
            card data, I added a JSON file to the data folder that drives all of
            the content that is loaded into each portfolio card, even organizing
            them into the software and hardware category.
          </p>

          <img
            src={PortProjectsJSON}
            alt="Data format for portfolio card components"
          ></img>
          <h5>Responsiveness</h5>
          <p>
            This site was designed to be responsive down to screens 350px wide.
            Changes in layout in portfolio pages and the navigation bar occur as
            the size of the window is reduced. Flex directions change from row
            to column, the nagivation bar hides elements and adds a hamburger
            menu, and some fonts scale with viewport change.
          </p>
          <h5>Packages</h5>
          <p>
            Getting this site up and running wouldn't have gone so smoothly
            without the help of some React packages. Of course, react-router-dom
            was a must to handle routing between pages. Additionally,
            react-modal was very useful in getting the Stay Updated modal set up
            quickly. Finally, I dipped my toes into the styled-components
            package which allowed for styling to live inside each component
            declaration rather than in a global style sheet. This was certainly
            effective for components like buttons and hamburger drop down, but
            was cumbersome with larger components like the navigation bar.
          </p>
        </div>
      </PortPagePanel>
      {/* Back End & Hosting panel */}
      <PortPagePanel mode="off-white">
        <h3 className="port-page-section-title">Back End & Hosting</h3>
        <div className="port-page-section-content-offset">
          <p>
            The elements of the site that require backend services are the
            contact form and the stay updated sign up. Considering this project
            had very few backend services required, I decided to utilize FaaS
            services. To gain more experience with AWS, services I had yet to
            use, I decided to try their suite of tools when building the
            backend.
          </p>
        </div>
        <div className="port-page-section-content-center">
          <h5>Hosting</h5>
          <p>
            This site was built using AWS Amplify. I set up continuous
            deployment (CD) from the main branch of my GitHub repository and
            pointed my domain to the amplify app by changing the CNAME on my
            site's DNS records through Wix as I purchased the domain through
            their platform.
          </p>
          <h5>Contact Form</h5>
          <p>
            The contact form on the home page uses AWS's API Gateway, Lambda,
            and Simple Email Service (SES) to email me when a contact form is
            submitted. The form element calls the API endpoint set up on API
            Gateway, which triggers a Lambda function to format the data and
            fire an email using SES from mail@alexarcasoy.com
          </p>
          <img
            src={ContactFormAWS}
            alt="AWS architecture for contact form"
          ></img>
          <h5>Stay Updated</h5>
          <p>
            To be able to reach individuals who opt into staying updated with
            additions to this site, I needed to save emails their emails to
            contact them in the future. I used API Gateway and Lambda again to
            handle the API call from the site. I had options to store the data
            though, through AWS's RDS, S3, SES contact lists, and others.
            <br /> <br />
            To speed up launch, I decided to save the data in S3 as objects
            straight from the API call rather. On the API Gateway trigger,
            Lambda processes the body of the message and calls PushObject on the
            stay upated bucket to log the new email, shown below.
          </p>
          <img
            src={StayUpdatedAWS}
            alt="AWS architectrure for stay updated feature"
          ></img>
          <p>
            Going forward, I may utilize AWS SES's contact list feature to
            manage subscriptions and batch send emails if the number of
            subscribers justifies it, rather than storing emails in an S3 bucket
            and manually adding them as recipients of an email.
          </p>
        </div>
      </PortPagePanel>
    </>
  );
}
