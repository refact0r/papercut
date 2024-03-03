<script>
	import IconSearch from '~icons/ph/magnifying-glass-bold';
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
		<h1><span class="paper">paper</span><span class="slash">/</span>cut</h1>
		<form on:submit|preventDefault={() => searchQuery()}>
			<button type="submit" class="submit"><IconSearch style="font-size: 1.6rem;" /></button>
			<input type="text" placeholder="search..." bind:value={params} required />
		</form>
		<div class="row">
			<h2>find papers fast.</h2>
			<a href="/settings" class="options">settings</a>
			<a href="/about">about</a>
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		padding: 10vh;
		height: 100%;
		width: 100%;
	}

	.container {
		margin-top: 20vh;
	}

	h1 {
		font-size: 8rem;
		letter-spacing: -0.015em;
		margin: 0;
		.paper {
			display: inline-block;
			vertical-align: top;
			margin-top: 0.05em;
		}

		.slash {
			font-size: 11rem;
			font-weight: 500;
			letter-spacing: -0.05em;
			margin-left: -0.04em;
		}
	}

	h2,
	a {
		font-weight: 500;
		font-size: 1.6rem;
		letter-spacing: -0.01em;
	}

	.row {
		@include flex(row, left, center);

		gap: 2rem;
	}

	form {
		background-color: var(--bg-2);
		border-bottom: 4px solid var(--fg);
		@include flex(row, left, center);
		width: 100%;

		button {
			padding: 0.8rem 1rem;
			background: none;
			@include flex(column, center, center);
		}

		input {
			padding: 0.8rem 1rem 0.8rem 0;
			font-size: 1.6rem;
			width: 100%;
		}
	}

	a {
		&.options {
			margin-left: auto;
		}
	}
</style>
