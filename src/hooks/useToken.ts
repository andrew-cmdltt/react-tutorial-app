import {useEffect, useState} from "react";

export function useToken() {
    const [token, setToken] = useState('')

    useEffect(() => {
        const url = new URL(window.location.href)
        if (getTokenFromUrl(url)) {
            setToken(getTokenFromUrl(url))
        }
    }, [])

    return [token]

}

function getTokenFromUrl(url: URL): string {
    url.search = window.location.hash.substring(1);

    let token = url.searchParams.get("access_token")

    return token as string
}