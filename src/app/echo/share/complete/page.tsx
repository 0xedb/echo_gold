import * as React from "react";
import styles from "./page.module.css";
import { Share } from "@/component/feedback/share";
import people from "@/app/people.json" assert { type: "json" };

export default function () {

  

  return (
    <>
      <div />
      <div>
        <h1>Thank you for sharing your feedback!</h1>
        <small>Continue to give feedback to other team members.</small>
        <br />
        <div className={styles.share}>
          <Share data={people} />
        </div>
      </div>
      <div />
    </>
  );
}
