import { Buffer } from 'node:buffer';
import { generateTOTP } from '@epic-web/totp';

export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		globalThis.Buffer = Buffer;
		const totp = generateTOTP();

		return new Response(
			JSON.stringify({
				totp,
			})
		);
	},
};
