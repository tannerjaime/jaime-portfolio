<script>
  const props = $props();

  /** @type {string} */
  let title = $derived(props.title ?? '');

  /** @type {ListItem[]} */
  let items = $derived(props.items ?? []);

  let ordered = $derived(props.ordered ?? false);
  let showAll = $state(false);

  let visibleItems = $derived(showAll ? items : items.slice(0, 3));
  let hasMore = $derived(items.length > 3);
</script>

<section class="index-section">
  <h2>
    {title}
  </h2>

  <svelte:element this={ordered ? 'ol' : 'ul'}>
    {#each visibleItems as item, i}
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

  {#if hasMore}
    <button type="button" class="toggle" onclick={() => (showAll = !showAll)}>
      {showAll ? 'Show less' : `[Show ${items.length - 3} more]`}
    </button>
  {/if}
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
    min-width: 0;
  }

  li a {
    position: relative;
    text-decoration: underline;
    flex: 0 1 auto;
    align-self: flex-start;
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

  .toggle {
    margin-top: 0.5rem;
    padding: 0;
    border: 0;
    background: none;
    color: #111;
    cursor: pointer;
    font: inherit;
    font-size: 0.95rem;
    line-height: 1.4;
    text-decoration: underline;
  }

  @media (max-width: 760px) {
    .index-section {
      padding: 0.75rem 0;
    }

    li {
      gap: 0.75rem;
      padding: 0.35rem 0;
    }

    .toggle {
      margin-top: 0.35rem;
    }
  }

  .toggle:hover {
    color: #F9F9F7;
    background-color: #111;
  }
</style>
