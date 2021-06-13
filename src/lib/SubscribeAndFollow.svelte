<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import {
    faTwitter,
    faMedium,
    faGithub,
    faLinkedin,
    faDev,
  } from '@fortawesome/free-brands-svg-icons';
  import { faRss } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';
</script>

<div class="mb-16">
  <header class="topic-box">
    <h2>Subscribe & Follow</h2>
  </header>
  <div class="flex flex-wrap justify-center mt-5">
    <ExternalLink
      href="https://github.com/karangtaruna09.citapen.com"
      ariaLabel="Follow me on GitHub"
      customClass="inline-flex text-teal-900 hover:text-red-700"
    >
      <Icon data="{faGithub}" class="m-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://dev.to/karangtaruna09.citapen.com"
      ariaLabel="Follow me on dev.to"
      customClass="inline-flex text-teal-900 hover:text-red-700"
    >
      <Icon data="{faDev}" class="m-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://www.linkedin.com/in/karangtaruna09.citapen.com/"
      ariaLabel="Network with me on Linkedin"
      customClass="inline-flex text-teal-900 hover:text-red-700"
    >
      <Icon data="{faLinkedin}" class="m-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://twitter.com/karangtaruna09.citapen.com"
      ariaLabel="Tweet with me on Twitter"
      customClass="inline-flex text-teal-900 hover:text-red-700"
    >
      <Icon data="{faTwitter}" class="m-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://medium.com/@karangtaruna09.citapen.com"
      ariaLabel="Follow me on Medium"
      customClass="inline-flex text-teal-900 hover:text-red-700"
    >
      <Icon data="{faMedium}" class="m-3" scale="{2}" />
    </ExternalLink>

    

    <ExternalLink
      href="https://karangtaruna09.citapen.com/rss.xml"
      ariaLabel="Read the RSS feed"
      customClass="inline-flex text-teal-900 hover:text-red-700"
    >
      <Icon data="{faRss}" class="m-3" scale="{2}" />
    </ExternalLink>
  </div>
</div>
