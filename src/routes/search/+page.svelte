<script>
	export let data;

	console.log(data.results);
</script>

<svelte:head>
	<title>papercut results</title>
	<meta name="description" content="Search results" />
</svelte:head>

<div class="content">
	{#each data.results as result}
		<div class="container">
			<h1>{result.title}</h1>
		</div>
	{/each}
</div>

<style lang="scss">
</style>
