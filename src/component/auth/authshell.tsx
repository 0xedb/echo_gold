import * as React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Access } from "./access";

type AuthProps = { children: React.ReactNode };

export async function AuthShell({ children }: AuthProps) {
  const supabase = createServerComponentClient({ cookies });

  const { data: { session } } = await supabase.auth.getSession();

  console.log("session here", session)

  if (session) {
    return <>{children}</>;
  }

  return <Access />;
}
