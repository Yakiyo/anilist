<script lang="ts">
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let isAuthed = false;
	export let username: string | undefined = undefined;
	let show = true;
	let lastScrollTop = 0;

	onMount(() => {
		window.onscrollend = () => {
			const st = window.scrollY || document.documentElement.scrollTop;
			show = st > lastScrollTop ? false : true;
			lastScrollTop = st;
		};
	});
</script>

<!-- This div remains as a flex item to the main body -->
<div class="h-16">
	<!-- The header item contains the actual content,
	it has position fixed and [dis]appears based on user's scrolling -->
	{#if show}
		<header
			transition:slide={{ delay: 250, duration: 1000, easing: quintOut, axis: 'y' }}
			class="bg-header flex flex-row fixed top-0 right-0 left-0 h-16 justify-around items-center"
		>
			<div class="basis-1/3 flex justify-center">
				<a href={isAuthed ? '/home' : '/'}
					><img
						src="https://anilist.co/img/icons/icon.svg"
						alt="anilist-logo"
						class="h-12 basis-1/3"
					/></a
				>
			</div>
			<nav class="flex flex-row justify-around basis-1/4">
				<a href="/home" class="capitalize p1">home</a>
				{#if isAuthed && username}
					<a href="/user/${username}" class="capitalize p1">Profile</a>
					<a href="/user/${username}/animelist" class="capitalize p1">Anime List</a>
					<a href="/user/${username}/mangalist" class="capitalize p1">Manga List</a>
				{/if}
				<!-- TODO: hover browse tooltip -->
				<a href="/search/anime" class="capitalize p1 browse">Browse</a>
				<a href="/forum/overview" class="capitalize p1">Forum</a>
			</nav>
			<div class="basis-1/3 flex flex-row justify-center">
				<svg
					height="32px"
					version="1.1"
					viewBox="0 0 32 32"
					width="32px"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					><title /><desc /><defs /><g
						fill="none"
						fill-rule="evenodd"
						id="Page-1"
						stroke="none"
						stroke-width="1"
						><g fill="#929292" id="icon-111-search"
							><path
								d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"
								id="search"
							/></g
						></g
					></svg
				>
			</div>
		</header>
	{/if}
</div>
