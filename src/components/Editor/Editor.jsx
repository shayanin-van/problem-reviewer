import styles from "./Editor.module.css";

function Editor({ questionValue, onChange }) {
  return (
    <div className={styles.editor}>
      <h3 style={{ margin: "-5px 0px 6px 0px" }}>โจทย์</h3>
      <textarea
        id="question"
        value={questionValue}
        onChange={onChange}
        rows="10"
      />
      <h3 style={{ margin: "10px 0px 6px 0px" }}>ตัวเลือก</h3>
      <textarea id="choice1" value={""} onChange={onChange} rows="1" />
      <textarea id="choice2" value={""} onChange={onChange} rows="1" />
      <textarea id="choice3" value={""} onChange={onChange} rows="1" />
      <textarea id="choice4" value={""} onChange={onChange} rows="1" />
      <h3 style={{ margin: "10px 0px 6px 0px" }}>ตัวเลือกที่ถูก</h3>
      <textarea id="answer" value={""} onChange={onChange} rows="1" />
      <h3 style={{ margin: "10px 0px 6px 0px" }}>เฉลยละเอียด</h3>
      <textarea id="answer" value={""} onChange={onChange} rows="16" />
    </div>
  );
}

export default Editor;
