<script>
	const themes = ['Default', 'Dark', 'High Contrast', 'System Theme'];
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
	<div class="links" />
	<div class="links" />
	<div class="links" />
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #11161d;
		min-height: 70px;
		display: flex;
		justify-content: space-evenly;
		font-size: 17px;
	}

	footer div {
		padding: 30px;
	}

	.themes ul {
		list-style-type: none;
		padding: 0;
	}

	.themes li {
		float: left;
		padding: 4px;
	}

	.text-sky {
		color: rgb(73, 212, 247);
	}
</style>
