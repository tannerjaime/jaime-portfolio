<script>
  let { about = {} } = $props();

  let sectionTitle = $derived(about?.sectionTitle ?? '');
  let video = $derived(about?.video ?? '');
  let poster = $derived(about?.poster ?? '');
  let autoplay = $derived(about?.autoplay ?? true);
  let loop = $derived(about?.loop ?? true);
  let muted = $derived(about?.muted ?? true);
  let controls = $derived(about?.controls ?? false);
</script>

{#if sectionTitle || video}
  <section class="video-section">
    {#if sectionTitle}
      <h2>{sectionTitle}</h2>
    {/if}

    {#if video}
      <video
        src={video}
        poster={poster}
        autoplay={autoplay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsinline
      >
        <track kind="captions" />
      </video>
    {/if}
  </section>
{/if}

<style>
  .video-section {
    margin: 0 auto;
    padding: 1.25rem 0;
    color: #333331;
    margin: 0;
  }

  video {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0.375rem;
  }

  @media (max-width: 760px) {
    .video-section {
      padding: 1.25rem 0;
    }
  }
</style>