import fetch from 'node-fetch'

export async function runFetch(): Promise<string> {
	const response = await fetch('http://example.com')
	if (!response.ok) {
		throw new Error(`Response not ok for: ${response.url}`)
	}
	return response.text()
}
