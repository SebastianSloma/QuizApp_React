import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './GameOver.css';

const GameOver = () => {
	const [quizState, dispatch] = useContext(QuizContext);

	return (
		<div id='gameover'>
			<h2>GameOver!</h2>
			<p>Score :</p>
			You got {quizState.score} of {quizState.questions.length}
			{''} right questions.
			<button onClick={() => dispatch({ type: 'NEW_GAME' })}>Restart</button>
		</div>
	);
};

export default GameOver;
