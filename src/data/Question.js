export const scienceQuestions = [
  {
    question: "Which part of the plant makes food?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    correctAnswer: "Leaf"
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    correctAnswer: "100°C"
  },
  {
    question: "Which gas do plants absorb from the air?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide"
  },
  {
    question: "What is the center of an atom called?",
    options: ["Proton", "Electron", "Nucleus", "Neutron"],
    correctAnswer: "Nucleus"
  },
  {
    question: "Which vitamin is provided by sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin D"
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Salt", "Water", "Acid", "Alcohol"],
    correctAnswer: "Water"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "Which organ pumps blood in the human body?",
    options: ["Lungs", "Liver", "Brain", "Heart"],
    correctAnswer: "Heart"
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Gold", "Iron", "Mercury", "Copper"],
    correctAnswer: "Mercury"
  },
  {
    question: "Which gas is essential for human breathing?",
    options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Helium"],
    correctAnswer: "Oxygen"
  }
];



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
