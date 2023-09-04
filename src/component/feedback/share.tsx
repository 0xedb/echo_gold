"use client";

import * as React from "react";
import { ListItem } from "./list";
import { useSnapshot } from "valtio"; 
import { userStore } from "@/lib/store";
import type { TPeople } from "@/util/type";

type ListData = { data: TPeople };

export function Share({ data }: ListData) {
  const { id } = useSnapshot(userStore);

  React.useEffect(() => {
    const idInput = document.querySelector(
      'input[type="hidden"]',
    ) as HTMLInputElement;

    userStore.id = idInput.value;
  });

  return (
    <ul>
      {data.filter((person) => id !== person.id).map((
        person,
      ) => <ListItem key={person.id} {...person} />)}
    </ul>
  );
}
