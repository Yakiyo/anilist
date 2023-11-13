<script>
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';

	import '../app.css';
	import { fetchUser } from '$lib/store';
	/**
	 * @type import('./$types').PageData
	 */
	export let data;
	let username = data.user?.name;
	let isAuthed = data.isAuthed;
</script>

<div class="flex flex-col min-h-screen">
	<Header isAuthed={$isAuthed} {username} />

	<main class="min-h-screen">
		<slot />
	</main>

	<Footer />
</div>
