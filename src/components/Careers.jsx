import React from "react";
import backgroundImage from "../images/bk2.jpg";
import img1 from "../images/w3.jpg";
import Footer from "./Footer";
import Header from "./Header";

const CareersPage = () => {
  return (
    <div>
<Header/>
   
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      {/* Banner Section */}
      <div
        className="banner text-center py-24 text-white shadow-md bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})`, paddingTop: 140 }}
      >
        <h1 className="text-4xl font-bold mb-4">Careers at the Ministry</h1>
        <p className="text-lg">
          Join Us in Making a Difference for Our Environment
        </p>
      </div>

      {/* Content Section */}
      <div className="content flex flex-col md:flex-row max-w-7xl mx-auto mt-12 px-6"
        style={{paddingBottom: 30}}
      >
        {/* Sidebar */}
        <div className="sidebar bg-green-700 text-white rounded-lg p-6 md:w-1/4 mb-8 md:mb-0 shadow-md">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Explore Opportunities
          </h2>
          <a
            href="#openings"
            className="block text-lg mb-4 hover:text-yellow-400"
          >
            Current Job Openings
          </a>
          <a href="#apply" className="block text-lg mb-4 hover:text-yellow-400">
            How to Apply
          </a>
          <a href="#benefits" className="block text-lg hover:text-yellow-400">
            Why Work With Us?
          </a>
        </div>

        {/* Job Listings */}
        <div className="job-listing flex-1 bg-white rounded-lg p-6 shadow-md">
          {/* Current Job Openings Section */}
          <h2
            id="openings"
            className="text-3xl font-semibold text-green-700 mb-6"
          >
            Current Job Openings
          </h2>

          <div className="job-item mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Environmental Scientist
            </h3>
            <p>
              <strong>Location:</strong> Harare, Zimbabwe
            </p>
            <p>
              <strong>Type:</strong> Full-Time
            </p>
            <p>
              We are seeking an Environmental Scientist to conduct research and
              analyze data related to environmental issues. A degree in
              Environmental Science or related field is required.
            </p>
          </div>

          <div className="job-item mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Wildlife Conservation Officer
            </h3>
            <p>
              <strong>Location:</strong> Various Field Locations
            </p>
            <p>
              <strong>Type:</strong> Contract
            </p>
            <p>
              The Wildlife Conservation Officer will work on the ground to
              implement conservation strategies. Experience in wildlife
              management is preferred.
            </p>
          </div>

          <div className="job-item mb-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Climate Change Policy Analyst
            </h3>
            <p>
              <strong>Location:</strong> Harare, Zimbabwe
            </p>
            <p>
              <strong>Type:</strong> Full-Time
            </p>
            <p>
              We are looking for a Policy Analyst to develop and analyze
              policies related to climate change. A background in environmental
              policy is essential.
            </p>
          </div>

          {/* How to Apply Section */}
          <h2 id="apply" className="text-3xl font-semibold text-green-700 mb-6">
            How to Apply
          </h2>
          <p>
            Interested candidates should send their CV and a cover letter to{" "}
            <a
              href="mailto:hr@ministryofenvironmentclimatewildlife.com.zw"
              className="text-yellow-400 hover:underline"
            >
              hr@ministryofenvironmentclimatewildlife.com.zw
            </a>
            .
          </p>
          <p>Please include the job title in the subject line of your email.</p>

          {/* Why Work With Us Section */}
          <h2
            id="benefits"
            className="text-3xl font-semibold text-green-700 mb-6"
          >
            Why Work With Us?
          </h2>
          <p>
            At the Ministry of Environment, Climate, and Wildlife, we are
            committed to creating a sustainable future. Join us for:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Opportunities for professional development.</li>
            <li>
              A chance to contribute to meaningful environmental initiatives.
            </li>
            <li>A collaborative and innovative work environment.</li>
          </ul>

          {/* Application Information Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-green-700 mb-6">
              Additional Information
            </h2>
            <p>
              All the Material on this website is subject to copyright
              protection unless otherwise indicated. The material may be
              downloaded without requiring specific prior permission. Any other
              proposed use of the material is subject to the approval of the
              OPC.
            </p>
            <p>
              Application for obtaining permission should be made to{" "}
              <a
                href="mailto:webmaster@opc.gov.zw"
                className="text-yellow-400 hover:underline"
              >
                webmaster@opc.gov.zw
              </a>
              .
            </p>
            <p>
              We do not object to you linking directly to the information that
              is hosted on our site and no prior permission is required for the
              same. However, we would like you to inform us about any links
              provided to our site so that you can be informed of any changes or
              updates therein. In addition, we do not permit our pages to be
              loaded into frames on your site. This National Portal’s pages must
              load into a newly opened browser window of the user.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
    
  );
};

export default CareersPage;
