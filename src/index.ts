// @ts-expect-error ts(7016)
import * as base32 from 'thirty-two';
import { Buffer } from 'node:buffer';

export default {
	async fetch(request: Request, env: {}, ctx: ExecutionContext): Promise<Response> {
		globalThis.Buffer = Buffer;
		const data = {
			encode: base32.encode('node').toString(),
			decode: base32.decode('NZXWIZI=').toString(),
		};
		return new Response(JSON.stringify(data, null, 2));
	},
};
