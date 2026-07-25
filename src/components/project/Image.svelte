<script>
  let {
    allProps = {},
    image = allProps?.image ?? '',
    caption = allProps?.caption ?? '',
    alt = allProps?.alt ?? ''
  } = $props();
</script>

{#if image}
  <figure>
    <img src={image} {alt} />
    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  </figure>
{/if}

<style>
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

  @media (max-width: 640px) {
    figcaption {
      font-size: 0.85rem;
    }
  }
</style>
