<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style lang="scss" global>
	@import "../styles/global.scss";
</style>

<Nav {segment}/>

<main>
	<div class="content-container">
		<slot></slot>
	</div>
</main>