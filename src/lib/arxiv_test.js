import { query } from './arxiv.js';
import { summarize } from './summarize_article.js'
// query({
// 	query: 'test'
// }).then(console.log)

query({
	ids: ['1412.5029'],
	max_results: 1,
	start: 0,
})
	.then(([h]) => {
		console.log(h.summary)
		summarize(h.summary, '', (chunk) => process.stdout.write(chunk))
	})