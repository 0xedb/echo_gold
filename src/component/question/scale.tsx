import * as React from "react";
import styles from "./scale.module.css";
import { useSnapshot } from "valtio";
import { responseStore } from "@/lib/store";

export default function Scale({ id }: { id: string }) {
  const snap = useSnapshot(responseStore);
  const [index, setIndex] = React.useState<number>(() => {
    const d = Number(snap.data[id]);

    return isNaN(d) ? 0 : d;
  });

  function handleSelect(index: number) {
    setIndex(index);
    responseStore.data[id] = index.toString();
  }

  function Box({ id }: { id: number }) {
    return (
      <>
        <div
          onClick={() => handleSelect(id)}
          className={`${styles.block} ${id <= index ? styles.selected : ""}`}
        />
      </>
    );
  }

  return (
    <div className={styles.shell}>
      <div className={styles.scale}>
        {(Array.from({ length: 10 }, (_, i) => i + 1)).map((box) => (
          <Box id={box} key={box.toString()} />
        ))}
      </div>
      <div className={styles.indicator}>{index}/10</div>
    </div>
  );
}
