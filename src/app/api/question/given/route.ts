import { kv } from "@vercel/kv";
import { TResponseStore } from "@/lib/store";
import { NextResponse, NextRequest } from "next/server"
import { GIVEN_KEY, RECEIVED_KEY } from "@/util/constant";
import people from "@/app/people.json" assert { type: "json" };


export async function POST(req: NextRequest) {
    const body: { user: string, response: TResponseStore } = await req.json()

    const id = req.cookies.get('id');


    if (people.find(person => person.id === id.value)) {
        try {

            const givenKey = `${GIVEN_KEY}:${id.value}`
            const receivedKey = `${RECEIVED_KEY}:${body.user}`

            const response = { timestamp: Date.now(), answers: { ...body.response } }


            kv.lpush(givenKey, { id: body.user, response })

            kv.lpush(receivedKey, { id: id.value, response })

        } catch (err) { console.error(err) }
    }




    return NextResponse.json(body)
}