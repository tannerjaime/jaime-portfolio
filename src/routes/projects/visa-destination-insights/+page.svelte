<script>
  import { setContext } from 'svelte';
  import Meta from '$components/Meta.svelte';
  import ProjectHed from '$components/project/ProjectHed.svelte';
  import copy from '$data/copy.vdi.json';

  const projectHed = copy?.body?.[0]?.content?.find((item) => item.type === 'projectHed')?.value ?? {};
  const title = 'Visa Destination Insights';
  const description = 'Project page placeholder for Visa Destination Insights.';
  const url = 'https://your-domain.com/projects/visa-destination-insights';

  setContext('copy', copy);
</script>

<Meta title={title} description={description} url={url} />
{#each copy?.body ?? [] as section}
  <section data-section={section.section ?? 'content'}>
    {#if Array.isArray(section.content)}
      {#each section.content as item}
        {#if item?.type === 'ProjectHed'}
          <ProjectHed projectHed={item.value} />
        {:else}
          <svelte:element this={item?.type || 'div'}>
            {item?.value ?? ''}
          </svelte:element>
        {/if}
      {/each}
    {/if}
  </section>
{/each}
<!-- <ProjectHed
  projectHed={{
    title: 'Visa Destination Insights',
    subtitle: 'A project overview placeholder',
    textLines: [
      'This is a placeholder project header using the new ProjectHed component.',
      'It will be replaced with project-specific content later.'
    ],
    image: 'static/assets/project/VDI_homescreen.avif',
    caption: 'Placeholder media for the project header.',
    alt: 'Placeholder project visual'
  }}
/> -->
