<script>
	import "$styles/app.css";
	import Nav from "$components/Project/Nav.svelte";

	let { children } = $props();
</script>

<Nav />
<main id="content">
	{@render children?.()}
</main>
