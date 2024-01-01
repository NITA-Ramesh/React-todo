import React, { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import './ChatDialog.css'; // Import your CSS file for styling

function ChatDialog() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`icon-container ${isClicked ? 'rectangular' : 'rounded'}`} onClick={handleClick}>
      <FaCoffee className="icon" />
        {isClicked && <div className="dialog">Hello, World!</div>}
    </div>
  );
}

export default ChatDialog;
