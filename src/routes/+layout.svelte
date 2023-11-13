<script>
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';

	import '../app.css';
	/**
	 * @type import('./$types').PageData
	 */
	export let data;
	let isAuthed = data.isAuthed;
</script>

<div class="flex flex-col min-h-screen">
	<Header isAuthed={$isAuthed} user={undefined}/>
	
	<main class="min-h-screen">
		<slot />
	</main>
	
	<Footer />
</div>
