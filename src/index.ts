import { PrismaClient } from "@prisma/client/edge";

export interface Env {
	DIRECT_DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const prisma = new PrismaClient({
			datasources: {
				db: {
					url: env.DIRECT_DATABASE_URL
				}
			}
		})

		const posts = await prisma.post.findMany()
		const body = JSON.stringify(posts, null, 2)

		return new Response(body, {
			headers: {
				"content-type": "application/json;charset=UTF-8"
			}
		});
	},
};
