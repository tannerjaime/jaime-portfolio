<script>
  // let { name = 'Jaime Tanner', links = [
  //   { label: 'About', href: '/about' },
  //   { label: 'Projects', href: '/projects' }
  // ] } = $props();
  let { name = 'Jaime Tanner', links= [] } = $props();
</script>

<nav>
  <a class="logo" href="/">{name}</a>
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
    padding: 3rem 18rem 0;
  }

  .logo {
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.25;
    /* text-transform: uppercase; */
    color: #333331;
    text-decoration: none;
  }

  ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li a {
    font-family: "Mozilla Text", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.25;
    text-transform: uppercase;
    color: #333331;
    text-decoration: none;
  }

  li a:hover,
  .logo:hover {
    opacity: 0.6;
  }

  @media (max-width: 640px) {
    nav {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
    }

    ul {
      gap: 1.25rem;
      flex-wrap: wrap;
    }
  }
</style>
