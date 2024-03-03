const arxiv = require('./arxiv');

const papers = arxiv
	.search({
		searchQueryParams: [{
			include: [{name: 'test'}]
		}],
		start: 0,
		maxResults: 1,
	})
	.then((papers) => console.log(papers))
	.catch((error) => console.log(error));