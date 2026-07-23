<script>
  import { setContext } from 'svelte';
  import Meta from '$components/Meta.svelte';
  import About from '$components/project/About.svelte';
  import copy from '$data/copy.json';

  const about = copy?.body?.[0]?.content?.find((item) => item.type === 'About')?.value ?? {};
  const title = 'Visa Destination Insights';
  const description = 'Project page placeholder for Visa Destination Insights.';
  const url = 'https://your-domain.com/projects/visa-destination-insights';

  setContext('copy', copy);
</script>

<Meta title={title} description={description} url={url} />
<About {about} />
