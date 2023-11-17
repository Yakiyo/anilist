<script lang="ts">
	import { setTheme } from '$lib';

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

<footer class="bg-footer font-semibold mt-5 py-12 px-8 flex justify-center">
	<!-- the container -->
	<div class="flex text-left w-full xl:max-w-[1140px]">
		<!-- Theme selector -->
		<div>
			<h2 class="font-bold text-sky-400 pb-4 text-lg">Site Theme</h2>
			<!-- Default -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="cursor-pointer inline-block font-medium h-6 w-6 rounded-sm mr-3 pl-[2px] pt-1"
				style="border: 2px solid #46546b; color: #2e3c48; background: #edf1f5;"
				role="button"
				tabindex="0"
				on:click={() => setTheme('default')}
			>
				A
			</div>
			<!-- Dark -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="cursor-pointer inline-block font-medium h-6 w-6 rounded-sm mr-3 pl-[2px] pt-1 text-white bg-footer"
				style="border: 2px solid #46546b;"
				role="button"
				tabindex="0"
				on:click={() => setTheme('dark')}
			>
				A
			</div>
			<!-- System Preference -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="cursor-pointer inline-block font-medium h-6 w-6 rounded-sm mr-3 pl-[2px] pt-1 text-white"
				style="border: 2px solid #46546b; background: linear-gradient(45deg,#11161d 55%,#edf1f5 0);"
				role="button"
				tabindex="0"
				on:click={() => setTheme('sys')}
			>
				A
			</div>
		</div>
		<!-- Links -->
		<div />
	</div>
</footer>
