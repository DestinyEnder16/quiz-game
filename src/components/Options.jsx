function Quiz({ state, curIndex, dispatch }) {
  const hasAnswered = state.answer !== null;
  const curQuestion = state.questions[curIndex];
  let userAnswer = '';
  return (
    <div className="question">
      <span className="question-number">
        {curIndex < 10 ? 0 : ''}
        {state.curIndex + 1}
      </span>
      <div id="question">{curQuestion.question}</div>

      <div className="option-buttons">
        {curQuestion.options.map((answer, index) => (
          <button
            className={`btn-option ${userAnswer === answer ? 'answer' : ''} ${
              hasAnswered
                ? answer === state.questions[curIndex].correctAnswer
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            key={answer}
            disabled={hasAnswered}
            onClick={(e) => {
              userAnswer = e.target.textContent;
              dispatch({ type: 'newAnswer', payload: userAnswer });
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
