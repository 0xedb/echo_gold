import * as React from "react";
import type { User } from "@/lib/auth";
import Image from "next/image";
import styles from "./list.module.css";
import SlButton from "@shoelace-style/shoelace/dist/react/button";

const DEFAULT_IMAGE =
  "https://cdn.stocksnap.io/img-thumbs/280h/sky-night_OANZXN5973.jpg";

export async function ListItem({ id, name, avatarUrl }: User) {
  return (
    <li className={styles.list}>
      <Image
        className={styles.img}
        src={avatarUrl ?? DEFAULT_IMAGE}
        alt={id}
        height={58}
        width={58}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.button}>
        <SlButton>Hello</SlButton>
      </div>
    </li>
  );
}
