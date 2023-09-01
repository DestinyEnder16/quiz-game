import { useState, useEffect } from 'react';

function SetLimit({ dispatch }) {
  const [limit, setLimit] = useState(30);
  const [className, setClassName] = useState('');
  useEffect(function () {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setClassName('active');
  }, []);
  return (
    <div className={`requirement ${className}`}>
      <p className="question">How Many Questions Do You Want To Answer?</p>
      <input
        type="range"
        min="1"
        max="30"
        id="range"
        onChange={(e) => {
          setLimit(+e.target.value);
        }}
      />
      <span id="range-limit">{limit} question(s)</span>
      <button
        onClick={() => dispatch({ type: 'limitToggle', payload: limit })}
        id="confirm"
      >
        Confirm
      </button>
    </div>
  );
}

export default SetLimit;
