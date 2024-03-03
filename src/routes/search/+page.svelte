<script>
	import IconSearch from '~icons/ph/magnifying-glass';
	import logo from '$lib/assets/papercut-logo.png';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let results;

	let query = $page.url.searchParams.get('q');

	onMount(async () => {
		getResults();
	});

	async function getResults() {
		results = null;
		const res = await fetch(`/search?q=${query}`);
		results = await res.json();
		console.log(results);
	}
</script>

<svelte:head>
	<title>results - papercut</title>
	<meta name="description" content="Search results" />
</svelte:head>

<div class="searchbar">
	<div class="container">
		<div class="search">
			<form on:submit|preventDefault={() => getResults()}>
				<button type="submit" class="submit"><IconSearch style="font-size: 1.4rem;" /></button>
				<input type="text" placeholder="search..." bind:value={query} required />
			</form>
			<br />
			<div class="links">
				<div class="column">
					<a href="/">&lt;&lt;&lt; back to homepage</a>
				</div>
				<div class="fat"></div>
				<div class="column"><a href="/adv-search" style="float:right;">advanced search</a></div>
			</div>
		</div>
	</div>
</div>
<div class="content">
	<div class="results">
		{#if results != null}
			{#each results as result, i}
				<a href={result.id} class="source" title={result.title}>{result.title}</a>
			{/each}
		{/if}
		<div class="load-pos">
			<div class="loader"></div>
		</div>
	</div>
	<div class="stored"></div>
</div>

<style lang="scss">
	.searchbar {
		@include flex(column, center, center);

		height: 25%;
		width: 100%;
		justify-content: center;
	}
	.container {
		width: 90%;
		justify-content: center;
	}
	.content {
		display: flex;
		gap: 1%;
		margin: 0rem 5%;
		min-height: 70%;
	}

	form {
		background-color: var(--bg-2);
		border-bottom: 4px solid var(--fg);
		@include flex(row, left, center);
		width: 100%;

		button {
			padding: 0.8rem;
			background: none;
			@include flex(column, center, center);
		}

		input {
			padding: 0.8rem 0.8rem 0.8rem 0;
			font-size: 1.4rem;
			width: 100%;
		}
	}

	.links {
		display: flex;
		margin-top: -0.5rem;
	}
	.column {
		width: 20%;
	}
	.fat {
		width: 60%;
	}
	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		text-decoration: underline;
	}

	.results {
		background-color: rgb(239, 239, 239);
		padding: 2rem;
		text-align: center;
		width: 70%;
	}

	.stored {
		width: 30%;
		background-color: rgb(239, 239, 239);
	}

	.source {
		background-color: white;
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
