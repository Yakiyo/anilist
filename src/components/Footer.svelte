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

	<div class="links-container">
		{#each links as link}
			<div class="links">
				<ul>
					{#each link as item}
						<li><a href={item.url}>{item.name}</a></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</footer>

<style>
	footer {
		position: sticky;
		top: 100vh;
		left: 0;
		right: 0;
		background-color: #11161d;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		font-size: 17px;
	}

	footer div {
		padding: 30px;
	}

	footer a {
		text-decoration: none;
	}

	footer > div {
		flex-grow: 1;
	}

	footer > div.themes {
		flex-grow: 2;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	.themes {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 70px;
	}

	.themes li {
		float: left;
		padding: 4px;
	}

	.links-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.links a {
		text-decoration: none;
		color: #a0b1c5;
		font-size: 16px;
	}

	.links a:hover {
		color: rgb(73, 212, 247);
	}

	.links > ul > li {
		padding-bottom: 15px;
	}

	.text-sky {
		color: rgb(73, 212, 247);
	}

	@media only screen and (max-width: 1037px) {
		/* For mobile phones: */
		footer,
		.links-container {
			flex-direction: column;
		}

		.themes {
			align-items: flex-start;
		}
	}
</style>
