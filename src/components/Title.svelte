<style lang="scss">
    @import "../styles/variables.scss";

    .title-container
    {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        padding: 0.5em 0 1em;
    }
    
    .title
    {
        font-size: 48pt;
        font-weight: bold;
        text-align: center;
    }

    @media (max-width: $mobile-width)
    {
        .title { font-size: 22pt; }
        .subtitle.desktop-only { display: none; }
    }
</style>

<script>
    export let title;
    export let subtitle = "";
    export let subtitleDesktopOnly = false;
    export let headTitle = "";
</script>

<svelte:head>
	<title>{headTitle !== "" ? headTitle : title.split(" ")[0]} | Stephen Randall</title>
</svelte:head>

<div class="title-container">
	<span class="title">{title}</span>
    {#if subtitle !== ""}
        <span class="subtitle{subtitleDesktopOnly ? " desktop-only" : ""}">{subtitle}</span>
    {/if}
</div>