<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
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
		min-height: 100vh;
		margin: 0;
	}

	main {
		min-height: 100vh;
	}
</style>
