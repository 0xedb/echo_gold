import * as React from "react";
import type { User } from "@/lib/auth";
import Image from "next/image";
import styles from "./list.module.css";
import SlButton from "@shoelace-style/shoelace/dist/react/button";

const DEFAULT_IMAGE =
  "https://cdn.stocksnap.io/img-thumbs/280h/sky-night_OANZXN5973.jpg";

export function List({ id, name, avatarUrl }: User) {
  return (
    <div className={styles.list}>
      <Image
        className={styles.img}
        src={avatarUrl ?? DEFAULT_IMAGE}
        alt={id}
        height={58}
        width={58}
      />
      <div>{name}</div>
      <SlButton>Hello</SlButton>
    </div>
  );
}
