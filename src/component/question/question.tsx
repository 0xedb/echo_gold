"use client";

import * as React from "react";
import styles from "./question.module.css";
import SlButton from "@shoelace-style/shoelace/dist/react/button";
import questions from "@/app/questions.json" assert { type: "json" };

// save all answers in responseStore
// unmoutn responseStore by cleanup

export function Question({ user = "" }: { user: string }) {
  const [index, setIndex] = React.useState(0);

  const handleNext = () => {
    setIndex((prev) => index === questions.length - 1 ? prev : prev + 1);
  };

  const handlePrevious = () => {
    setIndex((prev) => index === 0 ? 0 : prev - 1);
  };

  return (
    <div>
      <div>
        <h1>{questions.at(index).label}</h1>
        <div className={styles.info}>Share Your Feedback For {user}</div>
      </div>
      <div>question options</div>
      <div>
        <SlButton onClick={handlePrevious}>Previous</SlButton>
        <SlButton onClick={handleNext}>Next</SlButton>
      </div>
      <div>
        <progress
          className={styles.progress}
          max={questions.length}
          value={index + 1}
        />
        <h3>Questions Completed</h3>
        <div>1/{questions.length}</div>
      </div>
    </div>
  );
}
