import { createSlice} from "@reduxjs/toolkit";
// import { scienceQuestions } from "../../data/Question";
import questions from "../../data/Question";
// import { createSlice } from "@reduxjs/toolkit";
// import questions from "../../data/Question";

const quizeSlice = createSlice({
  name: "quize",
  initialState: {
    questionsData: questions,  // pura data
    currentSubject: "javascript", // default subject
    currentDifficulty: "easy",   // default difficulty
    currentIndex: 0,
    score: 0,
    selectedOptions: {},
    isFinished: false
  },
  reducers: {
    setSubject: (state, action) => {
      state.currentSubject = action.payload;
      state.currentIndex = 0;
      state.score = 0;
      state.selectedOptions = {};
      state.isFinished = false;
    },
    setDifficulty: (state, action) => {
      state.currentDifficulty = action.payload;
      state.currentIndex = 0;
      state.score = 0;
      state.selectedOptions = {};
      state.isFinished = false;
    },
    nextQuestion: (state) => {
      const currentArray = state.questionsData[state.currentSubject][state.currentDifficulty];
      if (state.currentIndex < currentArray.length - 1) {
        state.currentIndex += 1;
      } else {
        state.isFinished = true;
      }
    },
    preQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
    checkAnswer: (state, action) => {
      const selected = action.payload;
      const currentArray = state.questionsData[state.currentSubject][state.currentDifficulty];
      const currentQ = currentArray[state.currentIndex];
      const correct = currentQ.answer;
      const prevSelected = state.selectedOptions[state.currentIndex];

      if (prevSelected === correct) {
        state.score -= 1;
      }
      state.selectedOptions[state.currentIndex] = selected;
      if (selected === correct) {
        state.score += 1;
      }
    },
    resetquize: (state) => {
      state.currentIndex = 0;
      state.score = 0;
      state.selectedOptions = {};
      state.isFinished = false;
    },
    resetIsFinished: (state) => {
      state.isFinished = false;
    }
  }
});

export const {
  setSubject,
  setDifficulty,
  nextQuestion,
  preQuestion,
  checkAnswer,
  resetquize,
  resetIsFinished
} = quizeSlice.actions;

export default quizeSlice.reducer;
