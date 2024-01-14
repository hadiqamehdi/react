import React from 'react';

const Reg= () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hello User</h1>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Set the height to the full viewport height
};

const headingStyle = {
  textAlign: 'center',
};

export default Reg;
