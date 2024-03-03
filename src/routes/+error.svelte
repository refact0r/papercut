<script>
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>{$page.error.message}</title>
	<meta name="description" content={$page.status + ' ' + $page.error.message} />
</svelte:head>

<a href="/"><h1><span class="paper">paper</span><span class="slash">/</span>cut</h1></a>

<div class="desc">
	<h3>{$page.status}</h3>
	<p>{$page.error.message}</p>
</div>

<style lang="scss">
	h1 {
		font-size: 8rem;
		letter-spacing: -0.015em;
		margin: 0;
		padding-left: 10vh;
		padding-top: 4vh;

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

	.desc {
		padding: 0rem 10rem;
	}
</style>
