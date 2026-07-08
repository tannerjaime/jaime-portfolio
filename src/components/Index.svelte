<script>
	import { getContext } from "svelte";
	import Footer from "$components/Footer.svelte";
	import DemoSvelteComponentA from "$components/demo/Demo.SvelteComponent.A.svelte";
	import About from "$components/project/About.svelte";

	const copy = getContext("copy");
	// const data = getContext("data");
</script>


<svelte:boundary onerror={(e) => console.error(e)}>
	<About/>
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>
