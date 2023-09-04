"use client";
import * as React from "react";
import Image from "next/image";
import styles from "./bulk.module.css";
import { DEFAULT_IMAGE } from "@/util/constant";
import people from "@/app/people.json" assert { type: "json" };
import questions from "@/app/questions.json" assert { type: "json" };
import { MiniAnswer } from "./minianswer";

type TBulkProps = {
  title: string;
  response: {
    id: string;
    response: { answers: { [x: string]: any }; timestamp: number };
  }[];
};

// TODO: after submitting review for someone reload data for the feedback page

export function Bulk({ title, response }: TBulkProps) {
  const [data] = React.useState(() => {
    const filtered: { [x: string]: any[] } = {};

    response.forEach((res) => {
      const cur = filtered[res.id];

      filtered[res.id] = cur
        ? [...filtered[res.id], res.response.answers]
        : [res.response.answers];
    });

    return filtered;
  });

  const [uId, setUId] = React.useState(Object.keys(data)?.at(0) || "");

  function handleSelect(id: string) {
    console.log("handling");
    setUId(id);
  }

  console.log({ uId }, data);

  return (
    <>
      {response.length < 1 ? <Empty /> : (
        <>
          <div className={styles.table}>
            <div className={styles.info}>
              <div className={styles.feedtitle}>{title}</div>
              {Object.entries(data).map(([key]) => (
                <React.Fragment key={key}>
                  <div
                    onClick={() => handleSelect(key)}
                    className={`${styles.data} ${
                      key === uId ? styles.selected : ""
                    }`}
                  >
                    <div>
                      <Image
                        className={styles.img}
                        src={people.find((p) => p.id === key).avatarUrl ??
                          DEFAULT_IMAGE}
                        alt={""}
                        height={48}
                        width={48}
                      />
                    </div>
                    <div>{people.find((p) => p.id === key).name}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className={styles.sec}>
              <div className={styles.namefeed}>
                {`${people.find((p) => p.id === uId).name}'s Feedback`}
              </div>
              {data[uId].map((res, idx) => {
                return (
                  <React.Fragment>
                    {questions.map((qs, i) => (
                      <div key={`qs-${i}-${idx}`} className={styles.mini}>
                        <MiniAnswer
                          question={qs.label}
                          answer={res[qs.id]}
                          type={qs.type}
                          required={qs.required}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export function Empty() {
  // TODO: add emoji
  return (
    <div>
      <h1>No Feedback to display</h1>
      <h3>
        There is no feedback to display at this time - check back in a bit!
      </h3>
    </div>
  );
}
