import { PrismaClient } from "@prisma/client/edge";

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const prisma = new PrismaClient({
			datasources: {
				db: {
					url: env.DATABASE_URL
				}
			}
		})

		const posts = await prisma.post.findMany()

		return new Response(JSON.stringify(posts), {
			headers: {
				"content-type": "application/json;charset=UTF-8"
			}
		});
	},
};
