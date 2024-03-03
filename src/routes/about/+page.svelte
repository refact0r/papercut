<svelte:head>
	<title>about papercut</title>
	<meta name="description" content="papercut about page" />
</svelte:head>

<a href="/"><h1><span class="paper">paper</span><span class="slash">/</span>cut</h1></a>

<div class="desc">
	<h3>What is Papercut?</h3>
	<p>
		Papercut is a web application designed to help those in academia to find academic sources most
		relevant to them, in a more fun and streamlined manner.
	</p>
	<h3>How do I use Papercut?</h3>
	<p>
		To use Papercut, simply search with a prompt in the search bar, and our site will produce a list
		of sources relevant to your prompt. From there, you can read the synopsis of the sources
		provided by our site by hovering over the different sources, and adjust the sources available to
		you by keeping or rejecting sources within the list.
	</p>
	<h3>Why should I use Papercut?</h3>
	<p>
		With our site, gone are the days of boredom and wasted time on finding relevant and good quality
		articles on arXiv. Spend your time more productively, using Papercut.
	</p>
</div>
<div class="footer">
	<h3>Papercut is an app created by NicoNekoru, refact0r, shibest, and ben-6 for the HackPNW 2024 Spring Hackathon</h3>
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
	.footer {
		background-color: hsla(0, 0%, 0%, 0);
		padding: 2rem;
	}
</style>
