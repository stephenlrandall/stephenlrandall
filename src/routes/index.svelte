<style lang="scss">
	@import "../styles/variables.scss";

	.sarah-link
	{
		color: rgb(221, 63, 161);
		text-shadow: 1px 1px 1px #fff6;
		transition: color 0.2s ease-out, text-shadow 0.2s ease-out;

		&:hover
		{
			color: rgb(255, 91, 192); // rgb(255, 92, 241);
			text-shadow: 1px 1px 1px #fff9;
		}
	}

	$heartSize: 1.35em;
	$borderSize: calc(#{$heartSize} + 0.15em);

	.heart-container
	{
		color: red;
		position: relative;

		.heart-border
		{
			color: #fff6;
			font-size: $borderSize;
			z-index: 2;
		}

		.heart-background
		{
			font-size: $heartSize;
			z-index: 2;
		}

		.heart-pulse-1,
		.heart-pulse-2
		{
			opacity: 0;
			font-size: $borderSize;
			z-index: 1;

			animation: 2s ease-out infinite heart-pulse;
		}

		.heart-pulse-2 { animation-delay: 0.52s; }
	}

	@keyframes heart-pulse
	{
		0% { color: #fff6; transform: scale(0.8, 0.8); opacity: 0.0; }
		35% { color: red; transform: scale(1, 1); opacity: 1.0; }
		85% { transform: scale(1.5, 1.5); opacity: 0.0; }
	}
</style>

<script>
	import Title from "../components/Title.svelte";

	const algebra = "$$\\{ D_\\alpha, \\overline{D}_{\\dot{\\alpha}} \\} = - 2i \\partial_{\\alpha \\dot{\\alpha}}$$";
	const chirality = "\\(\\overline{D}_{\\dot{\\alpha}} \\Phi = 0\\)";
</script>

<svelte:head>
	<title>Home | Stephen Randall</title>
</svelte:head>

<Title title={"Stephen Randall"} subtitle={"physicist. developer. husband."}/>

<div class="mathjax-content">
	<p><strong>Imagine there was cool stuff here</strong>, like how the supersymmetry algebra {algebra} implies that a chiral superfield \(\Phi\) satisfying {chirality} must be complex.</p>
</div>

<p>Or how the unique elements of an array <code>arr</code> are given by <code>arr.uniq</code>, <code>[...new Set(arr)]</code>, and <code>DeleteDuplicates[arr]</code>.</p>

<p>Or how I got married to the <a class="sarah-link" href="sarah">most amazing person</a> on June 22nd, 2018. <span class="heart-container fa-stack"><i class="far fa-heart fa-stack-1x heart-border"></i><i class="fas fa-heart fa-stack-1x heart-background"></i><i class="far fa-heart fa-stack-1x heart-pulse-1"></i><i class="far fa-heart fa-stack-1x heart-pulse-2"></i></span></p>