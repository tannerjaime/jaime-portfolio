<script>
  let { name = 'Jaime Tanner', links = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' }
  ] } = $props();
</script>

<nav>
  <a class="logo" href="/">{name}</a>
  <ul>
    {#each links as link}
      <li><a href={link.href}>{link.label}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2.5rem;
    background: #f4f4f3;
  }

  .logo {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 1.4rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #1a1a1a;
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
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1a1a1a;
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
