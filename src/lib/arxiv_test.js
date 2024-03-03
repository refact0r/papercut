import { query } from './arxiv.js';

query({
	query: 'test'
}).then(console.log)

query({
	query: 'terence tao long gaps between primes'
}).then(console.log)