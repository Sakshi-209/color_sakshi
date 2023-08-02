import React, { useState } from 'react';

const ColorChangingButton = () => {
  const [isGreen, setIsGreen] = useState(false);

  const toggleColor = () => {
    setIsGreen((prevState) => !prevState);
  };

  return (
    <div>
      <button
        onClick={toggleColor}
        style={{
          backgroundColor: isGreen ? 'green' : 'red',
          color: 'white',
        }}
      >
        {/*isGreen ? 'Green' : 'Red'*/} Button
      </button>
    </div>
  );
};

export default ColorChangingButton;
