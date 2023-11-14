<script>
	// Site themes, not supporting high contrast cz idk how to implement
	// three different themes using tailwind
	const themes = ['Default', 'Dark' /**'High Contrast' */, , 'System Theme'];
</script>

<footer class="bg-footer flex justify-evenly flex-wrap text-base">
	<div>
		<span class="text-sky-400">Site Themes</span>
		<ul>
			{#each themes as theme}
				<li class={theme}>A</li>
			{/each}
		</ul>
	</div>
</footer>
