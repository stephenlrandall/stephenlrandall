<script>
	import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    
    export let label;
    export let disabled = false;
</script>

<button class="theme-element control-element" disabled={disabled} on:click="{() => dispatch("notify", `Button \"${label}\" clicked`)}">{label}</button>