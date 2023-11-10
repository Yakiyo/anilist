Made an attempt at making the navbar similar to al's but couldn't get it right.
Attempted code:
```svelte
<script>
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	let show = true;
	let lastScrollTop = 0;

	onMount(() => {
		window.onscrollend = () => {
			const st = window.scrollY || document.documentElement.scrollTop;
			show = st > lastScrollTop ? false : true;
			lastScrollTop = st;
		};
	});
</script>

{#if show}
	<header transition:slide={{ delay: 250, duration: 1000, easing: quintOut, axis: 'y' }} />
{/if} 
```