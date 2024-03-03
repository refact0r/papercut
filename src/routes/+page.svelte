<svelte:head>
	<title>papercut</title>
	<meta name="description" content="papercut home page" />
</svelte:head>

<div class="content">
	<div class="container">
		<h1>paper<span class="slash">/</span>cut</h1>
		<div class="searchbar">
			<form>
				<input type="text" placeholder="Search..." name="search" />
				<button type="submit" id="submit"></button>
			</form>
		</div>
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
