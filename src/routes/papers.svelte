<style lang="scss">
	@import "../styles/variables.scss";

	.papers-container
	{
		flex: 1;
		min-height: 0;
		overflow-y: scroll;

		padding: 1em 1.5em;
	}

	.paper-listing
	{
		display: flex;
		flex-flow: column nowrap;

		&:not(:first-child) { padding-top: 0.5em; }
		&:not(:last-child) { padding-bottom: 0.5em; }
	}

	.title
	{
		font-size: 14pt;

		a
		{
			font-weight: 500;

			// Can't underline SVG, so hack it in
			text-decoration: none;
			border-bottom: 1px solid #0005;
		}
	}

	.coauthors,
	.abstract
	{
		width: 93%;
		align-self: center;
		
		padding: 0.375em 0 0;
	}

	.coauthors { font-style: italic; }
	.abstract { font-size: 10pt; }

	@media (max-width: $mobileWidth)
	{
		.title { font-size: 11pt };
		.coauthors { font-size: 10pt; }
	}
</style>

<script context="module">
	export function preload({ params, query }) 
	{
		return this.fetch("papers.json")
				.then(r => r.json())
				.then(papers => { return { papers }; });
	}
</script>

<script>
	import Title from "../components/Title.svelte";
	import MoreLessText from "../components/MoreLessText.svelte";

	export let papers = [];

	function formatCoauthorList(coauthors)
	{
		switch (coauthors.length)
		{
			case 0:
				return "";
			case 1:
				return coauthors[0];
			case 2:
				return `${coauthors[0]} and ${coauthors[1]}`;
			default:
				return `${coauthors.slice(0, -1).join(", ")}, and ${coauthors.slice(-1)[0]}`;
		}
	}
</script>

<svelte:head>
	<title>Papers | Stephen Randall</title>
</svelte:head>

<Title title={"Papers I helped write."}/>

<div class="papers-container theme-element">
	{#each papers as paper}
		<div class="paper-listing mathjax-content">
			<span class="title"><a href="https://inspirehep.net/literature/{paper.inspireID}">{paper.title}</a> ({paper.year})</span>
			{#if paper.coauthors.length > 0}
				<span class="coauthors">with {formatCoauthorList(paper.coauthors)}</span>
			{/if}
			<div class="abstract">
				<MoreLessText text={`\"${paper.abstract}\"`}/>
			</div>
		</div>
	{/each}
</div>