<script>
	import "$styles/app.css";
	import Nav from "$components/Project/Nav.svelte";

	let { children } = $props();
</script>

<Nav />
<main id="content">
	{@render children?.()}
</main>

<style>
	main {
		/* background: #F9F9F7; */
    	margin: 1rem 18rem;
	}
</style>
