import React, { useContext} from 'react';
import { QuizContext } from '../context/quiz';
import Banner from "../img/mark.png";
import "../App.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

/*início de tudo*/    

  return (
    <div id="welcome">
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Banner}/>
    </div>
  )
}

export default Welcome