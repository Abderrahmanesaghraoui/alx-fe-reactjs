// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  // Initialize state with a default value of 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '1rem',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '1rem',
            backgroundColor: '#008CBA',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;