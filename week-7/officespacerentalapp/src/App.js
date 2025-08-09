import React from 'react';

function App() {
  // Object representing one office space
  const office = {
    name: "Smart Co-Working Space",
    rent: 55000,
    address: "Hi-Tech City, Hyderabad",
    image: "https://www.cfisherconstruction.com/wp-content/uploads/2021/08/Professional-Office-Space-Development-Chad-Fisher-Construction-1024x632.jpg"
  };

  // Array of multiple office objects
  const officeList = [
    {
      name: "Smart Co-Working Space",
      rent: 55000,
      address: "Hi-Tech City, Hyderabad"
    },
    {
      name: "Premium Office",
      rent: 72000,
      address: "Banjara Hills, Hyderabad"
    },
    {
      name: "Budget Workspace",
      rent: 45000,
      address: "Madhapur, Hyderabad"
    }
  ];

  // JSX and inline styles
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Office Space Rental App</h1>
      <img src={office.image} alt="Office Space" style={{ width: '300px', height: '200px' }} />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
        <strong>Rent:</strong> ₹{office.rent}
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Available Office Spaces</h2>
      {officeList.map((item, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px",
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          <p><strong>Name:</strong> {item.name}</p>
          <p style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{item.rent}
          </p>
          <p><strong>Address:</strong> {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
