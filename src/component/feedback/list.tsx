import * as React from "react";
import Image from "next/image";
import type { User } from "@/lib/auth";
import styles from "./list.module.css";
import { useRouter } from "next/navigation";
import { DEFAULT_IMAGE } from "@/util/constant";
import SlButton from "@shoelace-style/shoelace/dist/react/button";

export function ListItem({ id, name, avatarUrl }: User) {
  const router = useRouter();

  const handleReview = () => {
    const link = `/echo/share/${id}`;

    router.push(link);
  };

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
        <SlButton onClick={handleReview}>
          Fill Out
        </SlButton>
      </div>
    </li>
  );
}
