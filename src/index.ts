import * as jwt from 'jsonwebtoken';
import { Buffer } from 'node:buffer';

export default {
	async fetch(request: Request, env: {}, ctx: ExecutionContext): Promise<Response> {
		globalThis.Buffer = Buffer;
		const token = jwt.sign('payload', 'SECRET', { expiresIn: '1h' });
		return new Response(`token: ${token}`);
	},
};
