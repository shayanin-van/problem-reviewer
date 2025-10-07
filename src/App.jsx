import { useState } from "react";
import "./App.css";
import Preview from "./components/Preview/Preview";
import Editor from "./components/Editor/Editor";

function App() {
  const [problem, setProblem] = useState({
    question: "test",
    choices: ["a", "b", "c", "d"],
    answer: 3,
    solution: "test",
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

  const handleAnswerChange = (e) => {
    setProblem((prevProblem) => ({
      ...prevProblem,
      answer: parseInt(e.target.value, 10),
    }));
  };

  const handleSolutionChange = (e) => {
    setProblem((prevProblem) => ({ ...prevProblem, solution: e.target.value }));
  };

  return (
    <>
      <h1>Problems Reviewer</h1>
      <div className="workArea">
        <Editor
          problem={problem}
          onQuestionChange={handleQuestionChange}
          onChoicesChange={handleChoicesChange}
          onAnswerChange={handleAnswerChange}
          onSolutionChange={handleSolutionChange}
        ></Editor>
        <Preview problem={problem}></Preview>
      </div>
    </>
  );
}

export default App;
