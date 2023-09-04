"use client";
import * as React from "react";
import styles from "@/component/header/echo.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUserId } from "@/util/hook";
import people from "@/app/people.json" assert { type: "json" };
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/util/constant";

export function Header() {
  const id = useUserId();
  const router = useRouter();
  async function handleLogout() {
    // TODO: work on logout
    // logout and refresh
    try {
      await fetch("/api/auth", { method: "DELETE" });
      router.refresh();
    } catch (err) {
      console.error;
    }
  }

  const userId = useUserId()

  const path = usePathname(); 

  return (
    <div className={styles.header}>
      <div className={`${styles.center} ${styles.logo}`}>Echo</div>
      <div className={styles.feedback}>
        <Link href="/echo/share">
          <div>Share Feedback</div>
          <small
            className={path === "/echo/share" ? styles.active : ""}
          />
        </Link>
        <Link href={`/echo/mine?u=${userId}`}>
          <div>My Feedback</div>
          <small
            className={path === "/echo/mine" ? styles.active : ""}
          />
        </Link>
        <Link href={`/echo/team?u=${userId}`}>
          <div>Team Feedback</div>
          <small
            className={path === "/echo/team" ? styles.active : ""}
          />
        </Link>
      </div>
      <div className={`${styles.center} ${styles.info}`}>
        <span />
        <div>
          <Image
            className={styles.img}
            src={people.find((p) => p.id === id)?.avatarUrl ?? DEFAULT_IMAGE}
            alt={"user.id"}
            height={58}
            width={58}
          />
        </div>
        <div className={styles.view}>
          <div>{people.find((p) => p.id === id)?.name}</div>
          <div onClick={handleLogout}>Logout</div>
        </div>
      </div>
    </div>
  );
}
