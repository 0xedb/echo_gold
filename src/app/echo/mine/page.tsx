import * as React from "react";
import { kv } from "@vercel/kv";
import { Bulk } from "@/component/feedback/bulk";
import { GIVEN_KEY } from "@/util/constant";
import styles from "./page.module.css";

// TODO: get all responses

// get given
async function getGiven(id: string) {
  try {
    console.log({ id });
    const key = `${GIVEN_KEY}:${id}`;

    // const h = headers();

    // const q = await fetch(`http://${h.get("host")}/api/key`, {
    //   method: "POST",
    // });
    // console.log("LOG ", await q.json());

    const res = await kv.lrange(key, 0, -1);

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: undefined };
}) {
  const data = await getGiven(searchParams?.u || "");
  console.log({ data });

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.mid}>
          <h1>My FeedBack</h1>
          <div>
            <p>Feedback Period</p>
            <div>date</div>
          </div>
        </div>
      </div>
      <div className={styles.bulk}>
        <Bulk title="Feedback Given" response={data} />
      </div>
    </div>
  );
}
