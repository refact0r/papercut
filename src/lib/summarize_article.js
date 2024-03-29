import OpenAI from 'openai';
import { OAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({
	apiKey: OAI_API_KEY
});

/**
 * @callback streamCallback
 * @param {string} chunk chunk from the GPT stream response
 */

/**
 * Function that gives the summary of the articles
 * @param {string} abstract The abstract that corresponds
 * @param {streamCallback} streamHandler
 * @returns {Promise.<string>}
 */
async function summarize(abstract, query = '', streamHandler = () => {}) {
	const stream = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'user',
				content:
					`I want you to act like a research paper summarizer. I will input an abstract ` +
					`from a research paper and you need to summarize the abstract in under 100 words.` +
					(query
						? `Try to make the summary relevant to somebody searching for '''${query}'''`
						: ``) +
					`Do not repeat sentences and make sure all sentences are complete:\n` +
					abstract
			}
		],
		stream: true
	});
	let total = '';
	for await (const chunk of stream) {
		streamHandler(chunk.choices[0]?.delta?.content || '');
		total += chunk.choices[0]?.delta?.content || '';
	}
	return total;
}

export { summarize };
export default summarize;
