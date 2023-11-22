<script lang="ts">
	const features: { title: string; desc: string; icon: string }[] = [
		{
			title: 'Discover your obsessions',
			desc: 'What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.',
			icon: '/icons/landing/stats.svg',
		},
		{
			title: 'Bring AniList anywhere',
			desc: 'Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.',
			icon: '/icons/landing/apps.svg',
		},
		{
			title: 'Join the conversation',
			desc: 'Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.',
			icon: '/icons/landing/socials.svg',
		},
		{
			title: 'Tweak it to your liking',
			desc: 'Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.',
			icon: '/icons/landing/custom.svg',
		},
	];
</script>

<div class="flex w-full flex-col items-center justify-center">
	<!-- Landing section -->
	<div
		class="mx-0 my-auto mb-5 flex max-w-[1100px] flex-col items-center justify-center rounded-[20px] bg-[#0a1625] px-20 py-[60px]"
	>
		<h1 class="p-3 text-3xl font-bold text-[#f0f3f6]">The next-generation anime platform</h1>
		<h2 class="mx-0 my-auto max-w-[370px] p-3 text-center text-lg text-[#acd5f2]">
			Track, share and discover your favourite anime and manga with Anilist
		</h2>
		<!-- Features section -->
		<div class="grid grid-cols-4 gap-16">
			{#each features as feature}
				<div>
					<img src={feature.icon} alt="feature-icon" />
					<div>
						<h3>{feature.title}</h3>
						<div>{feature.desc}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div>Search</div>
</div>
