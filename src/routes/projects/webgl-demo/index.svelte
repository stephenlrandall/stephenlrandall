<style lang="scss" global>
	@import "./styles/global.scss";

	.container
	{
		@include centered-column;

		position: relative;
		width: 80%;
		height: 100%;
		max-width: 860px;
		margin: 0 auto;
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
			width: 130px;
		}
	}

	.footer
	{
		@include centered-column;

		color: white;
		font-size: 8pt;

		padding-top: 15px;

		span { padding-bottom: 10px; }
		
		a
		{
			color: inherit;
			text-decoration: underline;
		}
	}

	@media only screen and (max-width: $mobileWidth)
	{
		.container { width: 90%; }
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

<svelte:head>
	<script src="https://kit.fontawesome.com/e2e4175a99.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="container">
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

	<div class="footer">
		<span><i class="fas fa-exclamation-triangle"></i> Not fully supported on Safari.</span>
		<span>Created by <a href="https://www.stephenlrandall.com">Stephen Randall</a></span>
	</div>
</div>