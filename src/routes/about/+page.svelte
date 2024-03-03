<svelte:head>
	<title>papercut</title>
	<meta name="description" content="papercut home page" />
</svelte:head>

<h1>papercut</h1>
<div class="searchbar">
	<form>
		<input type="text" placeholder="Search..." name="search" />
		<button type="submit" id="submit"><i class="fa fa-search"></i></button>
	</form>
	<p>Type in your prompt here and click the search button to the right end of the search bar.</p>
</div>
<div class="desc">
	<h3>What is Scholarly?</h3>
	<p>
		Scholarly is a web application designed to help those in academia to find academic sources most
		relevant to them, in a more fun and streamlined manner.
	</p>
	<h3>How do I use Scholarly?</h3>
	<p>
		To use Scholarly, simply search with a prompt in the search bar, and our site will produce a
		list of sources relevant to your prompt. From there, you can read the synopsis of the sources
		provided by our site by hovering over the different sources, and adjust the sources available to
		you by keeping or rejecting sources within the list.
	</p>
	<h3>Why should I use Scholarly?</h3>
	<p>
		With our site, gone are the days of boredom and wasted time on finding relevant and good quality
		articles on Jstor. Spend your time more productively, using Scholarly.
	</p>
</div>
<div class="footer">
	<h3>Scholarly is an app created for the HackPNW 2024 Winter Hackathon</h3>
</div>

<style lang="scss">
	.searchbar {
		padding: 2rem 0rem 1rem 0rem;
		background-color: rgba(0, 0, 0, 0.25);
	}
	input[type='text'] {
		outline: none;
		height: 2rem;
		border-radius: 4rem;
		padding: 1rem;
		font-size: 2rem;
		border: none;
		width: 60%;
	}
	#submit {
		position: absolute;
		height: 4rem;
		width: 4rem;
		padding: 1rem;
		border-radius: 2rem;
		font-size: 1.25rem;
		background-color: hsla(0, 0%, 100%, 0);
		border: none;
		transition: 0.3s ease-in-out;
		right: 19.5%;
	}
	#submit:hover {
		font-size: 1.75rem;
		transform: rotate(360deg);
		cursor: pointer;
	}
	.desc {
		padding: 1rem 10rem;
	}
	.footer {
		background-color: hsla(0%, 0%, 0%, 0.25);
		padding: 2rem;
	}
</style>
