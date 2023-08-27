import * as React from "react";
import { cookies } from "next/headers";
import { Access } from "./access";

type AuthProps = { children: React.ReactNode };

export async function AuthShell({ children }: AuthProps) {
  console.log("auth shell !!!!!!!1");
  //   const supabase = createServerComponentClient({ cookies });

  //   const { data: { session } } = await supabase.auth.getSession();

  //   console.log("session here", session)

  //   if (session) {
  //     return <>{children}</>;
  //   }

  // read the cookie and load appropriate user
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
