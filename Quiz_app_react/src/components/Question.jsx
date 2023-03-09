
import { useContext } from "react";
import { QuizContext } from "../context/quiz"; 

const Question = () => {
    const [quizState, dispatch ]= useContext(QuizContext)
	return <div>
        <p>Question 0 of 10</p>
        <h2>Current Question</h2>
        <div id="options-container">
            <p>Options</p>
            <button>Continue</button>
        </div>
    </div>;
};

export default Question;
