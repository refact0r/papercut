<script>
	import IconSearch from '~icons/ph/magnifying-glass';
	import logo from '$lib/assets/papercut-logo.png';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let params = '';
	let search;
	onMount(() => {
		search.addEventListener('keypress', function (event) {
			if (event.key === 'Enter') {
				event.preventDefault();
				goto(`/search?q=${params}`);
			}
		});
	});
</script>

<svelte:head>
	<title>papercut</title>
	<meta name="description" content="papercut home page" />
</svelte:head>

<div class="content">
	<div class="container">
		<!--<h1>paper<span class="slash">/</span>cut</h1>-->
		<img src={logo} alt="logo" style="width: 18rem;" />
		<br />
		<div class="search">
			<input type="text" placeholder="search..." bind:value={params} bind:this={search} />
			<a class="submit" href={`/search?q=${params}`}><IconSearch /></a>
			<br />
			<a href="/advsearch" style="float: right; padding: .25rem 1rem 0rem 0rem;">Advanced Search</a>
		</div>
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
		margin-left: -3rem;
		text-decoration: none;
		color: black;
		border-radius: 2rem;
		transition: 0.1s;
		padding: 0.2rem;
	}

	.submit:hover {
		background-color: rgba(0, 0, 0, 0.25);
	}

	/*.slash {
		position: absolute;
		font-weight: 700;
		margin-left: 0.15ch;
		margin-top: 0.1ch;
	}*/
</style>
