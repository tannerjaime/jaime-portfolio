<script>
	import "$styles/app.css";
	import "$styles/fonts.css";
	import Nav from "$components/Project/Nav.svelte";
	import Footer from "$components/Footer.svelte";

	let { children } = $props();
</script>

<Nav />
<main id="content">
	{@render children?.()}
</main>
<Footer />

<style>
	main {
		width: min(calc(100% - (var(--page-padding) * 2)), var(--page-width));
		margin: 1rem auto;
		box-sizing: border-box;
	}
</style>
