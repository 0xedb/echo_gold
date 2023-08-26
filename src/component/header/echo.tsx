import * as React from "react";
import styles from "@/component/header/echo.module.css";
import Link from "next/link";

// TODO: change all style imports to use standard @

export function Header() {
  return (
    <div className={styles.header}>
      <div>Echo</div>
      <div className={styles.feedback}>
        <Link href="/echo/share">
          <div>Share Feedback</div>
        </Link>
        <Link href="/echo/mine">
          <div>My Feedback</div>
        </Link>
        <Link href="/echo/team">
          <div>Team Feedback</div>
        </Link>
      </div>
      <div>
        <div>Jane Smith</div>
        <div>Logout</div>
      </div>
    </div>
  );
}
