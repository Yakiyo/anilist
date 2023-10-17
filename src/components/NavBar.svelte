<script>
	/**
	 * @type Record<string, string>[]
	 */
	export let items;
</script>

<ul>
	{#each items as item}
		<li><a href={item.ref}>{item.name}</a></li>
	{/each}
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		overflow: hidden;
	}

	li {
		float: left;
	}

	li a {
		display: block;
		padding: 8px;
		background-color: rgb(44, 46, 46);
		color: rgb(243, 243, 243);
	}
	li a:hover {
		background-color: black;
	}
</style>
