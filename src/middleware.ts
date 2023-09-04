import { NextRequest, NextResponse } from "next/server";
import { X_ACTION_DEL } from "./util/constant";

export function middleware(req: NextRequest, res: NextResponse) {
    const response = NextResponse.next()

    if (req.headers.has(X_ACTION_DEL)) {
        response.cookies.delete('id')
    }

    return response
}