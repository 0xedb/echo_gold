type User = {
    "avatarUrl"?: string,
    "id": string
    "name": string
}

export const EchoAuth = {
    async signIn(email: string, password: string): Promise<User> {
        try {
            const res = await fetch("/api/auth", { method: 'POST', body: JSON.stringify({ email, password }) })
            return await res.json()
        } catch (err) { console.error(err) }
    },
}