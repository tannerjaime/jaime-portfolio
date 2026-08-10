<script>
  import { setContext } from 'svelte';
  import Meta from '$components/Meta.svelte';
  import ProjectHed from '$components/project/ProjectHed.svelte';
  import Image from '$components/project/Image.svelte';
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
        {:else if item?.type === 'Image'}
          <div class="image-breakout">
            <Image allProps={item.value} />
          </div>
        {:else}
          <svelte:element this={item?.type==='text' ? 'p' : item?.type || 'p'}>
            {item?.value ?? ''}
          </svelte:element>
        {/if}
      {/each}
    {/if}
  </section>
{/each}

<style>
  .image-breakout {
    width: 100%;
  }

  @media (min-width: 1101px) {
    .image-breakout {
      width: min(calc(100% + 20rem), calc(100vw - 4rem));
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
