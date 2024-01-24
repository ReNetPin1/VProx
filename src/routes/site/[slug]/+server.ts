import type { RequestEvent } from '@sveltejs/kit'
import axios from 'axios';

export async function GET(request: RequestEvent) {
    const inputURL = new URL(request.params.slug ?? 'https://google.com')

    const host = inputURL.host

    let headers = []

    request.request.headers.forEach(header => {
        headers.push(header)
    })

    const response = await axios.get(inputURL.href, {
        headers: {
            'User-Agent': request.request.headers.get('user-agent')
        }
    })

    let responseData = response.data

    responseData = responseData.replace('<script>', '')

    let returnValue = new Response(responseData)

    returnValue.headers.set('Content-Type', 'text/html')

    return returnValue
}