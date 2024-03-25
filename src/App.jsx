import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz.jsx'

import Welcome from './components/Welcome.jsx'
import Question from './components/Question.jsx'
import GameOver from './components/GameOver.jsx'

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    dispatch({type: "REORDER_QUESTIONS"});
  },[])

  return (
    
      <div className="App">
        <h1>Quiz De Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
        
  )
}

export default App
