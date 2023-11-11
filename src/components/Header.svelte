<script lang="ts">
	const user = 'Yakiyo';
	const userAvatar =
		'https://s4.anilist.co/file/anilistcdn/user/avatar/large/b763771-rOG6N4d3P5lq.png';
	const menuItems: { name: string; path: string; log?: boolean }[] = [
		{ name: 'Home', path: '/home' },
		{ name: 'Profile', path: `/user/${user}`, log: true },
		{ name: 'Anime List', path: `/user/${user}/animelist`, log: true },
		{ name: 'Manga List', path: `/user/${user}/mangalist`, log: true },
		{ name: 'Browse', path: '/search/anime' },
		{ name: 'Forum', path: '/forum/overview' }
	];

	let unread = 2;
</script>

<header>
	<div class="centered">
		<a href="/home"
			><img src="https://anilist.co/img/icons/icon.svg" alt="anilist-logo" id="logo" /></a
		>
	</div>
	<nav>
		{#each menuItems as item}
			<a href={item.path} class={item.name === 'Browse' ? 'browse' : ''}>{item.name}</a>
		{/each}
	</nav>
	<div class="corner-right centered">
		<div>
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
		<div>
			<img
				height="42px"
				src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b763771-rOG6N4d3P5lq.png"
				alt="user-avatar"
			/>
		</div>
		{#if unread > 0}
			<span id="notif">{unread}</span>
		{/if}
	</div>
</header>

<style>
	header {
		background-color: #152232;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding-left: 30px;
		padding-right: 30px;
	}

	header > * {
		flex-grow: 2;
		padding-top: 8px;
		padding-bottom: 8px;
	}

	nav {
		flex-grow: 1;
		display: flex;
		justify-content: space-around;
	}

	nav > a {
		text-transform: capitalize;
		font-weight: 600;
	}

	.corner-right {
		display: flex;
	}

	.corner-right > * {
		padding-left: 8px;
		padding-right: 8px;
	}

	#notif {
		color: white;
		width: 13px;
		height: 25px;
		line-height: 25px;
		border-radius: 45%;
		text-align: center;
		background-color: rgb(238, 57, 57);
	}

	#logo {
		height: 50px;
	}
</style>
