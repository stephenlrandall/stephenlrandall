<script context="module">
    export function preload({ params, query })
    {
        return this.fetch("sarah.json")
            .then(r => r.json())
            .then(galleries => { return { galleries }; });
	}
</script>

<script>
    import { stores } from "@sapper/app";
    const { page } = stores();
    const root = $page.path.slice(1);

    import Title from "../../components/Title.svelte";
    import Photo from "../../components/Photo.svelte";

    export let galleries;

    function ordinalize(num)
    {
        const first = num % 10;
        const firstTwo = num % 100;

        if (first === 1 && firstTwo !== 11)
            return `${num}st`;
        if (first == 2 && firstTwo !== 12)
            return `${num}nd`;
        if (first === 3 && firstTwo !== 13)
            return `${num}rd`;
        
        return `${num}th`;
    }

    let subtitle;
    const anniversary = new Date("June 22, 2018");
    function computeAnniversary()
    {
        const now = new Date();
        const anniversaryNum = Math.round(parseInt((now.getTime() - anniversary.getTime()) / (1000 * 60 * 60 * 24 * 365.25))) + 1;

        const nextAnniversary = new Date(anniversary.getFullYear() + anniversaryNum, anniversary.getMonth(), anniversary.getDate());
        const daysLeft = parseInt((nextAnniversary.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

        if (daysLeft === 0)
            subtitle = `Today is our ${ordinalize(anniversaryNum)} anniversary!`;
        else
            subtitle = `${daysLeft} day${daysLeft !== 1 ? "s" : ""} until our ${ordinalize(anniversaryNum)} anniversary`;
    }

    computeAnniversary();
    setInterval(computeAnniversary, 1000 * 60 * 60 * 24); // Update every day
</script>

<Title title={"Sarah"} {subtitle}/>

<div class="gallery">
    {#each galleries as gallery}
        <Photo src={gallery.images[0]} label={`${gallery.slug} (${gallery.images.length})`} href={`${root}/${gallery.slug}`} circular={true}}/>
    {/each}
</div>