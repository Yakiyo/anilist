<script lang="ts">
	import { setTheme } from '$lib';
	import type { themes } from '$lib/models';
	export let theme: themes;
	export let classes: string[] = [];
	export let styles: string[] = [];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="cursor-pointer inline-block font-medium h-6 w-6 rounded-sm mr-3 pl-[2px] pt-1 {classes.join(
		' ',
	)}"
	style="border: 2px solid #46546b; {styles.join(' ')}"
	role="button"
	tabindex="0"
	on:click={() => setTheme(theme)}
>
	A
</div>
