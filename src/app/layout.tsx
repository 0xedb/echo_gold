import * as React from "react";
import { AppShell } from "@/component/app/appshell";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell>
      {children}
    </AppShell>
  );
}
