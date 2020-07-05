<script>
	export let segment;
</script>

<style lang="scss">
	@import "../styles/variables.scss";
	
	nav
	{
		background-color: $deep-violet;
		border-bottom: 1px solid #fff6;
		font-weight: 300;
		color: white;
	}

	ul
	{
		margin: 0;
		padding: 0 1em;

		&:after
		{
			content: "";
			display: block;
			clear: both;
		}
	}

	li
	{
		display: block;
		float: left;
	}

	.active
	{
		position: relative;
		display: inline-block;

		font-weight: 500;
		cursor: default;
		pointer-events: none;
	}

	a
	{
		text-decoration: none;

		height: 30px;
		font-size: 12pt;

		padding: 1em 0.5em;
		display: block;
		
		img
		{
			height: 100%;
			margin-top: -2px;
		}
	}
</style>

<nav>
	<ul>
		<li><a class="{segment === undefined ? "active" : ""}" href="."><img src="logo-512-white.png" alt="Home"/></a></li>
		<li><a class="{segment === "projects" ? "active" : ""}" href="projects">projects</a></li>
		<li><a class="{segment === "papers" ? "active" : ""}" href="papers">papers</a></li>
	</ul>
</nav>
