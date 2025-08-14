
const questions = {
  javascript: {
    easy: [
      {
        question: "What does JS stand for?",
        options: ["Java Source", "JavaScript", "Just Script", "JQuery"],
        answer: "JavaScript",
      },
      {
        question: "Which keyword declares a variable?",
        options: ["var", "def", "int", "let"],
        answer: "let",
      },
    ],
    medium: [
      {
        question: "What is a closure in JavaScript?",
        options: [
          "Function inside a function",
          "Global variable",
          "Callback",
          "Array",
        ],
        answer: "Function inside a function",
      },
    ],
    hard: [
      {
        question: "Which of the following is NOT a primitive in JS?",
        options: ["String", "Boolean", "Object", "Number"],
        answer: "Object",
      },
    ],
  },
  html: {
    easy: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Markup Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Leveler",
        ],
        answer: "Hyper Text Markup Language",
      },
    ],
    medium: [
      {
        question: "Which tag is used for paragraph?",
        options: ["<div>", "<p>", "<section>", "<para>"],
        answer: "<p>",
      },
    ],
    hard: [
      {
        question: "Which is not a valid HTML5 tag?",
        options: ["<footer>", "<blink>", "<canvas>", "<section>"],
        answer: "<blink>",
      },
    ],
  },
};

export default questions;
