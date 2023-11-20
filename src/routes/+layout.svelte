<script>
	import '../app.css';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import { page } from '$app/stores';
	import { pageTitle } from '$lib';

	let title = pageTitle($page.url.pathname);
	page.subscribe((v) => (title = pageTitle(v.url.pathname)));
	export let data;
	let username = data.user?.name;
	let isAuthed = data.isAuthed;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header isAuthed={$isAuthed} {username} />

	<main class="min-h-screen">
		<slot />
	</main>

	<Footer />
</div>
