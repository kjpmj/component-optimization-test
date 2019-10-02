import React, { useRef, useEffect } from 'react';

function Input({ type, placeholder, value, onChange, accessory }) {
  const renderCount = useRef(0);

  console.log('Render', placeholder, ++renderCount.current);

  useEffect(() => {
    console.log('Mount');

    return () => {
      console.log('Unmount');
    };
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {accessory}
    </div>
  );
}

export default React.memo(Input);
