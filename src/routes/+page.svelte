<script>
	import { enhance } from '$app/forms';
	import IconSearch from '~icons/ph/magnifying-glass';
</script>

<svelte:head>
	<title>papercut</title>
	<meta name="description" content="papercut home page" />
</svelte:head>

<div class="content">
	<div class="container">
		<h1>paper<span class="slash">/</span>cut</h1>
		<form method="POST" action="/search" use:enhance>
			<input type="text" placeholder="search..." name="search" />
			<button type="submit" class="submit"><IconSearch /></button>
		</form>
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
		margin-left: 0.1ch;
		margin-top: 0.1ch;
	}
</style>
