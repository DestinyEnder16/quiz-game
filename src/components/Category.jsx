import { useState } from 'react';

function Category({ dispatch }) {
  const [category, setCategory] = useState('');
  return (
    <div className="requirement">
      <p className="question">Select Your Category</p>
      <select
        onChange={(e) => {
          dispatch({ type: 'categoryToggle', payload: e.target.value });
          setCategory(e.target.value);
        }}
        value={category}
      >
        <option></option>
        <option value="science">Science</option>
        <option value="music">Music</option>
        <option value="history">History</option>
        <option value="geography">Geography</option>
        <option value="sport_and_leisure">Sports & Leisure</option>
        <option value="general_knowledge">General Knowledge</option>
      </select>
    </div>
  );
}

export default Category;
