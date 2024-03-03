import { query } from '$lib/arxiv';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, fetch }) {
	let results = await query({ query: url.searchParams.get('q') }, fetch);

	return new Response(JSON.stringify(results));
}
