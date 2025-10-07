import { useState } from "react";
import "./App.css";
import Preview from "./components/Preview/Preview";
import Editor from "./components/Editor/Editor";

function App() {
  const [questionValue, setQuestionValue] = useState("");

  const handleChange = (event) => {
    setQuestionValue(event.target.value);
  };

  return (
    <>
      <h1>Problems Reviewer</h1>
      <div className="workArea">
        <Editor questionValue={questionValue} onChange={handleChange}></Editor>
        <Preview questionValue={questionValue}></Preview>
      </div>
    </>
  );
}

export default App;
