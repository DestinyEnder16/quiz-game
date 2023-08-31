import { useState } from 'react';

function DifficultyConfig({ dispatch }) {
  const [difficulty, setDifficulty] = useState('');
  return (
    <div className="requirement">
      <p className="question">Choose Your Difficulty</p>
      <select
        onChange={(e) => {
          dispatch({ type: 'difficultyToggle', payload: e.target.value });
          setDifficulty(e.target.value);
        }}
        value={difficulty}
      >
        <option></option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultyConfig;
