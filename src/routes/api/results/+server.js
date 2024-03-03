import { query } from '$lib/arxiv';
import { summarize } from '$lib/summarize_article';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, fetch }) {
	let results = await query({ query: url.searchParams.get('q') }, fetch);
	let summaries = await Promise.all(
		results.map(async (article) => summarize(article.summary, url.searchParams.get('q')))
	);

	for (let i = 0; i < results.length; i++) {
		results[i].aiSummary = summaries[i];
	}

	return new Response(JSON.stringify(results));
}
