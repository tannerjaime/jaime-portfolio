<script>
  let { about = {} } = $props();

  let title = $derived(about?.title ?? 'No title');
  let text = $derived(about?.text ?? 'no text');
  let textLines = $derived(text.split('\n'));
</script>

<section>
  <h1>{title}</h1>

  <div class="text-block">
    {#each textLines as line, i}
      <span>{line}</span>
      {#if i < textLines.length - 1}
        <br />
      {/if}
    {/each}
  </div>
</section>

<style>
   .text-block {
    width: 100%;
    max-width: 100%;
    padding: 0 0 1rem;
  }

  section {
    width: 100%;
  }

  h1 {
    color: #333331;
  }

  span {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    color: #333331;
    margin: 0;
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
      /* line-height: 1.35; */
    }
  }
</style>