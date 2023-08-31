function Progress({ state, numQuestions }) {
  return (
    <aside className="progress">
      <progress
        max={numQuestions}
        value={state.curIndex + Number(state.answer !== null)}
        id="progress-bar"
      />
    </aside>
  );
}

export default Progress;
