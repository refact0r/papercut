<script>
	import IconSearch from '~icons/ph/magnifying-glass';
	import logo from '$lib/assets/papercut-logo.png';
	import { goto } from '$app/navigation';
	export let data;

	let results = data.results;

	let params = window.location.search.slice(3, window.location.search.length);

	function searchQuery() {
		goto(`/search?q=${params}`);
	}
</script>

<svelte:head>
	<title>results - papercut</title>
	<meta name="description" content="Search results" />
</svelte:head>

<div class="content">
	<div class="container">
		<a href="/"><img src={logo} alt="logo" style="width: 18rem;" /></a>
		<br />
		<div class="search">
			<form on:submit|preventDefault={() => searchQuery()}>
				<input
					type="text"
					placeholder="search..."
					bind:value={params}
					oninvalid="this.setCustomValidity('please enter a valid search term! only letters and numbers are allowed.')"
					oninput="this.setCustomValidity('')"
					pattern="[a-zA-Z0-9]+"
					required
				/>
				<button type="submit" class="submit"><IconSearch /></button>
			</form>
			<br />
			<a href="/adv-search" class="adv">advanced search</a>
		</div>
		<br />
		<h1>Results</h1>
	</div>
</div>

<style lang="scss">
	.content {
		@include flex(column, center, center);

		height: 100%;
		width: 100%;
	}

	.search {
		padding: 2rem 0rem;
	}

	input[type='text'] {
		outline: none;
		border: none;
		border-radius: 4rem;
		height: 4rem;
		width: 32rem;
		padding: 0rem 1rem;
		font-size: 1.5rem;
	}

	.submit {
		position: absolute;
		font-size: 1.5rem;
		margin-top: 0.7rem;
		margin-left: -3.5rem;
		text-decoration: none;
		color: black;
		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 2rem;
		transition: 0.1s;
		padding: 0.2rem 0.45rem;
		outline: none;
		border: none;
	}

	.submit:hover {
		background-color: rgba(192, 192, 192, 0.75);
		font-size: 1.7rem;
		margin-top: 0.6rem;
		margin-left: -3.6rem;
		cursor: pointer;
	}

	.adv {
		float: right;
		padding: 0.25rem 1rem 0rem 0rem;
		text-decoration: none;
		color: black;
	}
	.adv:hover {
		text-decoration: underline;
	}
</style>
