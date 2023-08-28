"use client";

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import SlButton from "@shoelace-style/shoelace/dist/react/button";
import questions from "@/app/questions.json" assert { type: "json" };

export function Question() {
  const [index, setIndex] = React.useState(0);
  const router = usePathname();
  const searchParams = useSearchParams();
  console.log(router);
  console.log(router, "---", searchParams.get("f"));
  return (
    <div>
      <div>
        <h1>{questions.at(index).label}</h1>
        <div>Share Your Feedback For Chris</div>
        <div>dafkj</div>
      </div>
      <div>question options</div>
      <div>
        <SlButton>Previous</SlButton>
        <SlButton>Next</SlButton>
      </div>
      <div>
        <hr />
        <h3>Questions Completed</h3>
        <div>1/{questions.length}</div>
      </div>
    </div>
  );
}
