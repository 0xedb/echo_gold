import * as React from "react";
import { Question } from "@/component/question/question";
import people from "@/app/people.json" assert { type: "json" };

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <span />
      <div>
        <Question
          user={people.find((person) => person.id === params.id)}
        />
      </div>
      <span />
    </>
  );
}
