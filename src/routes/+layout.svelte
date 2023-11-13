<script>
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import { pageTitle } from '$lib';

	$: title = pageTitle($page.url.pathname);
	export let data;
	let username = data.user?.name;
	let isAuthed = data.isAuthed;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header isAuthed={$isAuthed} {username} />

	<main class="min-h-screen">
		<slot />
	</main>

	<Footer />
</div>
