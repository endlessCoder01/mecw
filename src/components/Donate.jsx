import React, { useState } from 'react';

// Assuming your background image is in the "public/images" folder
import backgroundImage from '../images/w3.jpg';

const DonatePage = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [contactNumber, setContactNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Thank you for your generous donation!');
    // Add donation logic here (e.g., API call, payment gateway integration)
  };

  const paymentGate = () => {

  }

  const verify = () => {
    
  }

  return (
    <div 
      className="donate-page min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay bg-black bg-opacity-50 min-h-screen flex justify-center items-center">
        <div className="container bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
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
                  {/* <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Bank Transfer">Bank Transfer</option> */}
                  <option value="Eco Cash">Eco Cash</option>
                  <option value="">Other Options Commig Soon......</option>
                </select>
              </div>

              {/* Conditionally render fields based on selected payment method */}
              {paymentMethod === 'Eco Cash' || paymentMethod === 'Inn Bucks' ? (
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
              // ) : paymentMethod === 'Bank Transfer' ? (
              //   <div>
              //     <label htmlFor="accountNumber" className="block text-gray-700 font-semibold">Account Number</label>
              //     <input 
              //       type="text" 
              //       id="accountNumber" 
              //       value={accountNumber} 
              //       onChange={(e) => setAccountNumber(e.target.value)} 
              //       className="w-full p-3 mt-2 border border-gray-300 rounded-md" 
              //       placeholder="Enter the bank account number"
              //       required
              //     />
              //   </div>
              // ) : paymentMethod === 'Credit Card' ? (
              //   <>
              //     <div>
              //       <label htmlFor="cardNumber" className="block text-gray-700 font-semibold">Card Number</label>
              //       <input 
              //         type="text" 
              //         id="cardNumber" 
              //         value={cardNumber} 
              //         onChange={(e) => setCardNumber(e.target.value)} 
              //         className="w-full p-3 mt-2 border border-gray-300 rounded-md" 
              //         placeholder="Enter your card number"
              //         required
              //       />
              //     </div>
              //     <div className="flex space-x-4">
              //       <div className="w-1/2">
              //         <label htmlFor="expiryDate" className="block text-gray-700 font-semibold">Expiration Date</label>
              //         <input 
              //           type="month" 
              //           id="expiryDate" 
              //           value={expiryDate} 
              //           onChange={(e) => setExpiryDate(e.target.value)} 
              //           className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              //           required
              //         />
              //       </div>
              //       <div className="w-1/2">
              //         <label htmlFor="cvv" className="block text-gray-700 font-semibold">CVV</label>
              //         <input 
              //           type="text" 
              //           id="cvv" 
              //           value={cvv} 
              //           onChange={(e) => setCvv(e.target.value)} 
              //           className="w-full p-3 mt-2 border border-gray-300 rounded-md" 
              //           placeholder="Enter CVV"
              //           required
              //         />
              //       </div>
              //     </div>
              //   </>
              ) : null}

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
                >
                  Donate Now
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
