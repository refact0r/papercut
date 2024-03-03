import { XMLParser } from 'fast-xml-parser';

/**
 * @param {{id: string, updated: string, published: string, title: string, summary: string, author: string, links: string[], category: string[], 'arxiv:primary_category': Object 'arxiv:comment': Object 'arxiv:affiliation': Object 'arxiv:journal_ref': Object 'arxiv:doi': Object}} param0
 * @returns {Object}
 */
function parseArxivObject({
	id,
	updated,
	published,
	title,
	summary,
	author,
	link,
	category,
	'arxiv:primary_category': { '@_term': primary_category } = { '@_term': '' },
	'arxiv:comment': { '#text': comment } = { '#text': '' },
	'arxiv:affiliation': { '#text': affiliation } = { '#text': '' },
	'arxiv:journal_ref': { '#text': journal_ref } = { '#text': '' },
	'arxiv:doi': { '#text': doi } = { '#text': '' }
}) {
	return {
		id,
		updated,
		published,
		title,
		summary,
		author: author.name ? [author.name] : author.map((a) => a.name),
		link: link['@_href'] ? [link['@_href']] : link.map((l) => l['@_href']),
		category: category['@_term'] ? [category['@_term']] : category.map((c) => c['@_term']),
		primary_category,
		comment,
		affiliation,
		journal_ref,
		doi
	};
}

/**
 * @param {Object} param0
 * @param {string} param0.query The arxiv api `search_query`
 * @param {Array.<string>} [param0.ids = []] The arxiv api `id_list`
 * @param {number} [param0.start = 0] Index of the query
 * @param {number} [param0.max_results = 10] Max results of the query 
 * @returns {Promise<{id: string, updated: string, published: string, title: string, summary: string, author: string, link: string, category: string, primary_category: string, comment: string, affiliation: string, journal_ref: string, doi: string}[]>} Returns the arxiv api's xml response parsed as an object
 */
async function rawQueryArxiv({ query = '', ids = [], start = 0, max_results = 10 }, fetch = fetch) {
	if (!query && !ids.join('')) throw new Error('No id or query for the API');

	// Build Query - http://export.arxiv.org/api/{method_name}?{parameters}

	const apiResponse = await fetch(
		`http://export.arxiv.org/api/query?search_query=${query}&` +
			`id_list=${ids.join(',')}&` +
			`start=${start}&` +
			`max_results=${max_results}`
	);
	const objectResponse = new XMLParser({ ignoreAttributes: false }).parse(await apiResponse.text());

	if (!objectResponse.feed.entry) return []; // throw new Error('No results for the query')

	const usefulResponse = objectResponse.feed.entry.id
		? [objectResponse.feed.entry]
		: objectResponse.feed.entry;
		
	return usefulResponse.map(parseArxivObject);
}

export { rawQueryArxiv as query };
export default rawQueryArxiv;
