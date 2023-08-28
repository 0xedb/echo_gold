import * as React from "react";
import Image from "next/image";
import { useSnapshot } from "valtio";
import type { User } from "@/lib/auth";
import styles from "./list.module.css";
import { givenStore, userStore } from "@/lib/store";
import SlButton from "@shoelace-style/shoelace/dist/react/button";
import { useRouter } from "next/navigation";

const DEFAULT_IMAGE =
  "https://cdn.stocksnap.io/img-thumbs/280h/sky-night_OANZXN5973.jpg";

export function ListItem({ id, name, avatarUrl }: User) {
  const router = useRouter();
  const userSnap = useSnapshot(userStore);
  const givenSnap = useSnapshot(givenStore);

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
        {/* // TODO: check if give id */}
        <SlButton onClick={handleReview}>
          {givenSnap?.[userSnap?.id || ""]?.[id]
            ? "View Submissions"
            : "Fill Out"}
        </SlButton>
      </div>
    </li>
  );
}
