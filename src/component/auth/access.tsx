"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import styles from "@/component/auth/access.module.css";
import SlInput from "@shoelace-style/shoelace/dist/react/input";
import SlButton from "@shoelace-style/shoelace/dist/react/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type FormData = {
  email: string;
  password: string;
};

export function Access() {
  const router = useRouter();
  const formRef = React.useRef<HTMLFormElement>();
  const [isLogin, setIsLogin] = React.useState(true);

  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { serialize } = await import(
      "@shoelace-style/shoelace/dist/utilities/form.js"
    );

    const { email, password } = serialize(formRef.current) as Record<
      keyof FormData,
      string
    >;
    console.log({ email, password });

    // get values
    // make call to supabase for login
    console.log(isLogin ? "logging in" : "signing up");

    let res = isLogin
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

    // const ress = await supabase.auth.signUp({
    //   email,
    //   password,
    //   options: {
    //     emailRedirectTo: `${location.origin}/auth/callback`,
    //   },
    // });

    // check status of request
    // reset form if necessary

    console.log("--", { res });
    // TODO: check if no errors before refresh
    router.refresh();
  };

  const toggleAccess = () => setIsLogin((prev) => !prev);

  return (
    <div className={styles.access}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.container}>
          <div className={styles.graphic}>
            <img src="/image/echo.svg" alt='Echo icon' />
            <h2>Echo</h2>
          </div>
          <SlButton onClick={toggleAccess}>
            {isLogin ? "Sign Up" : "Login"}
          </SlButton>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <SlInput
            id="email"
            size="large"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <SlInput
            id="password"
            size="large"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <SlButton
            size="large"
            type="submit"
            className={styles.submit}
          >
            {isLogin ? "Login" : "Sign Up"}
          </SlButton>
        </div>
      </form>
    </div>
  );
}
