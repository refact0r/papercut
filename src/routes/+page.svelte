<script>
	import IconSearch from '~icons/ph/magnifying-glass-bold';
	import { goto } from '$app/navigation';
	let query = '';

	function refresh() {
		query = query.trim();
		if (query) {
			goto('/search?q=' + query);
			getResults();
		}
	}
</script>

<svelte:head>
	<title>papercut</title>
	<meta name="description" content="papercut home page" />
</svelte:head>

<div class="content">
	<div class="container">
		<h1 class="logo"><span class="paper">paper</span><span class="slash">/</span>cut</h1>
		<form class="searchbar" action="/search">
			<button type="submit" class="submit"><IconSearch style="font-size: 1.6rem;" /></button>
			<input
				type="text"
				placeholder="search..."
				name="q"
				required
				autofocus="autofocus"
				oninvalid="this.setCustomValidity('please enter a valid search term! only letters and numbers are allowed.')"
				oninput="this.setCustomValidity('')"
				pattern="[a-zA-Z0-9 ]+"
			/>
		</form>
		<div class="row">
			<h2>find papers fast.</h2>
			<a href="/sources" class="options">sources</a>
			<a href="/settings">settings</a>
			<a href="/about">about</a>
		</div>
	</div>
</div>

<style lang="scss">
	.content {
		padding: 6vw;
		height: 100%;
		width: 100%;
	}

	.container {
		margin-top: 10vw;
	}

	h1.logo {
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

	a {
		&.options {
			margin-left: auto;
		}
	}
</style>
