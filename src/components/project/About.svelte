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
  <div class="content-stack">
    <div class="text-block">
      {#each textLines as line, i}
        <span>{line}</span>
        {#if i < textLines.length - 1}
          <br />
        {/if}
      {/each}
    </div>

    <div class="media-block">
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
    </div>
  </div>
</section>

<style>
  section {
    background: #F9F9F7;
    padding: 4rem 8rem 8rem;
  }

  .content-stack {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
 
  .text-block {
    width: 100%;
    max-width: 100%;
  }

  .media-block {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 100%;
  }

  span {
    display: block;
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 1.1rem;
    line-height: 1.25;
    color: #333331;
    margin: 0;
  }
 
  img,
  video {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover;
    display: block;
  }
 
  @media (max-width: 900px) {
    section {
      gap: 2rem;
    }

    .media-block {
      width: 100%;
    }
  }
 
  @media (max-width: 640px) {
    section {
      padding: 1.25rem 1.75rem 3rem;
    }
 
    span {
      font-size: 1.6rem;
    }
  }
</style>