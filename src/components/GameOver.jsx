import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz';
import '../App.css';
import Vitoria from "../img/vitoria.png";
import Derrota from "../img/derrota.png";
import Medio from "../img/medio.png";


const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    var photo = document.getElementById('state')
    var texto = document.getElementById('messanger')
    var sombra = document.getElementById('gameover')

    if(quizState.score >= 7){
        photo = Vitoria;
        texto = 'Parabéns, você sabe muito!';
    } else if(quizState.score <= 3){
            photo = Derrota;
            texto = 'Não desista, na próxima você consegue!';
    } else {
            photo = Medio;
            texto = 'Você foi bem, porém pode melhorar!';
    };  
    
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