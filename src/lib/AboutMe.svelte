<script>
  import Image from '../../static/logo.png';
  import ExternalLink from './ExternalLink.svelte';
</script>

<div class="mb-16">
  <header class="topic-box">
    <h2 class="mt-0">About Me</h2>
  </header>
  <div class="flex justify-center w-1/2 mx-auto mt-5 sm:w-1/3 lg:w-1/2">
    <img
      srcset="{Image}"
      type="image/webp"
      alt="Karang Taruna 09"
      class="rounded-full"
    />
  </div>
  <h2 class="text-center">Karang Taruna 09</h2>
  <p>
    Freelance Full Stack Web Developer, Calisthenics enthusiast, craft beer
    lover, and biohacker. If you like my content, please consider supporting me
    and
    <ExternalLink href="https://www.buymeacoffee.com/karangtaruna09.citapen.com">
      buy me a coffee
    </ExternalLink>!
  </p>
</div>
