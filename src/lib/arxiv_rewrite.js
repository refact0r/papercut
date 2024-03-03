import { parseString } from "xml2js";
import { promisify } from "util";

const parseXmlPromise = promisify(parseString);

/**
 * The object schema that arxiv returns is:
	{
		id: [ string ],
		updated: [ string ],
		published: [ string ],
		title: string[],
		summary: string[],
		author: { name: [Array] }[],
		'arxiv:doi': { _: 'string', '$': [Object] }[],
		link: { '$': [Object] }[],
		'arxiv:primary_category': [ { '$': [Object] } ],
		category: { '$': [Object] }[]
	}
 which has a lot of redundency. This function parses it into a more usable format
 * @param {Object} param0 
 * @param {string[]} param0.id
 * @param {string[]} param0.updated
 * @param {string[]} param0.published
 * @param {string[]} param0.title
 * @param {string[]} param0.summary
 * @param {string[]} param0.author
 * @param {string[]} param0.links
 * @param {string[]} param0.category
 * @returns {Object}
 */
function parseArxivObject({
	id: [id],
	updated: [updated],
	published: [published],
	title,
	summary,
	author,
	link,
	category,
	"arxiv:primary_category": [{$: primary_category}],
	"arxiv:comment": [{_: comment}] = [{_: ''}],
	"arxiv:affiliation": [{_: affiliation}] = [{_: ''}],
	"arxiv:journal_ref": [{_: journal_ref}] = [{_: ''}],
	"arxiv:doi": [{_: doi}] = [{_: ''}],
})
{
	return {
		id,
		updated,
		published,
		title: title.join(''),
		summary: summary.join(''),
		author: author.map(a => a.name),
		link: link.map(l => l.$),
		category: category.map(c => c.$.term),
		primary_category,
		comment,
		affiliation,
		journal_ref,
		doi,
	}
}

/**
 * @param {Object} param0
 * @param {string} param0.query The arxiv api `search_query` 
 * @param {Array.<string>} [param0.ids = []] The arxiv api `id_list` 
 * @param {number} [param0.start = 0] Index of the query
 * @param {number} [param0.max_results = 10] Max results of the query 
 * @returns {Promise<{id: string, updated: string, published: string, title: string, summary: string, author: string, link: string, category: string, primary_category: string, comment: string, affiliation: string, journal_ref: string, doi: string}>} Returns the arxiv api's xml response parsed as an object
 */
async function rawQueryArxiv({ query = "", ids = [], start = 0, max_results = 10 })
{
	if (!query && !ids.join("")) throw new Error('No id or query for the API');

	// Build Query - http://export.arxiv.org/api/{method_name}?{parameters}

	const apiResponse = await fetch(
		`http://export.arxiv.org/api/query?search_query=${query}&` +
		`id_list=${ids.join(',')}&` +
		`start=${start}&` +
		`max_results=${max_results}`
	);
	const objectResponse = await parseXmlPromise(await apiResponse.text());
	const usefulResponse = objectResponse.feed.entry;
	return usefulResponse.map(parseArxivObject)
}

export { rawQueryArxiv as query }
