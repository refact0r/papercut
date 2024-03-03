import { parseString } from "xml2js";
import { promisify } from "util";

const parseXmlSync = promisify(parseString);

/**
 * @param {Object} param0
 * @param {string} param0.query The arxiv api `search_query` 
 * @param {Array.<string>} param0.ids The arxiv api `id_list` 
 * @param {number} [param0.start = 0] Index of the query
 * @param {number} [param0.max_results = 10] Max results of the query 
 * @returns {object} Returns the arxiv api's xml response parsed as an object
 */
async function queryArxiv({ query = "", ids = [], start = 0, max_results = 10 })
{
	if (!query && !ids.join("")) throw new Error('No id or query for the API');
	
}

export { queryArxiv as query }