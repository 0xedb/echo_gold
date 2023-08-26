import * as React from "react";
import { AppShell } from "@/component/app/appshell";
import { AuthShell } from "@/component/auth/authshell";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell>
      <AuthShell>{children}</AuthShell>
    </AppShell>
  );
}
