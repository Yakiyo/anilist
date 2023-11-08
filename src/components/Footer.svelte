<script>
	const themes = ['Default', 'Dark', 'High Contrast', 'System Theme'];
	const links = [
		[
			{ name: 'Logout', url: '#' },
			{ name: 'Donate', url: '/donate' },
			{ name: 'AniList.co', url: 'https://anilist.co' },
			{ name: 'AniChar', url: 'https://anichart.net/' }
		],
		[
			{ name: 'Apps', url: '/apps' },
			{ name: 'Site Stats', url: '/site-sites' },
			{ name: 'Recommendations', url: '/recommendations' },
			{ name: 'API', url: 'https://github.com/AniList/ApiV2-GraphQL-Docs' }
		],
		[
			{ name: 'Discord', url: 'https://discord.gg/TF428cr' },
			{ name: 'Twitter', url: 'https://twitter.com/AniListco' },
			{ name: 'Facebook', url: 'https://www.facebook.com/AniListco' },
			{ name: 'Github', url: 'https://github.com/AniList' }
		],
		[
			{ name: 'Add Data', url: 'https://submission-manual.anilist.co/' },
			{ name: 'Moderators', url: 'https://anilist.co/moderators' },
			{ name: 'Contact', url: 'mailto:contact@anilist.co' },
			{ name: 'Site Map.xml', url: 'https://anilist.co/sitemap/index.xml' }
		]
	];
</script>

<footer>
	<div class="themes">
		<span class="text-sky">Site Theme</span>
		<ul>
			{#each themes as theme}
				<li class={theme}>A</li>
			{/each}
		</ul>
	</div>
	{#each links as link}
		<div class="links">
			<ul>
				{#each link as item}
					<li><a href={item.url}>{item.name}</a></li>
				{/each}
			</ul>
		</div>
	{/each}
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #11161d;
		min-height: 70px;
		display: flex;
		justify-content: space-evenly;
		font-size: 17px;
	}

	footer div {
		padding: 30px;
	}

    footer a {
        text-decoration: none;
    }

	ul {
		list-style-type: none;
		padding: 0;
	}

	.themes li {
		float: left;
		padding: 4px;
	}

	.text-sky {
		color: rgb(73, 212, 247);
	}
</style>
