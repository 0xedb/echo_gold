import * as React from "react";
import styles from "./page.module.css";
import people from '@/app/people.json' assert { type: 'json' };

export default async function Share() {
  console.log({people})
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
