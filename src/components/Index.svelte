<script>
	import { getContext } from "svelte";
	import Footer from "$components/Footer.svelte";
	import DemoSvelteComponentA from "$components/demo/Demo.SvelteComponent.A.svelte";
	import About from "$components/project/About.svelte";
	import IndexTable from '$components/project/IndexTable.svelte';
	import Video from "./project/Video.svelte";
 
	const copy = getContext("copy");
	// const data = getContext("data");

	const about = copy?.body?.[0]?.content?.find((item) => item.type === "About")?.value ?? {};
	const indexTables = $derived(
		(copy?.body ?? []).flatMap((section) =>
			(section.content ?? [])
				.filter((item) => item.type === "IndexTable")
				.map((item) => item.value ?? {})
		)
	);
</script>

<svelte:boundary onerror={(e) => console.error(e)}>
	<About {about} />
	{#each indexTables as table}
		<IndexTable {...table} />
	{/each}
	<Video about={about} />
	<!-- <Footer recirc={true} /> -->
</svelte:boundary>
