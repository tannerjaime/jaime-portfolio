<script>
  const {
    text = 'Jaime Tanner is a designer & developer currently working at The New York Times as their first Accessibility Visuals Editor.',
    image = '',
    alt = '',
    video = '/assets/project/aquarium.MOV',
    poster = '',
    autoplay = true,
    loop = true,
    muted = true,
    controls = false
  } = $props();
</script>

<section>
  <p>{text}</p>
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
 
  p {
    flex: 1 1 0;
    max-width: 68ch;
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
 
    p {
      font-size: 1.6rem;
    }
  }
</style>