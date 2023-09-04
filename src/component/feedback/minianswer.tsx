import * as React from "react";
import styles from "./minianswer.module.css";

type TMiniProps = {
  type: string;
  question: string;
  answer?: string;
  required: boolean;
};

export function MiniAnswer(
  { question, type, required, answer = "" }: TMiniProps,
) {
  console.log(type);

  const DisplayAns = () => {
    console.log({ required, answer });
    if (!required && answer.length < 1) {
      return <small className={styles.skipped}>SKIPPED</small>;
    }

    if (type === "scale") {
      return <Scale value={answer} />;
    }

    return <Text value={answer} />;
  };

  return (
    <>
      <div>{question}</div>
      <DisplayAns />
    </>
  );
}

type TMiniComp = {
  value: string;
};

function Scale({ value }: TMiniComp) {
  const v = Number(value);

  return (
    <div className={styles.scale}>
      {Array.from({ length: 10 }).map((_, i) => (
        <>
          <span
            className={`${styles.box} ${i < v ? styles.colored : ""}`}
            key={i}
          />
        </>
      ))}
    </div>
  );
}

function Text({ value }: TMiniComp) {
  return <div className={styles.text}>{value}</div>;
}
