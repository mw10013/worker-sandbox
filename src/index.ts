import * as jwt from 'jsonwebtoken';

export default {
	async fetch(request: Request, env: {}, ctx: ExecutionContext): Promise<Response> {
		const token = jwt.sign('payload', 'SECRET', { expiresIn: '1h' });
		return new Response(`token: ${token}`);
	},
};
