import React from 'react'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz.jsx'

const Questions = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);
  return (
    <div>Questions</div>
  )
}

export default Questions