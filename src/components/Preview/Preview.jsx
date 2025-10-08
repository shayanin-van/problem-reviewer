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

  const choices = [];
  for (let i = 0; i < problem.choices.length; i++) {
    /////////////// Support Diagram in Choices ---------------------------------------
    // const splittedChoices = splitByInclinedPlaneJson(problem.choices[i]);
    // choices.push(
    //   splittedChoices.map((item, index) => {
    //     if (item.type === "text") {
    //       return <p key={index}>{i + 1 + ". " + item.text}</p>;
    //     } else if (item.type === "jsonObj") {
    //       return <Diagram key={index} paramJson={item.jsonObj}></Diagram>;
    //     }
    //   })
    // );

    /////////////// Not Support Diagram in Choices ---------------------------------------
    choices.push(<p key={i}>{i + 1 + ". " + problem.choices[i]}</p>);
  }

  const answer = <p>เฉลยหยาบ : {problem.answer}</p>;

  const splittedSolution = splitByInclinedPlaneJson(problem.solution);
  const solution = splittedSolution.map((item, index) => {
    if (item.type === "text") {
      return <p key={index}>{item.text}</p>;
    } else if (item.type === "jsonObj") {
      return <Diagram key={index} paramJson={item.jsonObj}></Diagram>;
    }
  });

  return (
    <div className={styles.preview}>
      {question}
      {choices}
      {answer}
      {solution}
    </div>
  );
}

export default Preview;
