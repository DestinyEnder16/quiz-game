import { useEffect } from 'react';

function Timer({ state, dispatch }) {
  const mins = `${Math.floor(state.timeRemaining / 60)}`.padStart(2, '0');
  const secs = `${state.timeRemaining % 60}`.padStart(2, '0');

  const timeStyle = { fontWeight: 700, margin: '0 5px' };

  useEffect(
    function () {
      const id = setInterval(() => {
        if (state.timeRemaining > 0) {
          //   setTimeRemaining((prev) => prev - 1);
          dispatch({ type: 'tick' });
        } else if (state.timeRemaining === 0) {
          dispatch({ type: 'finish' });
        }
      }, 1000);

      return () => clearInterval(id);
    },
    [state.timeRemaining, dispatch]
  );

  return (
    <div className="timer btn" disabled={true}>
      <span style={timeStyle}>{mins}</span>:
      <span style={timeStyle}>{secs}</span>
    </div>
  );
}

export default Timer;
