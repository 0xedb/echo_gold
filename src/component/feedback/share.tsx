"use client";

import * as React from "react";
import type { TPeople } from "@/util/type";
import { ListItem } from "./list";

type ListData = { data: TPeople };

// TODO: get given rec from here

export function Share({ data }: ListData) {
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    const idInput = document.querySelector(
      'input[type="hidden"]',
    ) as HTMLInputElement;

    setId(idInput.value);
  });

  return (
    <ul>
      {data.filter((person) => id !== person.id).map((
        person,
      ) => <ListItem key={person.id} {...person} />)}
    </ul>
  );
}
