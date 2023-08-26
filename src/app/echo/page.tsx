import { redirect } from "next/navigation";
import * as React from "react";

export default function Page() {
  redirect("/echo/share");
  return <></>;
}
