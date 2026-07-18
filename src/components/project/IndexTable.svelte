<script>
  const props = $props();

  /** @type {string} */
  let title = props.title ?? '';

  /** @type {ListItem[]} */
  let items = props.items ?? [];
  console.log('items:', items);

  let ordered = props.ordered ?? false;
</script>

<section class="index-section">
  <h2>
    {title}
  </h2>

  <svelte:element this={ordered ? 'ol' : 'ul'}>
    {#each items as item, i}
      <li>
        {#if item.href}
          <a href={item.href}>{item.text}</a>
        {:else}
          <span class="text">{item.text}</span>
        {/if}
        {#if item.meta}
          <span class="meta">{item.meta}</span>
        {/if}
      </li>
    {/each}
  </svelte:element>
</section>

<style>
  .index-section {
    margin: 0 auto;
    padding: 1rem 0;
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    /* line-height: 1.25; */
    color: #333331;
    margin: 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: 600;
  }

  h2 sup {
    font-size: 0.7em;
    font-weight: 400;
    color: #888;
    margin-left: 0.15em;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.4rem 0;
    /* border-bottom: 1px solid #eaeaea; */
    font-size: 0.95rem;
    line-height: 1.4;
  }

  li a,
  li .text {
    color: #111;
    text-decoration: none;
    flex: 1 1 auto;
    min-width: 0;
  }

  li a {
    position: relative;
    display: inline-block;
    /* transition: background-color 0.05s ease, color 0.05s ease; */
  }

  li a:hover {
    color: #F9F9F7;
    background-color: #111;
  }

  .meta {
    flex: 0 0 auto;
    color: #888;
    /* font-size: 0.85rem; */
    white-space: nowrap;
  }
</style>
