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

<div class="mt-[50px] flex w-full flex-col items-center justify-center">
	<!-- Landing section -->
	<div
		class="mx-0 my-auto mb-5 flex max-w-[1100px] flex-col items-center justify-center rounded-[20px] bg-[#0a1625] px-20 py-[60px]"
	>
		<h1 class="p-3 text-3xl font-bold text-[#f0f3f6]">The next-generation anime platform</h1>
		<h2 class="mx-0 my-auto max-w-[370px] p-3 text-center text-lg text-[#acd5f2]">
			Track, share and discover your favourite anime and manga with Anilist
		</h2>
		<!-- Features section -->
		<div class="grid grid-cols-1 gap-x-[60px] gap-y-[70px] p-6 md:grid-cols-2">
			{#each features as feature}
				<!-- feature card -->
				<div
					class="grid grid-cols-2 gap-7 py-3 md:gap-[36px]"
					style="grid-template-columns: 80px auto;"
				>
					<img class="max-h-[96px]" src={feature.icon} alt="feature-icon" />
					<div>
						<h3 class="text-base font-semibold text-[#ecf6fe]">{feature.title}</h3>
						<div class="text-[#acd5f2]">{feature.desc}</div>
					</div>
				</div>
			{/each}
		</div>
		<!-- Join button -->
		<a href="/login" class="items-center bg-[#3577ff] rounded-[30px] mb-0 pb-0 h-12 w-[200px]">
			<div>Join Now</div>
			<div class="rounded-full"></div>
		</a>
	</div>
	<div>Search</div>
</div>
