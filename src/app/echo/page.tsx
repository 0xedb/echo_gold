import { redirect } from "next/navigation";
import * as React from "react";

export default function Page() {
  console.log("ECHOOOOO /echo")
  redirect("/echo/share");
  return <></>;
}
