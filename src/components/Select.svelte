<script>
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let options = [];

    let selected;
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select bind:value={selected} class="theme-element control-element" on:change="{() => dispatch("notify", selected)}">
    {#each options as option, i}
        <option value="{option.id}" selected={i === 0}>{option.display}</option>
    {/each}
</select>