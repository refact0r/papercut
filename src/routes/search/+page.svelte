<script>
	import IconSearch from '~icons/ph/magnifying-glass-bold';
	import IconX from '~icons/ph/x-bold';
	import IconArrow from '~icons/ph/arrow-right-bold';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { parseDate } from '$lib/parse_date';
	import { sources } from '$lib/stores/sources';

	let results;

	onMount(async () => {
		getResults();
	});

	let query = $page.url.searchParams.get('q');

	async function getResults() {
		results = null;
		const res = await fetch(`/api/results?q=${query}`);
		results = await res.json();
		console.log(results);
	}

	function expandSummary(element) {}

	function add(i) {
		$sources.push(results[i]);
		$sources = $sources;
	}

	function remove(i) {
		results.splice(i, 1);
		results = results;
	}

	$: console.log($sources);

	function refresh() {
		query = query.trim();
		if (query) {
			goto('/search?q=' + query);
			getResults();
		}
	}
</script>

<svelte:head>
	<title>results - papercut</title>
	<meta name="description" content="search results" />
</svelte:head>

<div class="content">
	<div class="search">
		<a href="/"><h1><span class="paper">paper</span><span class="slash">/</span>cut</h1></a>
		<form class="searchbar" on:submit|preventDefault={() => refresh()}>
			<button type="submit" class="submit"><IconSearch style="font-size: 1.3rem;" /></button>
			<input
				type="text"
				placeholder="search..."
				bind:value={query}
				required
				oninvalid="this.setCustomValidity('please enter a valid search term! only letters and numbers are allowed.')"
				oninput="this.setCustomValidity('')"
				pattern="[a-zA-Z0-9 ]+"
			/>
		</form>
	</div>
	<div class="container">
		<div class="results">
			{#if results && results.length > 0}
				{#each results as result, i}
					<div class="result-container">
						<button class="remove" on:click={() => remove(i)}
							><IconX style="font-size: 1.2rem;" /></button
						>
						<div class="result">
							<a href={result.id}><h3>{result.title}</h3></a>
							<p>{`${parseDate(result.published)} - ${result.author.join(', ')}`}</p>
							<p>Summary: {result.aiSummary}</p>
						</div>
						<button class="add" on:click={() => add(i)}
							><IconArrow style="font-size: 1.2rem;" /></button
						>
					</div>
				{/each}
			{:else if results && results.length === 0}
				<div class="results-box">
					<p>No results found for "{query}"</p>
				</div>
			{:else}
				<div class="results-box">
					<div class="loader"></div>
				</div>
			{/if}
		</div>
		<div class="list">
			<a href="/sources"><h2>sources</h2></a>
			{#each $sources as source}
				<p>{source.title}</p>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		@include flex(column, default, default);
		gap: 2vw;
		padding: 3vw 2vw;
		height: 100%;
	}

	.search {
		padding: 0 3rem;
		@include flex(row, default, center);

		h1 {
			width: 11rem;
			font-size: 2rem;
			margin: 0;
		}
	}

	form {
		button {
			padding: 0.6rem 0.8rem;
		}
		input {
			font-size: 1.2rem;
			padding: 0.6rem 0.8rem 0.6rem 0;
		}
	}

	.links {
		display: flex;
		justify-content: space-between;
		margin-top: 0.5rem;
	}

	.container {
		@include flex(row, default, default);
		gap: 1rem;
		height: 100%;
	}

	.results {
		width: 65%;
		@include flex(column, default, default);
		gap: 1rem;
	}

	.list {
		width: 35%;
		height: 100%;
		background-color: var(--bg-2);
		padding: 1rem 1.5rem;
		margin-right: 3rem;
	}

	.result-container {
		@include flex(row, space-between, center);
		gap: 1rem;
		.remove,
		.add {
			min-width: 2rem;
			min-height: 2rem;
			@include flex(row, center, center);
			color: var(--fg-3);
			transition: 0.2s;
			&:hover {
				color: var(--fg);
			}
		}
		.remove {
			transform: translateX(3rem);
		}
		.add {
			transform: translateX(-3rem);
		}
		&:hover {
			.remove,
			.add {
				transform: translateX(0);
			}
			.result:hover {
				outline-width: 3px;
			}
		}
	}

	.results-box {
		margin: 0 3rem;
		background-color: var(--bg-2);
		padding: 1rem;
		height: 100%;
		@include flex(column, center, center);
	}

	.result {
		width: 100%;
		//height: 50%;
		overflow: hidden;
		background-color: var(--bg-2);
		padding: 1rem;
		cursor: pointer;
		transition: 0.2s;
		outline: solid 0px var(--fg-3);
		z-index: 2;
		h3 {
			margin: 0;
			font-size: 1.1rem;
		}
		a {
			color: var(--fg);
		}
		p {
			margin: 0.6rem 0;
		}
	}

	h2 {
		margin: 0;
		font-size: 1.6rem;
	}

	.load-pos {
		display: flex;
		justify-content: center;
		padding: 2rem;
	}
	.loader {
		width: 40px;
		aspect-ratio: 1;
		display: grid;
	}
	.loader::before,
	.loader::after {
		content: '';
		grid-area: 1/1;
		background: rgb(40, 40, 40);
		clip-path: polygon(0 0, 101% 0, 0 100%);
		animation: l13 1.6s infinite;
	}
	.loader::after {
		--s: -1, -1;
	}
	@keyframes l13 {
		0%,
		15% {
			transform: scale(var(--s, 1)) translate(0, 0) rotate(0deg);
		}
		33% {
			transform: scale(var(--s, 1)) translate(20px, -20px) rotate(0deg);
		}
		66% {
			transform: scale(var(--s, 1)) translate(20px, -20px) rotate(180deg);
		}
		90%,
		100% {
			transform: scale(var(--s, 1)) translate(0px, 0px) rotate(180deg);
		}
	}
</style>
