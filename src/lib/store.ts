import { proxy } from "valtio";

type TId = { id: string }

export const userStore = proxy<TId>()

type Info = Record<string, {
    qid: string, ans: string, received: string[]
}>;

type TFeedback = Record<string, Info>;

export const givenStore = proxy<TFeedback>()

export type TResponseStore = {
    [x: string]: string
}
export const responseStore = proxy<{ data: TResponseStore }>({ data: {} })


type TLocation = { loc: "share" | "mine" | "team" | undefined }

export const locationStore = proxy<TLocation>({ loc: undefined })
