export async function request(method, endpoint, {apiKey, ...body}) {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
    }
    const requestInit = {
        body: JSON.stringify(body),
        headers,
        method,
    }

    const res = await fetch('https://gateway.sms77.io/api/' + endpoint, requestInit)
    return await res.json()
}
