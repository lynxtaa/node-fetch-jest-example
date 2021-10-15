// TODO: This is to trick Typescript
// Wait for release "moduleResolution: node12":
// https://github.com/microsoft/TypeScript/pull/45884
const _importDynamic = new Function('modulePath', 'return import(modulePath)')

export async function runFetch(): Promise<string> {
	const module = (await _importDynamic('node-fetch')) as typeof import('node-fetch')
	const response = await module.default('http://example.com')
	if (!response.ok) {
		throw new Error(`Response not ok for: ${response.url}`)
	}
	return response.text()
}
