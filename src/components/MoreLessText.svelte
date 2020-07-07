<style>
    .more-less-text-container
    {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .compressed
    {
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .more-less-button
    {
        color: #0009;
        text-decoration: underline;
        cursor: pointer;
    }

    .hidden { display: none; }
</style>

<script>
    export let text;

    let status = "more";
    function toggleMoreLess()
    {
        status = status === "more" ? "less" : "more";
    }
</script>

<div class="more-less-text-container">
    <span class:compressed="{status === "more"}">{text} <span class="more-less-button" class:hidden="{status !== "less"}" on:click={toggleMoreLess}>less</span></span>
    <span class="more-less-button" class:hidden="{status !== "more"}" on:click={toggleMoreLess}>more</span>
</div>