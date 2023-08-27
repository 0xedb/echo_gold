import * as React from "react";
import styles from "./page.module.css";

export default function Share() {
  return (
    <>
      <span />
      <div className={styles.header}>
        <h1>Share Feedback</h1>
        <div>
          <div>Feedback Period</div>
          <div>Date Picker</div>
        </div>
      </div>
      <span />
      <span />
      <div>other content</div>
      <span />
    </>
  );
}
