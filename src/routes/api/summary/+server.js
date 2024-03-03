import { query } from '$lib/arxiv';
import { summarize } from '$lib/summarize_article';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, fetch }) {
	console.log(url.searchParams.get('q'));
	let results = await query({ query: url.searchParams.get('q') }, fetch).then((articles) => {
		Promise.all(
			articles.map(async (article) => summarize(article.summary, url.searchParams.get('q')))
		).then((summaries) => {
			console.log(summaries);
			for (let i = 0; i < articles.length; i++) {
				articles[i].aiSummary = summaries[i];
			}
		});
	});

	return new Response(JSON.stringify(results));
}
