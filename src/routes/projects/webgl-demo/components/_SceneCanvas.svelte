<style lang="scss">
    @import "../styles/variables.scss";

    .canvas-container
	{
        @include centered-column;

        width: 90%;
        min-height: 0;
        flex: 1;

        padding: 5px 0 15px;

		.canvas-label
		{
			align-self: flex-end;
            padding: 0 2px 5px 0;
		}

        canvas
        {
            width: 100%;
            height: calc(100% - 15px);
            flex: 1;
        }
	}

    @media only screen and (max-width: $mobileWidth)
    {
        .canvas-container
        {
            width: 100%;
        }
    }
</style>

<script>
	import { onMount } from "svelte";
    import createScene from "../js/scene.js";
    
    export let id;
    export let types = [];
    export let objects = [];

    $: objectTypes = types.map(function(type)
    {
        return { id: type.id, num: objects.filter(obj => obj.id === type.id).length }
    });

    // Smooth canvas resizing
    let canvas;
	function resize()
	{
		if (!canvas)
			return;

		const displayWidth = canvas.scrollWidth;
		const displayHeight = canvas.scrollHeight;
		
		if (canvas.width === displayWidth && canvas.height === displayHeight)
			return;
        
        console.log("resized!");
		canvas.width = displayWidth;
		canvas.height = displayHeight;
  	}

    onMount(async function()
    {
        canvas = document.querySelector(`#${id}`);
        resize();
        createScene([], canvas);
    });

    window.addEventListener("resize", resize);
</script>

<div class="canvas-container">
    <span class="canvas-label">{objectTypes.filter(ot => ot.num > 0).map(ot => `${ot.num} ${ot.id}${ot.num > 1 ? 's' : ""}`).join(", ") || "0 objects"}</span>
    <canvas class="theme-element" id={id}></canvas>
</div>
