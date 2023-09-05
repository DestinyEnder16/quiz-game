import { useEffect, useState } from 'react';

function Quiz({ dispatch, state }) {
  const [msg, setMsg] = useState('Loading Questions...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://the-trivia-api.com/api/questions?limit=${state.limit}&categories=${state.category}&difficulties=${state.difficulty}`
        );
        if (!res.ok) throw new Error('Network Error...');
        if (res.ok) setMsg('Starting Quiz...');

        const data = await res.json();

        //  this manually alters data received from the API to make it usable by the code. IMPORTANT SOLUTION
        let updatedData = data;
        updatedData.forEach((datum) => {
          datum.options = [datum.correctAnswer, ...datum.incorrectAnswers];
          const shuffledArr = datum.options.sort(() => Math.random() - 0.5);
          datum.options = shuffledArr;
        });

        if (data) {
          setTimeout(() => {
            dispatch({ type: 'setQuestions', payload: updatedData });
          }, 1000);
        }
      } catch (err) {
        setTimeout(() => {
          console.warn(err.message);
          dispatch({ type: 'dataFetchError', payload: err.message });
        }, 2000);
      }
    };

    fetchData();
  }, [state.limit, state.difficulty, state.category, dispatch]);
  return (
    <>
      <div className="shapes-5"></div>
      <span className="loading">{msg}</span>
    </>
  );
}

export default Quiz;
