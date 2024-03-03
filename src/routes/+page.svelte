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
	<div class="logo">
		<h1><span class="paper">paper</span><span class="slash">/</span>cut</h1>
	</div>
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

<style lang="scss">
	.content {
		margin: 5rem;
		height: 100%;
		width: 100%;
	}

	h1 {
		font-size: 5rem;
		letter-spacing: -0.015em;

		.paper {
			display: inline-block;
			vertical-align: top;
		}

		.slash {
			font-size: 7rem;
			font-weight: 500;
		}
	}
</style>
