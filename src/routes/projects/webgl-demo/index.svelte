<style lang="scss" global>
	@import "./styles/global.scss";

	.demo-container
	{
		@include centered-column;

		height: 100%;
	}

	.control-row
	{
		display: flex;
		justify-content: space-between;

		width: 100%;

		.add-controls,
		.clear-controls
		{
			display: flex;
			flex-flow: row wrap;
		}

		.add-controls
		{
			justify-content: flex-start;

			.control-element
			{
				margin-right: 10px;
			}
		}
		.clear-controls { justify-content: flex-end; }

		.control-element
		{
			width: $desktopButtonWidth;
		}
	}

	@media (max-width: $mobileWidth)
	{
		.add-controls,
		.clear-controls
		{
			width: 50%;

			.control-element
			{
				width: 100%;

				&:not(:last-child) { margin-bottom: 10px; }
			}
		}
	}
</style>

<script>
	// External components
	import Title from "../../../components/Title.svelte";
	import Select from "../../../components/Select.svelte";
	import Button from "../../../components/Button.svelte";
	import SceneCanvas from "./components/_SceneCanvas.svelte";

	// Application constants
	const CANVAS_ID = "objectCanvas";
	const OBJECT_TYPES = [
		{ id: "cube", display: "Cube" },
		{ id: "sphere", display: "Sphere" }
	];
	const MAX_OBJECTS_ALLOWED = 10;

	// Object list and dependant variables
	let liveObjects = [];
	let selectedObjectType = OBJECT_TYPES[0].id;

	$: numLiveObjects = liveObjects.length;
	$: maximumReached = numLiveObjects >= MAX_OBJECTS_ALLOWED;
	$: addButtonLabel = !maximumReached ? "Add" : "Full!";

	// Control functions
	function updateSelection(event)
	{
		selectedObjectType = event.detail;
	}

	function addNewObject()
	{
		liveObjects = [...liveObjects, OBJECT_TYPES.filter(objType => objType.id === selectedObjectType)[0]];
		// createScene(liveObjects, CANVAS_ID);
	}

	function clearObjects()
	{
		liveObjects = [];
	}
</script>

<div class="demo-container">
	<Title title={"Svelte + WebGL"} subtitle={"(mobile friendly!)"} subtitleDesktopOnly={true}/>

	<div class="control-row">
		<div class="add-controls">
			<Select options={OBJECT_TYPES} on:notify="{updateSelection}"/>
			<Button label={addButtonLabel} disabled={maximumReached} on:notify="{addNewObject}"/>
		</div>
		<div class="clear-controls">
			<Button label={"Clear All"} disabled={numLiveObjects === 0} on:notify="{clearObjects}"/>
		</div>
	</div>

	<SceneCanvas id={CANVAS_ID} types={OBJECT_TYPES} objects={liveObjects}/>
</div>