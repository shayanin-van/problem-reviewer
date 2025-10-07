import styles from "./Preview.module.css";
import { useEffect } from "react";
import { splitByInclinedPlaneJson } from "../../tools/utils/splitByInclinedPlaneJson";
import Diagram from "./Diagram/Diagram";

function Preview({ questionValue }) {
  useEffect(() => {
    MathJax.typeset();
  }, [questionValue]);

  const splittedQuestion = splitByInclinedPlaneJson(questionValue);
  const question = splittedQuestion.map((item) => {
    if (item.type === "text") {
      return <p key={item.order}>{item.text}</p>;
    } else if (item.type === "jsonObj") {
      return <Diagram key={item.order} paramJson={item.jsonObj}></Diagram>;
    }
  });

  return <div className={styles.preview}>{question}</div>;
}

export default Preview;
