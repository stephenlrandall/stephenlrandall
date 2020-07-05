<style lang="scss">
	@import "../styles/variables.scss";
	
	nav
	{
		display: flex;
		justify-content: flex-start;
		height: $navHeight;
		background-color: $deep-violet;
	}
</style>

<script>
	import { setContext } from 'svelte';
	import NavLink from './NavLink.svelte';

	export let segment;
	export let links;
</script>

<nav>
	{#each links as link}
		<NavLink {segment} {link}/>
	{/each}
</nav>
