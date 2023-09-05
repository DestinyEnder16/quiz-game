import { useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Category from './components/Category';
import DifficultyConfig from './components/DifficultyConfig';
import SetLimit from './components/SetLimit';
import Options from './components/Options';
import Questions from './components/Questions';
import Error from './components/Error';
import NextButton from './components/NextButton';
import Footer from './components/Footer';
import FinishPage from './components/FinishPage';
import Progress from './components/Progress';
import Timer from './components/Timer';

function reducer(state, action) {
  switch (action.type) {
    case 'categoryToggle':
      return { ...state, category: action.payload };
    case 'difficultyToggle':
      return { ...state, difficulty: action.payload };
    case 'limitToggle':
      return { ...state, limit: action.payload, status: 'ready' };
    case 'setQuestions':
      return {
        ...state,
        questions: action.payload,
        timeRemaining: TIME_PER_QUESTION * +state.limit,
      };
    case 'dataFetchError':
      return { ...state, status: 'error', errorMessage: action.payload };
    case 'newAnswer':
      if (action.payload === state.questions[state.curIndex].correctAnswer) {
        return {
          ...state,
          answer: action.payload,
          questionsAnswered: state.questionsAnswered + 1,
        };
      } else {
        return { ...state, answer: action.payload };
      }
    case 'nextQuestion':
      return { ...state, curIndex: state.curIndex + 1, answer: null };
    case 'tick':
      return { ...state, timeRemaining: state.timeRemaining - 1 };
    case 'finish':
      return { ...state, status: 'finish' };
    default:
      console.log('Action is not identified!');
  }
}

const TIME_PER_QUESTION = 15;

const initialState = {
  status: 'initiated',
  category: '',
  difficulty: '',
  limit: null,
  questions: [],
  curIndex: 0,
  answer: null,
  errorMessage: null,
  questionsAnswered: 0,
};

//the-trivia-api.com/v2/questions?limit=5&categories=science&difficulties=easy

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions = state.questions.length;
  return (
    <>
      <Header />
      <Main>
        {state.status === 'error' && <Error state={state} />}

        {state.status === 'initiated' && state.category === '' ? (
          <Category dispatch={dispatch} initialState={initialState} />
        ) : (
          ''
        )}
        {state.category !== '' && state.difficulty === '' ? (
          <DifficultyConfig dispatch={dispatch} />
        ) : (
          ''
        )}
        {state.difficulty !== '' && state.status === 'initiated' ? (
          <SetLimit dispatch={dispatch} />
        ) : (
          ''
        )}
        {state.status === 'ready' && state.questions[0] === undefined ? (
          <Questions dispatch={dispatch} state={state} />
        ) : (
          ''
        )}

        {state.questions[0] !== undefined && state.status !== 'finish' ? (
          <>
            <Progress state={state} numQuestions={numQuestions} />
            <Options
              state={state}
              curIndex={state.curIndex}
              dispatch={dispatch}
            />
            <Footer>
              <Timer
                state={state}
                dispatch={dispatch}
                timePerQuestion={TIME_PER_QUESTION}
              />
              <NextButton
                dispatch={dispatch}
                state={state}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        ) : (
          ''
        )}

        {state.status === 'finish' && (
          <FinishPage state={state} numQuestions={numQuestions} />
        )}
      </Main>
    </>
  );
}

export default App;
