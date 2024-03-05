import { Buffer } from 'node:buffer';
import { generateTOTP } from '@epic-web/totp';
// import { Environment, Paddle } from '@paddle/paddle-node-sdk';
// import { Environment, Paddle } from '@paddle/paddle-node-sdk-node-prefix';
import { Environment, Paddle } from '@paddle/paddle-node-sdk-dynamic-import';

export interface Env {
	PADDLE_API_KEY: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		globalThis.Buffer = Buffer;
		const totp = generateTOTP();
		console.log('PADDLE_API_KEY:', env.PADDLE_API_KEY);
		const paddle = new Paddle(env.PADDLE_API_KEY, {
			environment: Environment.sandbox,
		});

		const productCollection = paddle.products.list();
		const firstPage = await productCollection.next();
		console.log('First page data', firstPage);

		return new Response(
			JSON.stringify({
				totp,
				firstPage,
			})
		);
	},
};
