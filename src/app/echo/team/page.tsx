import * as React from "react";
import { Bulk } from "@/component/feedback/bulk";
import { GIVEN_KEY, RECEIVED_KEY } from "@/util/constant";
import { kv } from "@vercel/kv";

// get given
async function getReceived(id: string) {
  try {
    console.log({ id });
    const key = `${RECEIVED_KEY}:${id}`;

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
  const data = await getReceived(searchParams?.u || "");
  console.log({ data });


  return (
    <>
      <div>
        <h1>Team FeedBack</h1>
        <Bulk title="Feedback Receieved" response={data} />
      </div>
    </>
  );
}
