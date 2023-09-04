import * as React from "react";
import { Access } from "./access";
import { cookies } from "next/headers";

type AuthProps = { children: React.ReactNode };

export async function AuthShell({ children }: AuthProps) {
  const cookie = cookies().get("id");

  if (cookie?.value) {
    return (
      <>
        <input type="hidden" value={cookie?.value} />
        {children}
      </>
    );
  }

  return <Access />;
}
