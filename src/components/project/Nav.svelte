<script>
  let { name = 'Jaime Tanner', links= [] } = $props();
</script>

<nav>
  <a class="logo" href="/">
    <img src="/assets/branding/png.webp" alt="Jaime Tanner logo" />
  </a>
  
  <ul>
    {#if links}
      {#each links as link}
        <li><a href={link.href}>{link.label}</a></li>
      {/each}
    {/if}
  </ul>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(1rem, 2vw, 2.5rem);
    width: min(calc(100% - (var(--page-padding) * 2)), var(--page-width));
    margin: 2.5rem auto 4rem;
    box-sizing: border-box;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    line-height: 1;
  }

  .logo img {
    display: block;
    height: clamp(3rem, 6vw, 5rem);
    width: auto;
    object-fit: contain;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(1rem, 2vw, 2.5rem);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li a {
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(0.75rem, 1vw, 1rem);
    line-height: 1.25;
    text-transform: uppercase;
    color: #333331;
    text-decoration: none;
  }

  li a:hover,
  .logo:hover {
    opacity: 0.6;
  }

</style>
