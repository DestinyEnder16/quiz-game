function FinishPage({ state, numQuestions }) {
  const percentage = (state.questionsAnswered / numQuestions) * 100;
  const margin = { marginTop: '2.5rem' };
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
}

export default FinishPage;
