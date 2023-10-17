<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	const items = [
		{
			name: 'site',
			ref: '/'
		},
		{
			name: 'github',
			ref: 'https://github.com/Yakiyo'
		}
	];
</script>

<NavBar {items}/>

<slot />
