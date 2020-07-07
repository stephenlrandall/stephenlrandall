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

			display: flex;
			flex-flow: column nowrap;
		}
	}
</style>

<script>
	import { onMount, afterUpdate } from "svelte";
	import NavBar from "../components/NavBar.svelte";
	import Footer from "../components/Footer.svelte";

	export let segment;

	const links = ["home", "papers", "projects", "sarah"];
	let GlobalMathJax;

	// Custom MathJax typsetting
	function typeset()
	{
		if (!GlobalMathJax) return;

		// Iterate over the `mathjax-content` elements that
		// haven't been rendered yet
		document.querySelectorAll(".mathjax-content:not(.mathjax-rendered)")
			.forEach(function(e)
			{
				GlobalMathJax.typesetPromise([e]).then(function()
				{
					e.classList.add("mathjax-rendered");
				});
			});
	}

	onMount(function()
	{
		// Ideally we would allow MathJax to start loading while the document
		// itself loads, which would speed up the time to first MathJax render.
		// However, putting the script in `<svelte:head>` causes issues with
		// MathJax (infinite recursion, see
		//   -- https://github.com/sveltejs/svelte/issues/3798
		// for a related issue with a different library). This solution gives
		// a small window where the original document is rendered and MathJax
		// is loading, which leads to content jumping once MathJax completes
		// its first render. To avoid this, we use a fade-in animation to mask
		// the content jumping.
		const mathJaxScript = document.createElement("script");
		mathJaxScript.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
		document.head.append(mathJaxScript);

		mathJaxScript.onload = function()
		{
			GlobalMathJax = MathJax;
			typeset();
		};
	});

	afterUpdate(typeset);
</script>

<svelte:head>
	<script>
		// MathJax initialization
		MathJax =
		{
			// Suppress the initial typset
			startup: { pageReady: () => {} },
			tex: { inlineMath: [["$", "$"], ["\\(", "\\)"]] },
			svg: { fontCache: "global" }
		};
	</script>
	<script src="https://kit.fontawesome.com/e2e4175a99.js" crossorigin="anonymous"></script>
</svelte:head>

<NavBar {segment} {links}/>

<main>
	<div class="content-container">
		<slot></slot>
	</div>
	<Footer/>
</main>