import { query } from './arxiv.js';
import { summarize } from './summarize_article.js'
console.time('Query')
query({
	query: 'test',
	max_results: 20,
	start: 0,
}).then(articles => {
	console.timeEnd('Query')
	console.time('AI')
	Promise.all(
		articles.map(
			async article => summarize(article.summary, 'test')
		)
	).then(summaries => {
		console.timeEnd('AI')
		console.log(summaries)
	})
})