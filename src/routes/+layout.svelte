<nav>
	<a href="/"><img src="https://anilist.co/img/icons/icon.svg" alt="anilist-logo" /></a>
	<span>Menus</span>
	<span>Search and User</span>
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
	}
	nav img {
		height: 50px;
	}
	:global(body) {
		background-color: #0b1622;
	}
</style>
