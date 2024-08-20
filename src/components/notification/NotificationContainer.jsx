import React from 'react';

function Notification({ message, background, color }) {
  const notificationStyle = {
    display: 'flex',
    background,
    color,
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    maxWidth: 'fit-content',
    whiteSpace: 'nowrap',
  };

  return (
    <div id="notification" style={notificationStyle}>
      {message}
    </div>
  );
}

export default Notification;
