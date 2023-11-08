<script>
	const user = 'Yakiyo';
	const menuItems = [
		{ name: 'Home', path: '/' },
		{ name: 'Profile', path: `/user/${user}` },
		{ name: 'Anime List', path: `/user/${user}/animelist` },
		{ name: 'Manga List', path: `/user/${user}/mangalist` },
		{ name: 'Browse', path: '/search/anime' },
		{ name: 'Forum', path: '/forum/overview' }
	];
</script>

<nav>
	<div class="nav-item">
		<a href="/"><img src="https://anilist.co/img/icons/icon.svg" alt="anilist-logo" /></a>
	</div>
	<div class="nav-item menu">
		{#each menuItems as item}
			<a href={item.path} class={item.name === "Browse" ? "browse" : ""}>{item.name}</a>
		{/each}
	</div>
	<div class="nav-item">Search and User</div>
</nav>
<slot />

<style>
	nav {
		background-color: #152232;
		color: #a0b1c5;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		top: 0;
		padding: 0;
		margin: 0;
		width: 100%;
		font-size: 14px;
	}
	nav img {
		height: 50px;
	}

	.nav-item {
		flex-grow: 1;
		text-align: center;
	}

	.menu {
		flex-grow: 3;
	}

	.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 60%;
	}

	.menu > a {
		padding: 2%;
		text-decoration: none;
		color: #a0b1c5;
	}

	:global(body) {
		background-color: #0b1622;
	}
</style>
