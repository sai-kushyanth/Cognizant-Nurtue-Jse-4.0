import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome, Logged-in User!</h2>
      <p>Flight Booking Available</p>

      <ul>
        <li>✈️ Delhi → Mumbai: ₹4500 <button>Book</button></li>
        <li>✈️ Hyderabad → Chennai: ₹2500 <button>Book</button></li>
        <li>✈️ Bangalore → Kolkata: ₹5200 <button>Book</button></li>
      </ul>
    </div>
  );
};

export default UserPage;
