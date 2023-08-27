import * as React from "react";
import style from "./layout.module.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.layout}>
      <div className={style.content}>{children}</div>
    </div>
  );
}
