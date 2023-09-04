import * as React from "react";
import styles from "./choice.module.css";
import { responseStore } from "@/lib/store";
import { useSnapshot } from "valtio";

export type TChoice = { options: { value: string; label: string }[] };

export default function Choice({ options = [], id }: TChoice & { id: string }) {
  const snap = useSnapshot(responseStore);

  const handleSelect = (value: string) => {
    responseStore.data[id] = value;
  };

  return (
    <div className={styles.shell}>
      {options.map((option, i) => (
        <div
          onClick={() => handleSelect(option.value)}
          key={i}
          className={`${styles.choice} ${
            snap.data[id] === option.value ? styles.selected : ""
          }`}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}
