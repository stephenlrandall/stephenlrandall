<style lang="scss">
    @import "../styles/variables.scss";

    .title-container
    {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        padding-bottom: 20px;
    }
    
    .title
    {
        font-size: 48pt;
        font-weight: bold;
    }

    @media only screen and (max-width: $mobileWidth)
    {
        .title { font-size: 26pt; }
        .subtitle.desktop-only { display: none; }
    }
</style>

<script>
    export let title;
    export let subtitle;
    export let subtitleDesktopOnly = false;
</script>

<div class="title-container">
	<span class="title">{title}</span>
    {#if subtitle && subtitle !== ""}
        <span class="subtitle{subtitleDesktopOnly ? " desktop-only" : ""}">{subtitle}</span>
    {/if}
</div>