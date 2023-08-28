import { proxy } from "valtio";

type TId = { id: string }

export const userStore = proxy<TId>()

type Info = Record<string, {
    qid: string, ans: string, received: string[]
}>;

type TFeedback = Record<string, Info>;

export const givenStore = proxy<TFeedback>()

export const responseStore = proxy()