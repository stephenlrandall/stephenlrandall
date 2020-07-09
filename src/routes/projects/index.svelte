<style>
	.more-label
	{
		display: flex;
		justify-content: center;

		padding-top: 2em;
	}
</style>

<script context="module">
	export function preload({ params, query }) 
	{
		return this.fetch("data/projects.json")
				.then(r => r.json())
				.then(projects => { return { projects }; });
	}
</script>

<script>
	import Title from "../../components/Title.svelte";
	import Photo from "../../components/Photo.svelte";

	export let projects;
</script>

<Title title={"Things I work(ed) on."} headTitle={"Projects"}/>

<div class="gallery">
	{#each projects as project}
		<Photo {...project}/>
	{/each}
</div>

<div class="more-label">
	<span>and more!</span>
</div>