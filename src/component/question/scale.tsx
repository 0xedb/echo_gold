import * as React from "react";
import styles from "./scale.module.css";

export default function Scale() {
  return (
    <div className={styles.scale}>
      ---
      {(Array(10)).map((box, i) => <Box key={i.toString()} />)}
    </div>
  );
}

function Box() {
  return (
    <span>
      1
    </span>
  );
}
