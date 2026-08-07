<script>
  const props = $props();

  /** @type {string} */
  let title = $derived(props.title ?? '');

  /** @type {ListItem[]} */
  let items = $derived(props.items ?? []);

  let ordered = $derived(props.ordered ?? false);
  let showAll = $state(false);

  let visibleItems = $derived(showAll ? items : items.slice(0, 4));
  let hasMore = $derived(items.length > 4);
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
      {showAll ? 'Show less' : `[Show ${items.length - 4} more]`}
    </button>
  {/if}
</section>

<style>
  .index-section {
    margin: 0 auto;
    padding: 1.25rem 0;
    color: #333331;
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    --row-bleed: 0.35rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    margin: 0 calc(var(--row-bleed) * -1);
    padding: 0.65rem var(--row-bleed);
    border-radius: 0.375rem;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  li + li::before,
  li:last-child::after {
    content: "";
    position: absolute;
    left: var(--row-bleed);
    right: var(--row-bleed);
    height: 1px;
    background-color: #ecece8;
  }

  li + li::before {
    top: 0;
  }

  li:last-child::after {
    bottom: 0;
  }

  li a,
  li .text {
    text-decoration: none;
    min-width: 0;
    transition: color 160ms ease;
  }

  li a {
    position: relative;
    text-decoration: none;
    flex: 0 1 auto;
    align-self: flex-start;
    font-weight: 500;
    color: #2c2621
  }

  .meta {
    flex: 0 0 auto;
    /* color: #888; */
    /* white-space: nowrap; */
    /* transition: color 16ms ease; */
    /* font-family: "Inter", sans-serif;
    font-size: 1rem; */
  }

  @media (hover: hover) and (pointer: fine) {
    li:has(a):hover {
      background-color: #ececec;
    }
  }

  .toggle {
    --row-bleed: 0.35rem;
    display: block;
    width: calc(100% + (var(--row-bleed) * 2));
    box-sizing: border-box;
    margin: 0 calc(var(--row-bleed) * -1) 0;
    border: 0;
    background: none;
    font-family: var(--font-sans);
	  font-size: var(--15px, 15px);
	  line-height: 20px;
	  color: #2c2621;
    font-weight: 500;
	  letter-spacing: 0.01em;
    padding: 0.65rem var(--row-bleed);
    text-align: left;
    border-radius: 0.375rem;
    cursor: pointer;
    /* line-height: 1.4; */
    text-decoration: none;
  }

  @media (max-width: 760px) {
    .index-section {
      padding: 1.25rem 0;
    }

    li {
      --row-bleed: 0.3rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 0.1rem;
      margin: 0 calc(var(--row-bleed) * -1);
      padding: 0.55rem var(--row-bleed);
    }

    .meta {
      white-space: normal;
    }

    .toggle {
      --row-bleed: 0.3rem;
      margin-top: 0;
      padding: 0.55rem var(--row-bleed);
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .toggle:hover {
      background-color: #ececec;
    }
  }

  @media (hover: none) {
    li:has(a:active),
    .toggle:active {
      background-color: #ececec;
    }
  }
</style>
