import Image from "next/image";
import * as React from "react";

export default function Loading() {
  return (
    <>
      <span />
      <Image
        src={"/image/give_feedback.svg"}
        alt={"user.id"}
        height={700}
        width={780}
      />
      <span />
    </>
  );
}
