<script>
	import Footer from '../components/_Footer.svelte';
	import Header from '../components/_Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	:global(body) {
		background-color: #0b1622;
		font-family: 'Overpass', 'Arial';
		font-size: 14px;
		color: #a0b1c5;
		/* min-height: 100vh; */
		margin: 0;
	}
	
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		justify-content: stretch;
	}
</style>
