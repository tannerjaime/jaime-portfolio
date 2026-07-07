<script>
	import { getContext } from "svelte";
	import Footer from "$components/Footer.svelte";
	import DemoSvelteComponentA from "$components/demo/Demo.SvelteComponent.A.svelte";
	import DemoUI from "$components/demo/Demo.UI.svelte";

	const copy = getContext("copy");
	// const data = getContext("data");
</script>


<svelte:boundary onerror={(e) => console.error(e)}>
	<DemoSvelteComponentA number={7} />
	<DemoUI/>
	<Footer recirc={true} />
</svelte:boundary>
