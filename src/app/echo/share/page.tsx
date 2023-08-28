import * as React from "react";
import styles from "./page.module.css";
import people from "@/app/people.json" assert { type: "json" };
import { Share } from "@/component/feedback/share";

export default async function Page() { 

  // TODO: get if the person needs review  or not from here

  return (
    <>
      <span />
      <div className={styles.header}>
        <h1>Share Feedback</h1>
        <div>
          <div>Feedback Period</div>
          {/* // TODO: make date picker client component */}
          <div>Date Picker</div>
        </div>
      </div>
      <span />
      <span />
      <div>
        {/* TODO: boolean prop to tell if it's fillout */}
        <Share data={people} />
      </div>
      <span />
    </>
  );
}
