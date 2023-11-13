<script lang="ts">
	import { readable } from "svelte/store";

    export let isAuthed = false;
    export let user = undefined as { username: string };
    let menuItems: { name: string; path: string; log?: boolean }[] = [
		{ name: 'Home', path: '/home' },
		{ name: 'Profile', path: `/user/${user?.username}`, log: true },
		{ name: 'Anime List', path: `/user/${user?.username}/animelist`, log: true },
		{ name: 'Manga List', path: `/user/${user?.username}/mangalist`, log: true },
		{ name: 'Browse', path: '/search/anime' },
		{ name: 'Forum', path: '/forum/overview' }
	];
</script>

<div class="bg-"></div>