function NextButton({ dispatch, state, numQuestions }) {
  if (state.curIndex === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
  } else {
    return (
      <>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: 'nextQuestion' });
          }}
          disabled={state.answer ? false : true}
        >
          Next
        </button>
      </>
    );
  }
}

export default NextButton;
