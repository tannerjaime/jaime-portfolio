<script>
  let { about = {} } = $props();

  let video = $derived(about?.video ?? '');
  let poster = $derived(about?.poster ?? '');
  let autoplay = $derived(about?.autoplay ?? true);
  let loop = $derived(about?.loop ?? true);
  let muted = $derived(about?.muted ?? true);
  let controls = $derived(about?.controls ?? false);
</script>

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

<style>
  video {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover;
    display: block;
  }
</style>