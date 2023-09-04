"use client";

import * as React from "react";
import { EchoAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import styles from "@/component/auth/access.module.css";
import SlInput from "@shoelace-style/shoelace/dist/react/input";
import SlButton from "@shoelace-style/shoelace/dist/react/button";

type FormData = {
  email: string;
  password: string;
};

export function Access() {
  const router = useRouter();
  const formRef = React.useRef<HTMLFormElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { serialize } = await import(
      "@shoelace-style/shoelace/dist/utilities/form.js"
    );

    const { email, password } = serialize(formRef.current) as Record<
      keyof FormData,
      string
    >;

    try {
      await EchoAuth.signIn(email, password);
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.access}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.container}>
          <div className={styles.graphic}>
            <img src="/image/echo.svg" alt="Echo icon" />
            <h2>Echo</h2>
          </div>
          <h4 className={styles.title}>Login</h4>
          <div className={styles.spacer}>
            <SlInput
              id="email"
              size="large"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.spacer}>
            <SlInput
              id="password"
              size="large"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className={styles.spacer}>
            <SlButton
              size="large"
              type="submit"
              className={styles.submit}
            >
              Login
            </SlButton>
          </div>
        </div>
      </form>
    </div>
  );
}
