function Error({ state }) {
  return (
    <div id="error">
      <img src="404g.gif" alt="404 error" />
      <div className="error-message">{state.errorMessage}</div>
    </div>
  );
}

export default Error;
