import query from '$lib/arxiv.js';

export async function load({ url, fetch }) {
	let results = await query({ query: url.searchParams.get('q') }, fetch);

	console.log(results);

	return {};
}
