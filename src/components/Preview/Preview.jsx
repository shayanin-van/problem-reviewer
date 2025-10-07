import styles from "./Preview.module.css";
import { useEffect } from "react";
import { splitByInclinedPlaneJson } from "../../tools/utils/splitByInclinedPlaneJson";
import Diagram from "./Diagram/Diagram";

function Preview({ problem }) {
  useEffect(() => {
    MathJax.typeset();
  }, [problem]);

  const splittedQuestion = splitByInclinedPlaneJson(problem.question);
  const question = splittedQuestion.map((item, index) => {
    if (item.type === "text") {
      return <p key={index}>{item.text}</p>;
    } else if (item.type === "jsonObj") {
      return <Diagram key={index} paramJson={item.jsonObj}></Diagram>;
    }
  });

  return <div className={styles.preview}>{question}</div>;
}

export default Preview;
