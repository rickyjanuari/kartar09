<script>
  import Image from '../../static/fotoku.jpg';
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
      alt="Ricky Januari"
      class="rounded-full"
    />
  </div>
  <h2 class="text-center">Ricky Januari</h2>
  <p>
    Freelance Full Stack Web Developer, Calisthenics enthusiast, craft beer
    lover, and biohacker. If you like my content, please consider supporting me
    and
    <ExternalLink href="https://www.buymeacoffee.com/rickyjanuari">
      buy me a coffee
    </ExternalLink>!
  </p>
</div>
