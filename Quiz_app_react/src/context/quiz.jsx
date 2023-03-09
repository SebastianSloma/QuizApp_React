import { createContext, useReducer } from 'react';
import questions from '../data/questions_complete';

const STAGES = ['Start', 'Playing', 'End'];

const initialState = {
	gameStage: STAGES[0],
	questions,
	currentQuestions: 0,
	score: 0,
	answerSelected: false,
	help: false,
	optionToHIde: null,
};

const quizReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_STAGE':
			return {
				...state,
				gameStage: STAGES[1],
			};
		case 'START_GAME':
			let quizQuestions = null;

			state.questions.forEach((question) => {
				if (question.category === action.payload) {
					quizQuestions = question.questions;
				}
			});
			return {
				...state,
				questions: quizQuestions,
				gameStage: STAGES[2],
			};

		case 'REORDER_QUESTIONS':
			const reorderedQuestions = questions.sort(() => {
				return Math.random() - 0.5;
			});
			return {
				...state,
				questions: reorderedQuestions,
			};

		case 'CHANGE_QUESTION':
			const nextQuestion = state.currentQuestion + 1;
			let endGeme = false;

			if (!questions[nextQuestion]) {
				endGeme = true;
			}

			return {
				...state,
				currentQuestion: nextQuestion,
				gameStage: endGeme ? STAGES[3] : state.gameStage,
				answerSelected: false,
				help: flase,
			};
		case 'NEW_GAME':
			return initialState;

		case 'CHECK_ANSWER':
			if (state.answerSelected) return state;

			const answer = action.payload.answer;
			const option = action.payload.option;
			let correctAnswer = 0;

			if (answer === option) correctAnswer = 1;

			return {
				...state,
				score: state.score + correctAnswer,
				answerSelected: option,
			};

		default:
			return state;
	}
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
	const value = useReducer(quizReducer, initialState);

	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
