<script>
	import Footer from '../components/Footer.svelte';

	const user = 'Yakiyo';
	const menuItems = [
		{ name: 'Home', path: '/home' },
		{ name: 'Profile', path: `/user/${user}` },
		{ name: 'Anime List', path: `/user/${user}/animelist` },
		{ name: 'Manga List', path: `/user/${user}/mangalist` },
		{ name: 'Browse', path: '/search/anime' },
		{ name: 'Forum', path: '/forum/overview' }
	];
</script>

<!-- Top nav bar section -->
<nav>
	<div class="nav-item">
		<a href="/home"><img src="https://anilist.co/img/icons/icon.svg" alt="anilist-logo" /></a>
	</div>
	<div class="nav-item menu">
		{#each menuItems as item}
			<a href={item.path} class={item.name === 'Browse' ? 'browse' : ''}>{item.name}</a>
		{/each}
	</div>
	<div class="nav-item">Search and User</div>
</nav>

<!-- Page content -->
<div id="content">
	<slot />
</div>

<!-- Footer section -->
<Footer />

<style>
	/* general styles */
	:global(body) {
		background-color: #0b1622;
		font-family: 'Overpass', 'Arial';
		font-size: 14px;
		color: #a0b1c5;
	}

	/* navbar styles */
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #152232;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		width: 100%;
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
		font-weight: bold;
		color: #a0b1c5;
	}

	.menu > a:hover {
		color: white;
	}

	#content {
		min-height: 200px;
	}
</style>
