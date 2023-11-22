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
			class="fixed left-0 right-0 top-0 flex h-16 flex-row items-center justify-around bg-[#2b2d42] dark:bg-header"
			style="transition: background 0.8s ease 0s, top 0.5s ease 0s;"
		>
			<!-- Logo section -->
			<div class="flex basis-1/3 justify-center">
				<a href={isAuthed ? '/home' : '/'}
					><img
						src="https://anilist.co/img/icons/icon.svg"
						alt="anilist-logo"
						class="h-12 basis-1/3"
					/></a
				>
			</div>
			<!-- Links section -->
			<nav class="flex basis-1/4 flex-row justify-around">
				<a href="/home" class="p1 capitalize">home</a>
				{#if isAuthed && username}
					<a href="/user/${username}" class="p1 capitalize">Profile</a>
					<a href="/user/${username}/animelist" class="p1 capitalize">Anime List</a>
					<a href="/user/${username}/mangalist" class="p1 capitalize">Manga List</a>
				{/if}
				<!-- TODO: hover browse tooltip -->
				<a href="/search/anime" class="p1 browse capitalize">Browse</a>
				<a href="/forum/overview" class="p1 capitalize">Forum</a>
			</nav>
			<!-- If user authed, show search icon and user avatar, else show login button -->
			<div class="flex basis-1/3 flex-row justify-center">
				{#if isAuthed}
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
				{:else}
					<a
						href="/"
						class="rounded bg-blue-600 px-6 py-2 text-base capitalize text-white transition-all duration-75 ease-in-out hover:scale-110 hover:shadow-[0px_0px_5px_cyan] hover:shadow-sky-500"
						>Login</a
					>
				{/if}
			</div>
		</header>
	{/if}
</div>
