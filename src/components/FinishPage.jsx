import { useEffect, useState } from 'react';

function FinishPage({ state, numQuestions }) {
  const percentage = (state.questionsAnswered / numQuestions) * 100;
  const margin = { marginTop: '2.5rem' };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (!isLoading) {
    return (
      <div id="finish-text">
        <span>
          Final Score :{' '}
          <strong>
            {state.questionsAnswered} / {numQuestions}
          </strong>
        </span>
        <span style={margin}>
          (<strong>{Math.round(percentage)}</strong>%)
        </span>
        <button
          onClick={() => window.location.reload()}
          className="btn"
          style={margin}
        >
          Restart Quiz
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="progress-6"></div>
        <span className="loading">Getting results...</span>
      </>
    );
  }
}

export default FinishPage;
