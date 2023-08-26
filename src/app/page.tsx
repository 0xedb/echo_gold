import * as React from "react";
import { redirect } from "next/navigation";

// TODO: add metadata to all pages + SEO

export default async function Page() {
  redirect("/echo");
  return <></>;
}
