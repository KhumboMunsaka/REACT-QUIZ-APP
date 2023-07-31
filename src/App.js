import "./styles.css";
import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "London ", "Paris ", "Rome"],
    correctAnswerIndex: 2
  },
  {
    id: 2,
    question: "Which planet is closest to the Sun?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    correctAnswerIndex: 3
  },
  {
    id: 3,
    question: "What is the chemical symbol for Silver?",
    options: ["Au", "Ag", "Al", "S"],
    correctAnswerIndex: 1
  },
  {
    id: 4,
    question: "Who wrote the novel '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley ",
      "Friedrich Nietzsche ",
      "Franz Kafka"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 5,
    question: "What is the square root of 81?",
    options: ["6", "9", "12", "15"],
    correctAnswerIndex: 1
  },
  {
    id: 6,
    question:
      "Which famous scientist developed the theory of general relativity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Stephen Hawking",
      "Marie Curie"
    ],
    correctAnswerIndex: 0
  }
];

export default function App() {
  const [selected, setSelected] = useState(0);
  const [answer, setAnswer] = useState(false);

  function RevealAnswer(questionId) {
    setSelected(questionId !== selected ? questionId : null);

    setAnswer(true);
  }
  return (
    <div className="App">
      <div>
        <h1>Quiz App</h1>
        <h2>
          Try and answer the following questions and tap to see if you got it
          right!
        </h2>
      </div>

      <div className='container'>
        {quizQuestions.map((question, index) => (
          <div key={question.id} className="question">
            <p>{question.question}</p>
            <ol type="A" className="options">
              {question.options.map((option) => (
                <div>
                  <li>{option}</li>
                </div>
              ))}
            </ol>
            <div>
              <button onClick={() => RevealAnswer(question.id)}>
                REVEAL ANSWER
              </button>
              {selected === question.id && answer === true ? (
                <div>
                  <p className='answer'>{question.options[question.correctAnswerIndex]}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
