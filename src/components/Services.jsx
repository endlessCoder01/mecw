import React from 'react';
import backgroundImage from '../images/w5.jpg';
import Footer from './Footer';
import Header from './Header';


const ServicesPage = () => {
  return (
    <div>
<Header/>
  
    <div
      className="services-page min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay bg-black bg-opacity-50 min-h-screen flex justify-center items-center" style={{ paddingTop: 120, paddingBottom: 35}}>
        <div className="container bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
          <div className="banner text-center py-14 bg-green-700 text-white shadow-md">
            <h1 className="text-4xl font-bold mb-2">Our Services</h1>
            <p className="text-lg">Committed to Protecting Our Environment and Wildlife</p>
          </div>

          <div className="content bg-white p-8 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-8">Services We Offer</h2>
            <div className="service-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="service-item p-6 bg-green-200 rounded-lg shadow-md hover:transform hover:translate-y-2 transition-all min-w-[300px]">
                <h3 className="text-xl font-semibold text-green-700">Environmental Impact Assessments</h3>
                <p>We conduct thorough assessments to evaluate the environmental impacts of proposed projects and activities, ensuring sustainable development practices.</p>
              </div>

              <div className="service-item p-6 bg-green-200 rounded-lg shadow-md hover:transform hover:translate-y-2 transition-all min-w-[300px]">
                <h3 className="text-xl font-semibold text-green-700">Wildlife Conservation Programs</h3>
                <p>Our programs focus on the protection and recovery of endangered species through habitat preservation, monitoring, and community engagement.</p>
              </div>

              <div className="service-item p-6 bg-green-200 rounded-lg shadow-md hover:transform hover:translate-y-2 transition-all min-w-[300px]">
                <h3 className="text-xl font-semibold text-green-700">Education and Awareness Campaigns</h3>
                <p>We run educational campaigns to raise awareness about environmental issues, promoting community involvement in conservation efforts.</p>
              </div>

              <div className="service-item p-6 bg-green-200 rounded-lg shadow-md hover:transform hover:translate-y-2 transition-all min-w-[300px]">
                <h3 className="text-xl font-semibold text-green-700">Policy Development and Advocacy</h3>
                <p>We develop policies that support environmental sustainability and advocate for effective legislation to protect our natural resources.</p>
              </div>

              <div className="service-item p-6 bg-green-200 rounded-lg shadow-md hover:transform hover:translate-y-2 transition-all min-w-[300px]">
                <h3 className="text-xl font-semibold text-green-700">Research and Data Collection</h3>
                <p>Our research initiatives gather critical data on biodiversity, climate change, and ecosystem health, informing policy and management decisions.</p>
              </div>

              <div className="service-item p-6 bg-green-200 rounded-lg shadow-md hover:transform hover:translate-y-2 transition-all min-w-[300px]">
                <h3 className="text-xl font-semibold text-green-700">Community Engagement Initiatives</h3>
                <p>We collaborate with local communities to promote sustainable practices and engage them in conservation efforts that benefit both people and nature.</p>
              </div>
            </div>

            <div className="contact-section mt-12 bg-green-700 text-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p>If you have any questions or would like to learn more about our services, please <a href="/contact" className="text-yellow-500">contact us</a>.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default ServicesPage;
