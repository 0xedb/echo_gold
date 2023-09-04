import * as React from "react";
import styles from "./page.module.css";
import { Share } from "@/component/feedback/share";
import people from "@/app/people.json" assert { type: "json" };

export default async function Page() {
  return (
    <>
      <span />
      <div className={styles.header}>
        <h1>Share Feedback</h1>
        <div>
          {
            /* <div>Feedback Period</div>
          <div>Date Picker</div> */
          }
        </div>
      </div>
      <span />
      <span />
      <div className={styles.share}>
        <Share data={people} />
      </div>
      <span />
    </>
  );
}
