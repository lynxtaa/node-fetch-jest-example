import { server, rest } from './jest/server.ts'

import { runFetch } from './index.ts'

it('runs fetch', async () => {
	server.use(rest.get('http://example.com', (req, res, ctx) => res(ctx.text('OK'))))

	expect(await runFetch()).toBe('OK')
})
