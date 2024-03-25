import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import WellDone from "../img/welldone.svg";

import './GameOver.css';

const gameover = () => {
  return (
    <div id='gameOver'>
        <h2>Fim De Jogo</h2>
        <p>Pontuação: x</p>
        <p>Voce acertou x de y perguntas</p>
        <img src={WellDone} alt="fim de jogo" />
        <button>Reiniciar</button>
    </div>
  )
}

export default gameover