export async function request(method, endpoint, {apiKey, ...body}) {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'SentWith': 'Adalo',
        'X-Api-Key': apiKey,
    }
    const requestInit = {
        body: JSON.stringify(body),
        headers,
        method,
    }

    const res = await fetch('https://gateway.seven.io/api/' + endpoint, requestInit)
    return await res.json()
}
