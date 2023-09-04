import * as React from "react";
import { kv } from "@vercel/kv";
import { Bulk } from "@/component/feedback/bulk";
import { GIVEN_KEY } from "@/util/constant";
import styles from "./page.module.css";

async function getGiven(id: string) {
  try {
    const key = `${GIVEN_KEY}:${id}`;
    console.log(process.env);
    console.log(key);

    const res = await kv.lrange(key, 0, -1);
    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    console.error(err);
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: undefined };
}) {
  // const data = await getGiven(searchParams?.u || "");
  const data = []

  return (
    <div className={styles.page}>
      {data.length > 0 && (
        <div className={styles.header}>
          <div className={styles.mid}>
            <h1>My FeedBack</h1>
            <div>
              <p></p>
              <div></div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.bulk}>
        <Bulk title="Feedback Given" response={data} />
      </div>
    </div>
  );
}
