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
    padding: 0 0 3rem;
  }

  h1{
    padding: 0 0 1.2rem;
  }

  span {
    display: block;
    /* color: #333331; */
    margin: 0;
  }
 
  @media (max-width: 900px) {
    section {
      padding: 0 0 1.5rem;
    }

    .text-block {
      padding: 0 0 0.75rem;
    }
  }
 
  @media (max-width: 640px) {
    section {
      padding: 0 0 1rem;
    }

    .text-block {
      padding: 0 0 0.5rem;
    }
  }
</style>