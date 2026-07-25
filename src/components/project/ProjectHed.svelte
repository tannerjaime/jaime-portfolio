<script>
  let {
    projectHed = {},
    title = projectHed?.title ?? '',
    subtitle = projectHed?.subtitle ?? '',
    textLines = projectHed?.textLines ?? [],
    image = projectHed?.image ?? '',
    caption = projectHed?.caption ?? '',
    alt = projectHed?.alt ?? ''
  } = $props();

  let resolvedTextLines = $derived(
    Array.isArray(textLines) ? textLines : String(textLines ?? '').split('\n')
  );
</script>

<section>
  {#if title}
    <h1>{title}</h1>
  {/if}

  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}

  {#if resolvedTextLines.length}
    <div class="text-block">
      {#each resolvedTextLines as line, i}
        <span>{line}</span>
        {#if i < resolvedTextLines.length - 1}
          <br />
        {/if}
      {/each}
    </div>
  {/if}

  {#if image}
    <figure>
      <img src={image} {alt} />
      {#if caption}
        <figcaption>{caption}</figcaption>
      {/if}
    </figure>
  {/if}
</section>

<style>
  section {
    width: 100%;
  }

  h1 {
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
    color: #333331;
    margin: 0 0 0.25rem;
  }

  .subtitle {
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    color: #333331;
    margin: 0 0 0.75rem;
  }

  .text-block {
    width: 100%;
    max-width: 100%;
    padding: 0 0 1rem;
  }

  span {
    display: block;
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.25;
    color: #333331;
    margin: 0;
  }

  figure {
    margin: 0;
    padding: 0 0 1rem;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  figcaption {
    margin-top: 0.5rem;
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 0.9rem;
    line-height: 1.25;
    color: #666;
  }

  @media (max-width: 900px) {
    .text-block {
      padding: 0 0 0.75rem;
    }
  }

  @media (max-width: 640px) {
    .text-block {
      padding: 0 0 0.5rem;
    }

    span {
      font-size: 1.1rem;
      line-height: 1.35;
    }

    figcaption {
      font-size: 0.85rem;
    }
  }
</style>
