<script lang="ts">
	import { capitalize, setTheme } from '$lib';
	import type { themes } from '$lib/models';
	import { createFloatingActions } from 'svelte-floating-ui';
	import { offset, shift, flip } from 'svelte-floating-ui/core';

	export let theme: themes;
	export let classes: string[] = [];
	export let styles: string[] = [];

	// TODO: make arrow work nicely
	// svelte-floating-ui itself seems wanky, some wrong types
	// and such. Might need to use floating-ui directly.
	let showTooltip = false;
	const [floatingRef, floatingContent] = createFloatingActions({
		strategy: 'absolute',
		placement: 'top',
		middleware: [offset(6), flip(), shift({ padding: 5 })],
	});
</script>

<button
	class="mr-3 mt-6 inline-block h-6 w-6 cursor-pointer rounded-sm pl-[2px] pt-1 text-left font-medium {classes.join(
		' ',
	)}"
	style="border: 2px solid #46546b; {styles.join(' ')}"
	tabindex="0"
	on:mouseenter={() => (showTooltip = true)}
	on:mouseleave={() => (showTooltip = false)}
	use:floatingRef
	on:click={() => setTheme(theme)}
>
	A
	{#if showTooltip}
		<div
			class="absolute inline rounded bg-gray-800 px-2 py-3 text-sm text-white"
			use:floatingContent
		>
			{theme === 'sys' ? 'System Theme' : capitalize(theme)}
		</div>
	{/if}
</button>
