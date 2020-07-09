<style lang="scss">
    @import "../styles/variables.scss";

    .photo-container
    {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        padding: 0.5em 1.5em 1em;
    }

    .img-container
    {
        width: 200px;
        height: 200px;

        border-radius: 10%;
        border: 1px solid #fff6;
        overflow: hidden;

        &.circular { border-radius: 50%; }

        img
        {
            width: 100%;
            height: 100%;
        }
    }

    .img-link
    {
        // Safari hack to fix transition issues
        -webkit-mask-image: -webkit-radial-gradient(white, black);

        &::after
        {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 125%;
            height: 125%;
            background: rgba(255, 255, 255, 0.15);
            z-index: 1;
            transform: translateX(-80%) translateY(-80%) rotate(45deg);
            transition: transform 0.3s ease-out;
            pointer-events: none;
        }

        &:hover
        {
            border: 1px solid #fff9;

            &::after { transform: translateX(-15%) translateY(-15%) rotate(45deg); }
        }
    }

    .img-label
    {
        padding-top: 0.25em;
    }

    @media (max-width: $mobile-width)
    {
        .img-container
        {
            width: 110px;
            height: 110px;
        }
    }
</style>

<script>
    export let src;
    export let label;
    export let href;
    export let circular = false;
</script>

<div class="photo-container">
    {#if href}
        <a class="img-container img-link" class:circular {href}>
            <img {src} alt="{src}"/>
        </a>
    {:else}
        <div class="img-container" class:circular>
            <img {src} alt="{src}"/>
        </div>
    {/if}
    
    {#if label}
        <span class="img-label">{label}</span>
    {/if}
</div>