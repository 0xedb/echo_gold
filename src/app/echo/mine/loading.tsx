import Image from "next/image";
import * as React from "react";
import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.load}>
      <span />
      <Image
        src={"/image/my_feedback.svg"}
        alt={"user.id"}
        height={700}
        width={780}
      />
      <span />
    </div>
  );
}
