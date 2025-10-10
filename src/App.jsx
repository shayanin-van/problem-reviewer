import { useState } from "react";
import "./App.css";
import Preview from "./components/Preview/Preview";
import Editor from "./components/Editor/Editor";

function App() {
  const [problem, setProblem] = useState({
    question: "โจจจจจจจจจจจจจจจทย์",
    choices: ["a", "b", "c", "d"],
    hint: "ใบบบบบบบบบบบบบบบบบบ้",
    answer: 3,
    solution: "เฉลยยยยยยยยยยยยยยยยยย",
    isReviewed: false,
  });

  const handleQuestionChange = (e) => {
    setProblem((prevProblem) => ({ ...prevProblem, question: e.target.value }));
  };

  const handleChoicesChange = (e) => {
    const index = parseInt(e.target.dataset.index, 10);
    const newChoices = [...problem.choices];
    newChoices[index] = e.target.value;

    setProblem((prevProblem) => ({ ...prevProblem, choices: newChoices }));
  };

  const handleHintChange = (e) => {
    setProblem((prevProblem) => ({ ...prevProblem, hint: e.target.value }));
  };

  const handleAnswerChange = (e) => {
    setProblem((prevProblem) => ({
      ...prevProblem,
      answer: parseInt(e.target.value - 1, 10),
    }));
  };

  const handleSolutionChange = (e) => {
    setProblem((prevProblem) => ({ ...prevProblem, solution: e.target.value }));
  };

  const handleReviewStatusChange = () => {
    setProblem((prevProblem) => ({
      ...prevProblem,
      isReviewed: !prevProblem.isReviewed,
    }));
  };

  return (
    <>
      <h1>Problems Reviewer</h1>
      <div className="workArea">
        <Editor
          problem={problem}
          onQuestionChange={handleQuestionChange}
          onChoicesChange={handleChoicesChange}
          onHintChange={handleHintChange}
          onAnswerChange={handleAnswerChange}
          onSolutionChange={handleSolutionChange}
          onReviewStatusChange={handleReviewStatusChange}
        ></Editor>
        <Preview problem={problem}></Preview>
      </div>
    </>
  );
}

export default App;
