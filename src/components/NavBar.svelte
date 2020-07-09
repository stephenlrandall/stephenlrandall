<style lang="scss">
	@import "../styles/variables.scss";
	
	$side-padding: 1.75em;
	@media (max-width: $mobile-width) { $side-padding: 0.75em; }

	nav
	{
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		width: calc(100% - 2 * #{$side-padding});

		display: flex;
		justify-content: flex-start;
		height: $nav-height;
		background-color: $deep-violet;

		padding: 0 $side-padding;
	}
</style>

<script>
	import { setContext } from "svelte";
	import NavLink from "./NavLink.svelte";

	export let segment;
	export let links;
</script>

<nav>
	{#each links as link}
		<NavLink {segment} {link}/>
	{/each}
</nav>
