import * as React from "react";
import "/public/css/global.css";
import styles from "./appshell.module.css";
import '@shoelace-style/shoelace/dist/themes/light.css';

export function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div>{children}</div>
        <footer className={styles.footer}>
          <span>Copyright © 2023 Fantasy Gold. All Rights Reserved.</span>
        </footer>
      </body>
    </html>
  );
}
