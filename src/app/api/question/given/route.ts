import { kv } from "@vercel/kv";
import { TResponseStore } from "@/lib/store";
import { NextResponse, NextRequest } from "next/server"
import { GIVEN_KEY, RECEIVED_KEY } from "@/util/constant";
import people from "@/app/people.json" assert { type: "json" };

// TODO: check need to have received and given count

export async function POST(req: NextRequest) {
    const body: { user: string, response: TResponseStore } = await req.json()

    const id = req.cookies.get('id');

    // TODO: check if valid user id
    // TODO: if not send a signal

    if (people.find(person => person.id === id.value)) {
        try {// TODO: write into kv db
            console.log("valid", id.value)

            // TODO: add timestamp to as date
            // TODO: add given collection of ids
            // TODO: add received collection of ids
            // // kv.set(`given:${id.value}`, {
            // //     to: body.user
            // // })

            // const respKey = `${RESPONSE_KEY}:${id.value}:${body.user}`
            // console.log({ respKey })

            // // TODO: add date to response
            // kv.lpush(respKey, { response: body.response, timestamp: Date.now() })

            // const givenKey = `${GIVEN_KEY}:${id.value}:${body.user}`
            // // await kv.set(givenKey, true)

            // const receivedKey = `${RECEIVED_KEY}:${body.user}:${id.value}`
            // await kv.set(receivedKey, true)

            // add to given
            // add to received

            const givenKey = `${GIVEN_KEY}:${id.value}`
            const receivedKey = `${RECEIVED_KEY}:${body.user}`

            const response = { timestamp: Date.now(), answers: { ...body.response } }
            console.log({givenKey, receivedKey})

            kv.lpush(givenKey, { id: body.user, response })

            kv.lpush(receivedKey, { id: id.value, response })


            console.log("DONE")
        } catch (err) { console.error(err) }
    }




    return NextResponse.json(body)
}