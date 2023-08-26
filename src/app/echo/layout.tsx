import * as React from "react";
import style from "./layout.module.css";
import { Header } from "@/component/header/echo";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={style.layout}>
        <Header />
        <div className={style.content}>{children}</div>
      </div>
    </>
  );
}
