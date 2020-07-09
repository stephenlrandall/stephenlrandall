<script context="module">
    export async function preload({ params, query })
    {
		const res = await this.fetch(`sarah/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200)
			return { gallery: data };
		else
			this.error(res.status, data.message);
	}
</script>

<script>
	import Title from "../../components/Title.svelte";
	import Photo from "../../components/Photo.svelte";

	export let gallery;
	const title = gallery.slug.slice(0, 1).toUpperCase() + gallery.slug.slice(1);
	const subtitle = `${gallery.images.length} photos`;
</script>

<Title {title} {subtitle}/>

<div class="gallery">
	{#each gallery.images as src}
		<Photo {src}/>
	{/each}
</div>