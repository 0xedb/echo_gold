
import { NextResponse } from "next/server";
import people from './people.json' assert { type: 'json' };

type Input = {
    email: string
    password: string
}

export async function POST(req: Request) {
    const res = { name: '', avatarUrl: '', id: "" }
    const { email, password } = await req.json() as Input

    const person = people.find(({ name, id }) => password === name && email.startsWith(id))

    const response = NextResponse.json({ ...res, ...person })
    response.cookies.set('id', person.id)

    return response
}