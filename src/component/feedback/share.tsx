"use client";

import * as React from "react";
import type { TPeople } from "@/util/type";
import { List } from "./list";

type ListData = { data: TPeople };

export function Share({ data }: ListData) {
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    const idInput = document.querySelector(
      'input[type="hidden"]',
    ) as HTMLInputElement;

    setId(idInput.value);
  });

  return data.filter((person) => id !== person.id).map((
    person,
  ) => <List key={person.id} {...person} />);
}
