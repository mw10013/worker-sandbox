// @ts-expect-error ts(7016)
import * as base32 from 'thirty-two';
// import { Buffer } from 'node:buffer';
import { Buffer } from 'node:buffer';

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// const data = {
		// 	encode: base32.encode('node').toString(),
		// 	decode: base32.decode('NZXWIZI=').toString(),
		// };
		// return new Response('Hello Worker!');
		return new Response(Buffer.from('hello buffer'));
		// return new Response(JSON.stringify(data, null, 2));
	},
};
