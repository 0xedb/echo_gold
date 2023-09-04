import * as React from "react";
import styles from "./text.module.css";
import { responseStore } from "@/lib/store";
import SlTextarea from "@shoelace-style/shoelace/dist/react/textarea";

export default function Text({ id }: { id: string }) {
  const handleInput = (e) => {
    const value = e.target.value?.trim();

    if (value.length > 0) {
      responseStore.data[id] = value;
    } else {
      delete(responseStore.data[id])
    }
  };

  return (
    <div className={styles.shell}>
      <SlTextarea
        size="large"
        className={styles.input}
        onSlInput={handleInput}
        placeholder={"Say Something"}
        value={responseStore.data[id] ?? ""}
      />
    </div>
  );
}
