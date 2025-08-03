import React from 'react';

const GuestPage = () => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>You can view flight details, but booking requires login.</p>

      <ul>
        <li>✈️ Delhi → Mumbai: ₹4500</li>
        <li>✈️ Hyderabad → Chennai: ₹2500</li>
        <li>✈️ Bangalore → Kolkata: ₹5200</li>
      </ul>
    </div>
  );
};

export default GuestPage;
