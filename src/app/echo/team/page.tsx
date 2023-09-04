import * as React from "react";
import { kv } from "@vercel/kv";
import styles from "./page.module.css";
import { RECEIVED_KEY } from "@/util/constant";
import { Bulk } from "@/component/feedback/bulk";

async function getReceived(id: string) {
  try {
    const key = `${RECEIVED_KEY}:${id}`;

    const res = await kv.lrange(key, 0, -1);

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.error(err);
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: undefined };
}) {
  const data = await getReceived(searchParams?.u || "");

  return (
    <>
      <div className={styles.top}>
        {data.length > 0 && <div className={styles.title}>Team FeedBack</div>}
        <Bulk title="Feedback Receieved" response={data} />
      </div>
    </>
  );
}
