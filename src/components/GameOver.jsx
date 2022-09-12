import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz';
import '../App.css';
import Vitoria from "../img/vitoria.png";
import Derrota from "../img/derrota.png";


const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    var photo = document.getElementById('state')
    var texto = document.getElementById('messanger')

    if(quizState.score >= 7){
        photo = Vitoria;
        texto = 'Parabéns, você sabe muito!';
    }
    else {
        photo = Derrota;
        texto = 'Não desista, na próxima você consegue!';
    }

    return (
    <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{""} Perguntas.</p>
        <p id='messanger'>{texto}</p>
        <img id="state" src={photo}></img>
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  )
}

export default GameOver;