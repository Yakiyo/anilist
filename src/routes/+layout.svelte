<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import './styles.css'
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		min-height: 100vh;
	}
</style>
