import React from 'react';

const CopyrightPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center py-16">
      <div className="max-w-3xl mx-auto text-center px-6 sm:px-12 bg-white bg-opacity-80 rounded-xl shadow-xl p-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 text-gray-800">
          Copyright Notice
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          All the material on this website is subject to copyright protection unless otherwise indicated. The material may be downloaded without requiring specific prior permission. Any other proposed use of the material is subject to the approval of the OPC.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          Application for obtaining permission should be made to{' '}
          <a href="mailto:webmaster@opc.gov.zw" className="text-primary hover:underline font-semibold">
            webmaster@opc.gov.zw
          </a>.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          We do not object to you linking directly to the information that is hosted on our site and no prior permission is required for the same. However, we would like you to inform us about any links provided to our site so that you can be informed of any changes or updates therein.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
          In addition, we do not permit our pages to be loaded into frames on your site. This National Portal’s pages must load into a newly opened browser window of the user.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-8 py-3 text-xl font-semibold text-white bg-primary rounded-full shadow-md hover:bg-primary-dark transition-colors duration-300"
          >
            Go Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default CopyrightPage;
