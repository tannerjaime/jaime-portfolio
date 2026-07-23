<script>
  let { name = 'Jaime Tanner', links= [] } = $props();
</script>

<nav>
  <a class="logo" href="/">
    <svg viewBox="0 0 410 360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <mask id="holeMask">
        <rect x="0" y="0" width="410" height="360" fill="white"/>
        <circle cx="205" cy="180" r="95" fill="black"/>
      </mask>
    </defs>
  
    <!-- flower head (petals with center hole) -->
    <g fill="#000000" mask="url(#holeMask)">
      <circle cx="235.6" cy="106.1" r="68"/>
      <circle cx="278.9" cy="149.4" r="68"/>
      <circle cx="278.9" cy="210.6" r="68"/>
      <circle cx="235.6" cy="253.9" r="68"/>
      <circle cx="174.4" cy="253.9" r="68"/>
      <circle cx="131.1" cy="210.6" r="68"/>
      <circle cx="131.1" cy="149.4" r="68"/>
      <circle cx="174.4" cy="106.1" r="68"/>
    </g>
    </svg>
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
    margin: 1rem 18rem;
  }

  @media (max-width: 1400px) {
    nav {
      margin: 1rem 17rem;
    }
  }

  @media (max-width: 1100px) {
    nav {
      margin: 1rem 4rem;
    }
  }

  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .logo svg {
    width: 1.5rem;
    height: auto;
    display: block;
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

  @media (max-width: 760px) {
    nav {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      margin: 1rem 1.5rem;
    }

    ul {
      gap: 1.25rem;
      flex-wrap: wrap;
    }
  }
</style>
