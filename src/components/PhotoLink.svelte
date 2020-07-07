<style lang="scss">
    .photo-link
    {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        padding: 0.5em 1.5em 1em;
    }

    $linkDim: 200px;
    .img-link
    {
        width: $linkDim;
        height: $linkDim;

        border-radius: 50%;
        border: 1px solid #fff6;
        overflow: hidden;

        img
        {
            width: 100%;
            height: 100%;
        }

        &:hover
        {
            border: 1px solid #fff9;
        }

        // Safari hack to fix transition issues
        -webkit-mask-image: -webkit-radial-gradient(white, black);
    }

    .img-link::after
    {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        z-index: 1;
        transform:  translateX(-75%) translateY(-75%) rotate(45deg);
        transition: transform 0.4s ease-in-out;
        pointer-events: none;
    }

    .img-link:hover::after
    {
        transform: rotate(45deg);
    }

    .text-link { margin-top: -1px; }
</style>

<script>
    export let label;
    export let src;
    export let link;
</script>

<div class="photo-link">
    <a class="img-link" href="{link}"><img {src} alt="{label}"/></a>
    <a class="text-link" href="{link}">{label}</a>
</div>