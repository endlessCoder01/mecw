import React, { useState } from 'react';
import { ENDPOINT } from './endpoint';
import backgroundImage from '../images/w3.jpg';
import Swal from 'sweetalert2';

const DonatePage = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Eco Cash');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false); // New state for verification

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const pay = await paymentGate();

    if (pay) {
      try {
        const response = await fetch(`${ENDPOINT}/mecw/api/donate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, amount, paymentMethod, contactNumber }),
        });

        const result = await response.json();
        if (result) {
          setMessage('Thank you for your generous donation!');
        } else {
          showAlert('Donation failed', 'Please try again.');
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        showAlert('Donation failed', 'Please try again.');
      }
    } else {
      showAlert('Donation failed', 'Payment was not successful.');
    }

    setIsProcessing(false);
  };

  const showAlert = (title, text) => {
    Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  };

  const paymentGate = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${ENDPOINT}/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contactNumber, amount }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }

      const result = await response.json();
      await verifyPayment(result.pollUrl);
      return true;
    } catch (error) {
      console.error("Payment request failed:", error);
      setMessage("Payment request failed. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (pollUrl) => {
    setIsVerifying(true); // Start verification
    const interval = 15000; // Poll every 15 seconds
    const timeout = 120000; // 2 minutes timeout
    const startTime = Date.now();

    const pollPaymentStatus = async () => {
      try {
        const response = await fetch(`${ENDPOINT}/check-payment-status?pollUrl=${pollUrl}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
        }

        const result = await response.json();
        if (result.status === 200) {
          setMessage("Payment Verified!");
          setIsVerifying(false); // End verification
        } else if (result.status === 202) {
          console.log("Payment is still pending.");
        }
      } catch (error) {
        console.error("Payment verification failed:", error);
      }
    };

    const polling = setInterval(() => {
      if (Date.now() - startTime >= timeout) {
        clearInterval(polling);
        setMessage("Payment verification timed out.");
        setIsVerifying(false); // End verification
      } else {
        pollPaymentStatus();
      }
    }, interval);
  };

  return (
    <div 
      className={`donate-page min-h-screen bg-cover bg-center ${isProcessing || isVerifying ? 'filter grayscale' : ''}`} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay bg-black bg-opacity-50 min-h-screen flex justify-center items-center">
        <div className={`container bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl mx-auto ${isProcessing || isVerifying ? 'filter grayscale' : ''}`}>
          <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
            Donate to the Ministry of Environment, Climate, and Wildlife
          </h1>
          <p className="text-center text-lg mb-6">
            Your donation helps us protect the environment, combat climate change, and preserve wildlife. 
            Thank you for your support!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md" 
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md" 
                  required
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-gray-700 font-semibold">Donation Amount</label>
                <input 
                  type="number" 
                  id="amount" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} 
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md" 
                  placeholder="Enter amount in USD"
                  required
                />
              </div>

              <div>
                <label htmlFor="paymentMethod" className="block text-gray-700 font-semibold">Payment Method</label>
                <select 
                  id="paymentMethod" 
                  value={paymentMethod} 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                >
                  <option value="Eco Cash">Eco Cash</option>
                  <option value="">Other Options Coming Soon...</option>
                </select>
              </div>

              {paymentMethod === 'Eco Cash' ? (
                <div>
                  <label htmlFor="contactNumber" className="block text-gray-700 font-semibold">Contact Number</label>
                  <input 
                    type="text" 
                    id="contactNumber" 
                    value={contactNumber} 
                    onChange={(e) => setContactNumber(e.target.value)} 
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md" 
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              ) : null}

              <div className="text-center">
                <button 
                  type="submit" 
                  className={`bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 ${isProcessing || isVerifying ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading || isProcessing || isVerifying}
                >
                  {loading ? 'Processing...' : 'Donate Now'}
                </button>
              </div>
            </div>
          </form>

          {message && (
            <p className="text-center text-green-600 mt-6">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonatePage;