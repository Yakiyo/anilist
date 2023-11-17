<script lang="ts">
	import {
		faDiscord,
		faTwitter,
		faFacebook,
		faGithub,
		type IconDefinition,
	} from '@fortawesome/free-brands-svg-icons';
	import Icon from 'svelte-fa';
	import { setTheme } from '$lib';

	const linksArray: {
		name: string;
		url: string;
		icon?: IconDefinition;
	}[][] = [
		[
			{ name: 'Logout', url: '#' },
			{ name: 'Donate', url: 'https://anilist.co/donate' },
			{ name: 'AniList.co', url: 'https://anilist.co' },
			{ name: 'AniChart', url: 'https://anichart.net/' },
		],
		[
			{ name: 'Apps', url: 'https://anilist.co/apps' },
			{ name: 'Site Stats', url: 'https://anilist.co/site-sites' },
			{ name: 'Recommendations', url: 'https://anilist.co/recommendations' },
			{ name: 'API', url: 'https://github.com/AniList/ApiV2-GraphQL-Docs' },
		],
		[
			{ name: 'Discord', url: 'https://discord.gg/TF428cr', icon: faDiscord },
			{ name: 'Twitter', url: 'https://twitter.com/AniListco', icon: faTwitter },
			{ name: 'Facebook', url: 'https://www.facebook.com/AniListco', icon: faFacebook },
			{ name: 'Github', url: 'https://github.com/AniList', icon: faGithub },
		],
		[
			{ name: 'Add Data', url: 'https://submission-manual.anilist.co/' },
			{ name: 'Moderators', url: 'https://anilist.co/moderators' },
			{ name: 'Contact', url: 'mailto:contact@anilist.co' },
			{ name: 'Site Map.xml', url: 'https://anilist.co/sitemap/index.xml' },
		],
	];
</script>

<footer class="bg-footer text-base font-semibold mt-5 py-12 px-8 flex justify-center">
	<!-- the container -->
	<div class="flex text-left w-full xl:max-w-[1140px] justify-between flex-col lg:flex-row">
		<!-- Theme selector -->
		<!-- TODO: show theme name on hover -->
		<div class="basis-1/4 my-8 mx-4 px-8 lg:mx-0 lg:px-0">
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
		<div class="flex flex-col lg:flex-row justify-around basis-1 grow my-8">
			{#each linksArray as links, i}
				<div class="{i === 2 ? 'grow' : ''} my-8">
					{#each links as link}
						<div class="mx-4 px-8 py-1">
							<a href={link.url}
								>{link.name}
								{#if link.icon}
									<Icon
										primaryColor="gray"
										class="inline"
										size="sm"
										style="height: 14px; width: 14px; display: inline;"
										icon={link.icon}
									/>
								{/if}</a
							>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</footer>
