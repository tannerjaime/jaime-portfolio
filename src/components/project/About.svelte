<script>
  let { about = {} } = $props();

  let text = $derived(about?.text ?? 'no text');
  let image = $derived(about?.image ?? '');
  let alt = $derived(about?.alt ?? '');
  let video = $derived(about?.video ?? '');
  let poster = $derived(about?.poster ?? '');
  let autoplay = $derived(about?.autoplay ?? true);
  let loop = $derived(about?.loop ?? true);
  let muted = $derived(about?.muted ?? true);
  let controls = $derived(about?.controls ?? false);
  let textLines = $derived(text.split('\n'));
</script>

<section>
  <div class="text-block">
    {#each textLines as line, i}
      <span>{line}</span>
      {#if i < textLines.length - 1}
        <br />
      {/if}
    {/each}
  </div>
  {#if image}
    <img src={image} {alt} />
  {/if}
  {#if video}
    <video
      src={video}
      {poster}
      autoplay={autoplay}
      loop={loop}
      muted={muted}
      {controls}
      playsinline
    >
      <track kind="captions" />
    </video>
  {/if}
</section>

<style>
  section {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    background: #f4f4f3;
    padding: 1rem 2.5rem 5rem;
  }
 
  .text-block {
    flex: 1 1 0;
    max-width: 68ch;
  }

  span {
    display: block;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 2.75rem;
    line-height: 1.25;
    color: #1a1a1a;
    margin: 0;
  }
 
  video {
    flex: 0 0 clamp(180px, 26vw, 320px);
    width: clamp(180px, 26vw, 320px);
    height: auto;
    object-fit: cover;
    display: block;
  }
 
  @media (max-width: 900px) {
    section {
      flex-direction: column-reverse;
      gap: 2rem;
    }
 
    video {
      width: 100%;
      flex-basis: auto;
    }
  }
 
  @media (max-width: 640px) {
    section {
      padding: 0.5rem 1.5rem 3rem;
    }
 
    span {
      font-size: 1.6rem;
    }
  }
</style>