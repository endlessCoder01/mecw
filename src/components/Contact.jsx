import React, { useState } from 'react';
import backgroundImage from '../images/w12.jpg';
import Header from './Header';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { ENDPOINT } from './endpoint';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = {
        name,
        email,
        message
      };

      const response = await fetch(`${ENDPOINT}/mecw/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();
      console.log("Feedback saved:", result);

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us! We will get back to you soon.',
        confirmButtonColor: '#16a34a'
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
        confirmButtonColor: '#dc2626'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div
        className="contact-us-page min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay bg-black bg-opacity-50 min-h-screen flex justify-center items-center" style={{ paddingBottom: 15, paddingTop: 80 }}>
          <div className="container bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="banner text-center py-10 bg-green-600 text-white shadow-md">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg">We'd Love to Hear From You!</p>
            </div>

            <div className="content mt-3">
              <h2 className="text-2xl font-bold text-green-700 text-center mb-3">Get in Touch</h2>

              <div className="contact-info text-center mb-3">
                <p><strong>Email:</strong> <a href="mailto:info@mecw.gov.zw" style={{ color: '#f39c12' }}>info@mecw.gov.zw</a></p>
                <p><strong>Phone:</strong> +263 242 701691/2</p>
                <p><strong>Address:</strong> 11th Floor, Kaguvi Building <br />Corner S.Muzenda St & Central Avenue <br />Harare, Zimbabwe</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-6 py-3 rounded-lg font-semibold text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
