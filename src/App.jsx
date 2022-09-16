import './App.css';
import Welcome from "./components/Welcome";
import Questions from './components/Questions';
import GameOver from './components/GameOver';

import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext); 

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, []);

  return (
    <div className="App">
      <h1>Você sabe?</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>} 
      {quizState.gameStage === "End" && <GameOver/>} 
    </div>
  );
};

export default App;
