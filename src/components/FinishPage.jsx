function FinishPage({ state, numQuestions }) {
  const percentage = (state.questionsAnswered / numQuestions) * 100;
  return (
    <div id="finish-text">
      <span>
        Final Score :{' '}
        <strong>
          {state.questionsAnswered} / {numQuestions}
        </strong>
      </span>
      <span style={{ marginTop: '1.5rem' }}>
        (<strong>{Math.round(percentage)}</strong>%)
      </span>
    </div>
  );
}

export default FinishPage;
