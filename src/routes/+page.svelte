<script>
	import IconSearch from '~icons/ph/magnifying-glass';

	let params = '';
</script>

<svelte:head>
	<title>papercut</title>
	<meta name="description" content="papercut home page" />
</svelte:head>

<div class="content">
	<div class="container">
		<h1>paper<span class="slash">/</span>cut</h1>
		<input type="text" placeholder="search..." bind:value={params} />
		<a class="submit" href={`/search?q=${params}`}><IconSearch /></a>
	</div>
</div>

<style lang="scss">
	.content {
		@include flex(column, center, center);

		height: 100%;
		width: 100%;
	}

	.slash {
		position: absolute;
		font-weight: 700;
		margin-left: 0.15ch;
		margin-top: 0.1ch;
	}
</style>
