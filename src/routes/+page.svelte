<script>
	import IconSearch from '~icons/ph/magnifying-glass';
	import logo from '$lib/assets/papercut-logo.png';
	import { goto } from '$app/navigation';
	let params = '';

	function searchQuery() {
		goto(`/search?q=${encodeURI(params)}`);
	}
</script>

<svelte:head>
	<title>papercut</title>
	<meta name="description" content="papercut home page" />
</svelte:head>

<div class="content">
	<div class="container">
		<!--<h1>paper<span class="slash">/</span>cut</h1>-->
		<a href="/"><img src={logo} alt="logo" style="width: 18rem;" /></a>
		<!--<p style="margin:-.25rem 0rem 0rem 0rem;">finding sources has never been more fun</p>-->
		<br />
		<div class="search">
			<form on:submit|preventDefault={() => searchQuery()}>
				<input
					type="text"
					placeholder="search..."
					bind:value={params}
					required
				/>
				<button type="submit" class="submit"><IconSearch /></button>
			</form>
			<br />
			<a href="/adv-search" class="adv">advanced search</a>
		</div>
		<br />
		<div class="links">
			<div class="column">
				<a href="/about" class="options">about/help</a>
			</div>
			<div class="column">
				<a href="/" class="options">settings</a>
			</div>
			<div class="column">
				<a href="/" class="options">github ↗</a>
			</div>
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

	.links {
		display: flex;
		padding-top: 3rem;
		margin: 0rem 4rem;
	}
	.column {
		width: 33%;
		text-align: center;
	}

	.options {
		text-decoration: none;
		color: black;
		padding: 1rem;
		border-radius: 2rem;
		transition: 0.1s;
	}
	.options:hover {
		text-decoration: underline;
		background-color: rgba(0, 0, 0, 0.1);
	}

	/*.slash {
		position: absolute;
		font-weight: 700;
		margin-left: 0.15ch;
		margin-top: 0.1ch;
	}*/
</style>
