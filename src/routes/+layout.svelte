<script>
	const user = 'Yakiyo';
	const menuItems = [
		{ name: 'Home', path: '/home' },
		{ name: 'Profile', path: `/user/${user}` },
		{ name: 'Anime List', path: `/user/${user}/animelist` },
		{ name: 'Manga List', path: `/user/${user}/mangalist` },
		{ name: 'Browse', path: '/search/anime' },
		{ name: 'Forum', path: '/forum/overview' }
	];
	const themes = ['Default', 'Dark', 'High Contrast', 'System Theme'];
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
<slot />

<!-- Footer section -->
<footer>
	<div class="themes">
		<span class="text-sky">Site Theme</span>
		<ul>
			{#each themes as theme}
				<li>{theme}</li>
			{/each}
			</ul>
	</div>
	<div class="links" />
	<div class="links" />
	<div class="links" />
</footer>

<style>
	/* general styles */
	:global(body) {
		background-color: #0b1622;
		font-family: 'Overpass', 'Arial';
		font-size: 14px;
	}

	/* navbar styles */
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #152232;
		color: #a0b1c5;
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

	/* footer styles */
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #11161d;
		min-height: 70px;
		display: flex;
		justify-content: space-evenly;
	}

	footer div {
		padding: 30px;
	}
</style>
