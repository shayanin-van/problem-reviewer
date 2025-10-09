import styles from "./Editor.module.css";

function Editor({
  problem,
  onQuestionChange,
  onChoicesChange,
  onAnswerChange,
  onSolutionChange,
  onHintChange,
}) {
  const choices = problem.choices.map((choice, index) => {
    return (
      <textarea
        key={index}
        data-index={index}
        value={choice}
        rows="1"
        onChange={onChoicesChange}
      ></textarea>
    );
  });

  return (
    <div className={styles.editor}>
      <h3 style={{ margin: "-5px 0px 6px 0px" }}>โจทย์</h3>
      <textarea
        value={problem.question}
        onChange={onQuestionChange}
        rows="10"
      />
      <h3 style={{ margin: "10px 0px 6px 0px" }}>ตัวเลือก</h3>
      {choices}
      <h3 style={{ margin: "10px 0px 6px 0px" }}>คำใบ้</h3>
      <textarea value={problem.hint} onChange={onHintChange} rows="2" />
      <h3 style={{ margin: "10px 0px 6px 0px" }}>ตัวเลือกที่ถูก</h3>
      <input
        type="number"
        min={1}
        max={problem.choices.length}
        value={problem.answer}
        onChange={onAnswerChange}
      ></input>
      <h3 style={{ margin: "10px 0px 6px 0px" }}>เฉลยละเอียด</h3>
      <textarea
        value={problem.solution}
        onChange={onSolutionChange}
        rows="16"
      />
    </div>
  );
}

export default Editor;
