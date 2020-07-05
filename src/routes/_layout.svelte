<style lang="scss" global>
	@import "../styles/global.scss";

	main
	{
		@include centered-column;

		background: $gold;
		background: linear-gradient(0deg, $seafoam 0%, $gold 100%);

		width: 100%;
		height: calc(100% - #{$navHeight});

		.content-container
		{
			width: 80%;
			max-width: 860px;
			height: calc(100% - #{$footerHeight});
			min-height: 0;
			margin: 0 auto;
		}
	}
</style>

<script>
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;

	const links = ["home", "papers", "projects"];
</script>

<NavBar {segment} {links}/>

<main>
	<div class="content-container">
		<slot></slot>
	</div>
	<Footer/>
</main>