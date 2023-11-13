<script lang="ts">
	export let isAuthed = false;
	export let username: string | undefined = undefined;
	let menuItems: { name: string; path: string; log?: boolean }[] = [
		{ name: 'Home', path: '/home' },
		{ name: 'Profile', path: `/user/${username}`, log: true },
		{ name: 'Anime List', path: `/user/${username}/animelist`, log: true },
		{ name: 'Manga List', path: `/user/${username}/mangalist`, log: true },
		{ name: 'Browse', path: '/search/anime' },
		{ name: 'Forum', path: '/forum/overview' }
	];
</script>

<!-- This div remains as a flex item to the main body -->
<div>
	<!-- The header item contains the actual content,
	it has position fixed and [dis]appears based on user's scrolling -->
	<header class="bg-header border-s-red-200" />
</div>
