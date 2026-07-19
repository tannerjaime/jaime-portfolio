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
		margin: 1rem 18rem;
	}

	@media (max-width: 1400px) {
		main {
			margin: 1rem 17rem;
		}
	}

	@media (max-width: 1100px) {
		main {
			margin: 1rem 4rem;
		}
	}

	@media (max-width: 760px) {
		main {
			margin: 1rem 1.5rem;
		}
	}
</style>
