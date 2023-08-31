import { useState } from 'react';

function SetLimit({ dispatch }) {
  const [limit, setLimit] = useState(30);
  return (
    <div className="requirement">
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
