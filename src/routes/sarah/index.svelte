<style>
    .photo-row
    {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        overflow-y: scroll;
    }

    .next-label
    {
        width: 100%;
        padding-top: 1em;
        text-align: center;
    }
</style>

<script>
    import Title from "../../components/Title.svelte";
    import PhotoLink from "../../components/PhotoLink.svelte";

    const marriageDate = new Date("June 22, 2018");
    let subtitle;
    function computeDates()
    {
        const now = new Date();
        subtitle = `${parseInt((now.getTime() - marriageDate.getTime()) / (1000 * 60 * 60 * 24))} days since the wedding`;
    }

    computeDates();
    setInterval(computeDates, 1000 * 60 * 60 * 24); // Update every day
</script>

<Title title={"Sarah"} {subtitle}/>

<div class="photo-row">
    <PhotoLink label={"college"} link={"sarah/college"} src={"images/college.jpg"}/>
    <PhotoLink label={"wedding"} link={"sarah/wedding"} src={"images/wedding.jpg"}/>
    <PhotoLink label={"california"} link={"sarah/california"} src={"images/california.jpg"}/>
</div>

<span class="next-label"><b>Next</b>: Dynamic galleries!</span>