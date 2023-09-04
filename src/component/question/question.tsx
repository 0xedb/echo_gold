"use client";

import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useSnapshot } from "valtio";
import type { User } from "@/lib/auth";
import type { TChoice } from "./choice";
import styles from "./question.module.css";
import { useRouter } from "next/navigation";
import { responseStore } from "@/lib/store";
import { DEFAULT_IMAGE } from "@/util/constant";
import SlButton from "@shoelace-style/shoelace/dist/react/button";
import questions from "@/app/questions.json" assert { type: "json" };

export function Question({ user }: { user: User }) {
  const router = useRouter();
  const submitting = React.useRef(false);
  const snap = useSnapshot(responseStore);
  const [index, setIndex] = React.useState(0);
  const [kind, setKind] = React.useState(questions.at(index).type);

  const handleNext = async () => {
    setIndex((prev) => index === questions.length - 1 ? prev : prev + 1);

    try {
      if (index + 1 === questions.length && !submitting.current) {
        submitting.current = true;
        const response = { ...snap.data };

        await fetch("/api/question/given", {
          body: JSON.stringify({ user: user.id, response }),
          method: "POST",
        });

        responseStore.data = {};
        router.push("/echo/share/complete");
      }
    } catch (err) {
      console.error(err);
    } finally {
      submitting.current = false;
    }
  };

  const handlePrevious = () => {
    setIndex((prev) => index === 0 ? 0 : prev - 1);
  };

  const handleSkip = () => {
    handleNext();
  };

  React.useEffect(() => {
    setKind(questions.at(index).type);
  }, [index]);

  console.log(kind);

  function handleBack() {
    responseStore.data = {};
    router.back();
  }

  // TODO: add loading object to dynamic import
  const QuestionKind: React.ComponentType<
    { id: string } | TChoice & { id: string }
  > = React.useMemo(() => {
    return dynamic(() =>
      kind === "multipleChoice" ? import("./choice") : import(`./${kind}`)
    );
  }, [index, kind]);

  return (
    <div>
      <div className={styles.back} onClick={handleBack}>
        <Image
          src={"/image/back.svg"}
          alt={"user.id"}
          height={20}
          width={20}
        />
        <span>BACK</span>
      </div>
      <div className={styles.header}>
        <div>
          <h1>{questions.at(index).label}</h1>
          <div className={styles.info}>Share Your Feedback For {user.name}</div>
        </div>
        <div>
          <div>
            <Image
              className={styles.img}
              src={user.avatarUrl ?? DEFAULT_IMAGE}
              alt={user.id}
              height={58}
              width={58}
            />
          </div>
        </div>
      </div>
      <div className={styles.quest}>
        <QuestionKind
          id={questions.at(index).id}
          {...kind === "multipleChoice"
            ? ({ options: questions.at(index).options })
            : ({})}
        />
        <div className={styles.controls}>
          <SlButton onClick={handlePrevious} disabled={index === 0}>
            Previous
          </SlButton>
          {!(questions.at(index).required) && (
            <SlButton onClick={handleSkip}>Skip</SlButton>
          )}
          <SlButton
            className={`${
              !(questions.at(index).required &&
                !snap.data[questions.at(index).id]) && styles.next
            }`}
            onClick={handleNext}
            disabled={questions.at(index).required &&
              !snap.data[questions.at(index).id]}
          >
            Next
          </SlButton>
        </div>
        <div className={styles.progress}>
          <progress
            className={styles.progress}
            max={questions.length}
            value={index + 1}
          />
          <h4>Questions Completed</h4>
          <div>{index + 1}/{questions.length}</div>
        </div>
      </div>
    </div>
  );
}
