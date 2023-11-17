```svelte
<script>
	// Site themes, not supporting high contrast cz idk how to implement
	// three different themes using tailwind
	const themes = ['Default', 'Dark', /**'High Contrast' ,*/ 'System Theme'];

	const links = [
		[
			{ name: 'Logout', url: '#' },
			{ name: 'Donate', url: '/donate' },
			{ name: 'AniList.co', url: 'https://anilist.co' },
			{ name: 'AniChar', url: 'https://anichart.net/' },
		],
		[
			{ name: 'Apps', url: '/apps' },
			{ name: 'Site Stats', url: '/site-sites' },
			{ name: 'Recommendations', url: '/recommendations' },
			{ name: 'API', url: 'https://github.com/AniList/ApiV2-GraphQL-Docs' },
		],
		/**
		 * TODO: Add icons in front of the links
		 */
		[
			{ name: 'Discord', url: 'https://discord.gg/TF428cr' },
			{ name: 'Twitter', url: 'https://twitter.com/AniListco' },
			{ name: 'Facebook', url: 'https://www.facebook.com/AniListco' },
			{ name: 'Github', url: 'https://github.com/AniList' },
		],
		[
			{ name: 'Add Data', url: 'https://submission-manual.anilist.co/' },
			{ name: 'Moderators', url: 'https://anilist.co/moderators' },
			{ name: 'Contact', url: 'mailto:contact@anilist.co' },
			{ name: 'Site Map.xml', url: 'https://anilist.co/sitemap/index.xml' },
		],
	];
</script>

<footer class="bg-footer flex justify-around text-base flex-col lg:flex-row">
	<div class="p-12 grow flex flex-col justify-center">
		<span class="text-sky-400">Site Themes</span>
		<div class="flex flex-row">
			<div
				class="h-6 w-6 m-1 border-2 border-solid border-gray-500 text-center flex justify-center items-center bg-white text-black"
			>
				<p>A</p>
			</div>
			<div
				class="h-6 w-6 m-1 border-2 border-solid border-gray-500 text-center flex justify-center items-center bg-black text-white"
			>
				<p>A</p>
			</div>
			<div
				class="h-6 w-6 m-1 border-2 border-solid border-gray-500 text-center flex justify-center items-center bg-gray-500"
			>
				<p>A</p>
			</div>
			<!-- TODO: add high contrast theme here someday -->
		</div>
	</div>
	<div class="flex flex-col lg:flex-row grow-[2] justify-center">
		{#each links as link}
			<div class="p-12">
				<ul>
					{#each link as item}
						<li><a href={item.url}>{item.name}</a></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</footer>
```
